import { createCrudService } from "../lib/crudService.js";
import AdminModel from "../models/admin.model.js";

const adminService = createCrudService(AdminModel);

adminService.findOneByEmail = async (email) => {
  return AdminModel.findOne({ admin_email: email });
};

adminService.findByRefreshToken = async (refreshToken) => {
  return AdminModel.findOne({ refresh_token: refreshToken });
};

adminService.saveRefreshToken = async (adminId, token) => {
  return AdminModel.findByIdAndUpdate(
    adminId,
    { refresh_token: token },
    { new: true }
  );
};

export default adminService;
