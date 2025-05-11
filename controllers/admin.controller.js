import adminModel from "../models/admin.model.js";
import adminService from "../services/admin.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import adminModel from "../models/admin.model.js";
import bcrypt from "bcrypt";
import { signToken, signRefreshToken } from "../utils/generateToken.js";

const generateTokens = (admin) => {
  const payload = {
    id: admin._id,
    email: admin.admin_email,
    isCreator: admin.admin_is_creator,
  };

  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "15m",
  });

  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d",
  });

  return { accessToken, refreshToken };
};

export const login = async (req, res, next) => {
  try {
    const { admin_email, admin_password } = req.body;
    const admin = await adminModel.findOne({ admin_email });

    if (!admin) {
      return res.status(401).json({ message: "Email notogri" });
    }

    const validPassword = await bcrypt.compare(
      admin_password,
      admin.admin_password
    );
    if (!validPassword) {
      return res.status(401).json({ message: "Parol noto‘g‘ri" });
    }

    const payload = {
      id: admin._id,
      email: admin.admin_email,
      role: admin.admin_is_creator ? "creator" : "admin",
    };

    const accessToken = signToken(payload);
    const refreshToken = signRefreshToken(payload);

    res.status(200).json({
      success: true,
      message: "Muvaffaqiyatli tizimga kirildi",
      accessToken,
      refreshToken,
      user: payload,
    });
  } catch (err) {
    next(err);
  }
};

export const refresh = async (req, res, next) => {
  try {
    const user = req.user;
    const admin = await adminModel.findById(user.id);
    if (!admin) {
      return res
        .status(401)
        .json({ success: false, message: "Foydalanuvchi topilmadi" });
    }

    const { accessToken, refreshToken } = generateTokens(admin);

    res.status(200).json({
      success: true,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const { admin_email, admin_password } = req.body;

    const existing = await adminModel.findOne({ admin_email });
    if (existing) {
      return res
        .status(409)
        .json({ success: false, message: "Email allaqachon mavjud" });
    }

    const hashedPassword = await bcrypt.hash(admin_password, 10);
    const newAdmin = await adminService.create({
      ...req.body,
      admin_password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      data: newAdmin,
    });
  } catch (error) {
    next(error);
  }
};
