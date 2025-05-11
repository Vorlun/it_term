import descModel from "../models/desc.model.js";
import { createCrudService } from "../lib/crudService.js";

const descService = createCrudService(descModel);

export default descService;
