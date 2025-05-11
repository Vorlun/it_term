// services/qa.service.js
import qaModel from "../models/QA.model.js";
import { createCrudService } from "../lib/crudService.js";

const qaService = createCrudService(qaModel);

export default qaService;
