export default {
  PORT: process.env.PORT || 3000,
  dbUri: process.env.dbUri,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",
  adminKey: process.env.adminKey,
  NODE_ENV: process.env.NODE_ENV || "development", 
};
