import { Router } from "express";
import * as socialController from "../controllers/social.controller.js";
import validate from "../middlewares/validate.js";
import {
  createsocialValidation,
  updatesocialValidation,
} from "../validations/social.validation.js";

const router = Router();

router.get("/", socialController.getAll);
router.get("/:id", socialController.getOne);
router.post("/", validate(createsocialValidation), socialController.create);
router.patch("/:id", validate(updatesocialValidation), socialController.update);

router.delete("/:id", socialController.remove);

export default router;
