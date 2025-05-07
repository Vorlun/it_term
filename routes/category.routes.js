import { Router } from "express";
import * as categoryController from "../controllers/category.controller.js";
import validate from "../middlewares/validate.js";
import {
  createCategoryValidation,
  updateCategoryValidation,
} from "../validations/category.validation.js";

const router = Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getOne);
router.post("/", validate(createCategoryValidation), categoryController.create);
router.patch("/:id", validate(updateCategoryValidation), categoryController.update);

router.delete("/:id", categoryController.remove);

export default router;
