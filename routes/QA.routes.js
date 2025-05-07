import { Router } from "express";
import * as qaController from "../controllers/qa.controller.js";
import validate from "../middlewares/validate.js";
import {
  createQAValidation,
  updateQAValidation,
} from "../validations/QA.validation.js";

const router = Router();

router.get("/", qaController.getAll);
router.get("/:id", qaController.getOne);
router.post("/", validate(createQAValidation), qaController.create);
router.patch("/:id", validate(updateQAValidation), qaController.update);

router.delete("/:id", qaController.remove);

export default router;
