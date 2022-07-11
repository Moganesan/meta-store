import passport from "passport";
import "lib/passport-google-strategy";

export default async function google(req, res, next) {
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })(req, res, next);
}
