import { createCrudService } from "../lib/crudService.js";
import authorModel from "../models/author.model.js";

const authorService = createCrudService(authorModel);
export default authorService;
