import { Router } from "express";
import * as descController from "../controllers/desc.controller.js";
import validate from "../middlewares/validate.js";
import {
  createdescValidation,
  updatedescValidation,
} from "../validations/desc.validation.js";

const router = Router();

router.get("/", descController.getAll);
router.get("/:id", descController.getOne);
router.post("/", validate(createdescValidation), descController.create);
router.patch("/:id", validate(updatedescValidation), descController.update);

router.delete("/:id", descController.remove);

export default router;
