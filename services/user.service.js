import AdminModel from "../models/admin.model.js";
import { createCrudService } from "../lib/crudService.js";

export default createCrudService(AdminModel);