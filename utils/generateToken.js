import jwt from "jsonwebtoken";

const accessSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshSecret = process.env.REFRESH_TOKEN_SECRET;

export const signToken = (payload) => {
  return jwt.sign(payload, accessSecret, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES || "15m",
  });
};

export const signRefreshToken = (payload) => {
  return jwt.sign(payload, refreshSecret, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES || "7d",
  });
};

export const verifyAccessToken = (token) => {
  return jwt.verify(token, accessSecret);
};

export const verifyRefreshToken = (token) => {
  return jwt.verify(token, refreshSecret);
};
