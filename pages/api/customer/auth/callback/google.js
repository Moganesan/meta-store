import passport from "passport";
import { setCookies } from "cookies-next";
import "lib/passport-google-strategy";

export default async function handler(req, res, next) {
  passport.authenticate("google", (err, user, payload) => {
    setCookies("refreshToken", payload.refreshToken, {
      req,
      res,
      httpOnly: true,
      maxAge: 60 * 6 * 24,
    });
    setCookies("accessToken", payload.accessToken, {
      req,
      res,
      httpOnly: true,
      maxAge: 60 * 6 * 24,
    });
    res.redirect("/");
  })(req, res, next);
}
