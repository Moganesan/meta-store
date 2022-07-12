import { PrismaClient } from "@prisma/client";
import { getCookie, deleteCookie, setCookie } from "cookies-next";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function login(req, res) {
  const token = getCookie("refreshToken", { req, res });
  const verifyUser = jwt.verify(token, process.env.REFRESH_TOKEN_PRIVATE_KEY);

  const verifySession = await prisma.session.findFirst({
    where: {
      uid: verifyUser.uid,
    },
  });

  if (!verifySession) res.redirect("/");

  const user = await prisma.user.update({
    where: {
      id: verifySession.uid,
    },

    data: {
      role: "vendor",
    },
  });

  deleteCookie("refreshToken");
  deleteCookie("accessToken");

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
      expiresIn: "1H",
    }
  );
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

  res.redirect("/");

  res.status(200).json({ message: "Role Updated" });
}
