import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import passport from "passport";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/customer/auth/callback/google",
    },
    async (_accessToken, _refreshToken, profile, cb) => {
      try {
        const checkUser = await prisma.user.findUnique({
          where: {
            email: profile.email,
          },
        });

        let user = {};

        if (!checkUser) {
          user = await prisma.user.create({
            data: {
              name: profile.displayName,
              email: profile.email,
              image: profile.picture,
              role: "customer",
              createdAt: new Date(),
            },
          });
        } else {
          await prisma.user.update({
            where: {
              id: checkUser.id,
            },
            data: {
              lastSignIn: new Date(),
            },
          });
          user = checkUser;
        }

        const accessToken = await jwt.sign(
          {
            uid: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            image: user.image,
            createdAt: user.createdAt,
          },
          process.env.ACCESS_TOKEN_PRIVATE_KEY,
          { expiresIn: "1h" }
        );

        const refreshToken = await jwt.sign(
          {
            uid: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            image: user.image,
            createdAt: user.createdAt,
          },
          process.env.REFRESH_TOKEN_PRIVATE_KEY,
          { expiresIn: "30d" }
        );

        // const svpToken = await axios.get(
        //   `${process.env.SVP_BASE_URL}?l=api&a=svp_auth_get_token&api_key=${process.env.SVP_API_KEY}&api_code=${process.env.SVP_API_CODE}`
        // );

        // console.log(svpToken.data);

        const userToken = await prisma.session.findFirst({
          where: {
            uid: user.id,
          },
        });

        if (userToken)
          await prisma.session.delete({
            where: {
              uid: user.id,
            },
          });

        await prisma.session.create({
          data: {
            uid: user.id,
            refresh_token: refreshToken,
          },
        });

        return cb(null, profile, {
          message: "Auth successful",
          refreshToken,
          accessToken,
        });
      } catch (e) {
        console.log(e);
        return cb(e, false, { message: "internar server error" });
      }
    }
  )
);

export default passport;
