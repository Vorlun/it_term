import { Router } from "express";
import * as adminController from "../controllers/admin.controller.js";
import validate from "../middlewares/validate.js";
import {
  createAdminValidation,
  updateAdminValidation,
} from "../validations/admin.validation.js";

const router = Router();

router.get("/", adminController.getAll);
router.get("/:id", adminController.getOne);
router.post("/", validate(createAdminValidation), adminController.create);
router.patch("/:id", validate(updateAdminValidation), adminController.update);

router.delete("/:id", adminController.remove);

export default router;
