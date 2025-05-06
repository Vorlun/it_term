import { Router } from "express";
import * as authorController from "../controllers/author.controller.js";
import validate from "../middlewares/validate.js";
import {
  createauthorValidation,
  updateauthorValidation,
} from "../validations/author.validation.js";

const router = Router();

router.get("/", authorController.getAll);
router.get("/:id", authorController.getOne);
router.post("/", validate(createauthorValidation), authorController.create);
router.patch("/:id", validate(updateauthorValidation), authorController.update);

router.delete("/:id", authorController.remove);

export default router;
