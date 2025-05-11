import dictModel from "../models/dict.model.js";
import { createCrudService } from "../lib/crudService.js";

const dictService = createCrudService(dictModel);

export default dictService;
