import bcrypt from "bcrypt";
import adminService from "../services/admin.service.js";
import {
  signToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../utils/generateToken.js";

export const login = async (req, res, next) => {
  try {
    const { admin_email, admin_password } = req.body;
    if (!admin_email || !admin_password) {
      return res
        .status(400)
        .json({ message: "Email va parol kiritilishi shart" });
    }

    const admin = await adminService.findOneByEmail(admin_email);
    if (!admin) {
      return res.status(401).json({ message: "Email yoki parol noto‘g‘ri" });
    }

    const validPassword = await bcrypt.compare(
      admin_password,
      admin.admin_password
    );
    if (!validPassword) {
      return res.status(401).json({ message: "Email yoki parol noto‘g‘ri" });
    }

    const payload = {
      id: admin._id,
      email: admin.admin_email,
      role: admin.admin_is_creator ? "creator" : "admin",
    };

    const accessToken = signToken(payload);
    const refreshToken = signRefreshToken(payload);

    await adminService.saveRefreshToken(admin._id, refreshToken);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge:
        parseInt(process.env.COOKIE_REFRESH_EXPIRES) || 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Tizimga muvaffaqiyatli kirdingiz",
      accessToken,
      user: payload,
    });
  } catch (err) {
    next(err);
  }
};

export const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res
        .status(401)
        .json({ success: false, message: "Refresh token topilmadi" });
    }

    let payload;
    try {
      payload = verifyRefreshToken(refreshToken);
    } catch {
      return res
        .status(401)
        .json({
          success: false,
          message: "Refresh token noto‘g‘ri yoki eskirgan",
        });
    }

    const admin = await adminService.findByRefreshToken(refreshToken);
    if (!admin) {
      return res
        .status(401)
        .json({ success: false, message: "Refresh token bazada topilmadi" });
    }

    const newPayload = {
      id: admin._id,
      email: admin.admin_email,
      role: admin.admin_is_creator ? "creator" : "admin",
    };

    const newAccessToken = signToken(newPayload);
    const newRefreshToken = signRefreshToken(newPayload);

    await adminService.saveRefreshToken(admin._id, newRefreshToken);

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge:
        parseInt(process.env.COOKIE_REFRESH_EXPIRES) || 7 * 24 * 60 * 60 * 1000,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge:
        parseInt(process.env.COOKIE_REFRESH_EXPIRES) || 7 * 24 * 60 * 60 * 1000,
    });
    
    res.status(200).json({
      success: true,
      accessToken: newAccessToken,
    });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res
        .status(400)
        .json({ message: "Refresh token cookie da topilmadi" });
    }

    const admin = await adminService.findByRefreshToken(refreshToken);
    if (!admin) {
      return res
        .status(400)
        .json({ message: "Refresh token bazada topilmadi" });
    }

    await adminService.saveRefreshToken(admin._id, "");

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    res
      .status(200)
      .json({ message: "Tizimdan chiqish muvaffaqiyatli amalga oshirildi" });
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const { admin_email, admin_password } = req.body;
    if (!admin_email || !admin_password) {
      return res
        .status(400)
        .json({ message: "Email va parol kiritilishi shart" });
    }

    const existing = await adminService.findOneByEmail(admin_email);
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

export const getAll = async (req, res, next) => {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = parseInt(req.query.limit) || 10;

    const totalItems = await adminService.count();
    const data = await adminService.getAll(limit, page);

    res.status(200).json({
      success: true,
      meta: {
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
        limit,
      },
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const admin = await adminService.getOne(req.params.id);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "admin not found",
      });
    }

    res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const updated = await adminService.update(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "admin not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const deleted = await adminService.remove(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "admin not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "admin deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
