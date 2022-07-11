import { deleteCookie } from "cookies-next";

export default async function logout(req, res) {
  deleteCookie("refreshToken", { req, res });
  deleteCookie("accessToken", { req, res });

  res.redirect("/");
}
