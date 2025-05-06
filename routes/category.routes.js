import { Router } from "express";
import * as categoryController from "../controllers/category.controller.js";
import validate from "../middlewares/validate.js";
import {
  createcategoryValidation,
  updatecategoryValidation,
} from "../validations/category.validation.js";

const router = Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getOne);
router.post("/", validate(createcategoryValidation), categoryController.create);
router.patch("/:id", validate(updatecategoryValidation), categoryController.update);

router.delete("/:id", categoryController.remove);

export default router;
