import { Router } from "express";
import * as dictController from "../controllers/dict.controller.js";
import validate from "../middlewares/validate.js";
import {
  createdictValidation,
  updatedictValidation,
} from "../validations/dict.validation.js";

const router = Router();

router.get("/", dictController.getAll);
router.get("/:id", dictController.getOne);
router.post("/", validate(createdictValidation), dictController.create);
router.patch("/:id", validate(updatedictValidation), dictController.update);

router.delete("/:id", dictController.remove);

export default router;
