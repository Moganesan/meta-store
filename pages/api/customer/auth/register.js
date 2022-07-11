import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

export default async function register(req, res) {
  const { name, email, password } = req.body;

  const checkuser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (checkuser)
    return res
      .status(409)
      .json({ status: 409, message: "User Already Registered!" });

  const salt = await bcrypt.genSalt(10);

  const encryptPass = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: encryptPass,
      role: "customer",
    },
  });

  const refreshToken = jwt.sign(
    {
      uid: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      image: user.image,
      createdAt: user.createdAt,
    },
    process.env.REFRESH_TOKEN_PRIVATE_KEY,
    {
      expiresIn: "30d",
    }
  );

  const accessToken = jwt.sign(
    {
      uid: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      image: user.image,
      createdAt: user.createdAt,
    },
    process.env.ACCESS_TOKEN_PRIVATE_KEY,
    {
      expiresIn: "1h",
    }
  );

  console.log(refreshToken.length);

  await prisma.session.create({
    data: {
      uid: user.id,
      refresh_token: refreshToken,
    },
  });

  setCookie("refreshToken", refreshToken, {
    req,
    res,
    httpOnly: true,
    maxAge: 60 * 6 * 24,
  });

  setCookie("accessToken", accessToken, {
    req,
    res,
    httpOnly: true,
    maxAge: 60 * 6 * 24,
  });

  res.status(200).json({ message: "Registration Success", data: user });
}
