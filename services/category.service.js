import categoryModel from "../models/category.model.js";
import { createCrudService } from "../lib/crudService.js";

const categoryService = createCrudService(categoryModel);

export default categoryService;
