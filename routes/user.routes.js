import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import validate from "../middlewares/validate.js";
import {
  createUserValidation,
  updateUserValidation,
} from "../validations/user.validation.js";

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.post("/", validate(createUserValidation), userController.create);
router.patch("/:id", validate(updateUserValidation), userController.update);

router.delete("/:id", userController.remove);

export default router;
