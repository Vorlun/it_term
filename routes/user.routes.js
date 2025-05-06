import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import validate from "../middlewares/validate.js";
import {
  createuserValidation,
  updateuserValidation,
} from "../validations/user.validation.js";

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.post("/", validate(createuserValidation), userController.create);
router.patch("/:id", validate(updateuserValidation), userController.update);

router.delete("/:id", userController.remove);

export default router;
