import { Router } from "express";
import * as qaController from "../controllers/qa.controller.js";
import validate from "../middlewares/validate.js";
import {
  createqaValidation,
  updateqaValidation,
} from "../validations/QA.validation.js";

const router = Router();

router.get("/", qaController.getAll);
router.get("/:id", qaController.getOne);
router.post("/", validate(createqaValidation), qaController.create);
router.patch("/:id", validate(updateqaValidation), qaController.update);

router.delete("/:id", qaController.remove);

export default router;
