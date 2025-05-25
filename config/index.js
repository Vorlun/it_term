import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT || 3333,
  NODE_ENV: process.env.NODE_ENV || "development",
  dbUri: process.env.dbUri,

  // JWT
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,
  COOKIE_REFRESH_TIME: parseInt(process.env.COOKIE_REFRESH_TIME, 10),

  // Admin JWT
  adminAccessKey: process.env.ADMIN_ACCESS_KEY,
  adminRefreshKey: process.env.ADMIN_REFRESH_KEY,
  adminAccessExpiresIn: process.env.ADMIN_ACCESS_EXPIRES_IN,
  adminRefreshExpiresIn: process.env.ADMIN_REFRESH_EXPIRES_IN,
  adminCookieRefreshTime: parseInt(process.env.ADMIN_COOKIE_REFRESH_TIME, 10),

  // User JWT
  userAccessKey: process.env.USER_ACCESS_KEY,
  userRefreshKey: process.env.USER_REFRESH_KEY,
  userAccessExpiresIn: process.env.USER_ACCESS_EXPIRES_IN,
  userRefreshExpiresIn: process.env.USER_REFRESH_EXPIRES_IN,
  userCookieRefreshTime: parseInt(process.env.USER_COOKIE_REFRESH_TIME, 10),

  // SMTP
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
  },

  // API
  apiUrl: process.env.API_URL,
};
