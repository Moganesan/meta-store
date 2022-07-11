import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

export default async function login(req, res) {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user)
    res.status(404).send({
      status: 404,
      message: "user not found please register!",
    });

  const match = await bcrypt.compare(password, user.password);

  if (match) {
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

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
      expiresIn: "1h",
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

    res.status(200).send({ status: 200, message: "login success" });
  } else {
    res.status(403).send({ status: 403, message: "invalid password" });
  }
}
