import { Router } from "express";
import * as socialController from "../controllers/social.controller.js";
import validate from "../middlewares/validate.js";
import {
  createSocialValidation,
  updateSocialValidation,
} from "../validations/social.validation.js";

const router = Router();

router.get("/", socialController.getAll);
router.get("/:id", socialController.getOne);
router.post("/", validate(createSocialValidation), socialController.create);
router.patch("/:id", validate(updateSocialValidation), socialController.update);

router.delete("/:id", socialController.remove);

export default router;
