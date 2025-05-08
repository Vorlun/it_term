import AdminModel from "../models/admin.model.js";
import { createCrudService } from "../lib/crudService.js";

const adminService = createCrudService(AdminModel);

export default adminService;
