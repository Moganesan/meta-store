import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function verifyUser(req, res) {
  const auth = req.headers.authorization;

  const refreshToken = auth?.split(" ")[1] || req.cookies.refreshToken;

  if (refreshToken == "undefined" || refreshToken == undefined) {
    return res.status(403).send({ status: 403, message: "Unauthorized" });
  }

  const verifyUser = jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_PRIVATE_KEY
  );

  const user = await prisma.user.findUnique({
    where: {
      id: verifyUser.uid,
    },
  });

  if (!user)
    return res.status(403).json({
      status: 403,
      message: "Unauthorized",
    });

  return res.status(200).json({
    status: 200,
    user: {
      uid: user.id,
      email: user.email,
      name: user.name,
      image: user.image,
      role: user.role,
      createdAt: user.createdAt,
    },
    message: "Authenticated",
  });
}
