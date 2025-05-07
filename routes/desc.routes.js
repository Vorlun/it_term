import { Router } from "express";
import * as descController from "../controllers/desc.controller.js";
import validate from "../middlewares/validate.js";
import {
  createDescValidation,
  updateDescValidation,
} from "../validations/desc.validation.js";

const router = Router();

router.get("/", descController.getAll);
router.get("/:id", descController.getOne);
router.post("/", validate(createDescValidation), descController.create);
router.patch("/:id", validate(updateDescValidation), descController.update);

router.delete("/:id", descController.remove);

export default router;
