import userModel from "../models/user.model.js";
import { createCrudService } from "../lib/crudService.js";

export default createCrudService(userModel);