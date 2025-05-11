import socialModel from "../models/social.model.js";
import { createCrudService } from "../lib/crudService.js";

const socialService = createCrudService(socialModel);

export default socialService;
