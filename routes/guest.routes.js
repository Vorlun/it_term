import { Router } from "express";
import * as guestController from "../controllers/guest.controller.js";
import validate from "../middlewares/validate.js";
import {
  createguestValidation,
  updateguestValidation,
} from "../validations/guest.validation.js";

const router = Router();

router.get("/", guestController.getAll);
router.get("/:id", guestController.getOne);
router.post("/", validate(createguestValidation), guestController.create);
router.patch("/:id", validate(updateguestValidation), guestController.update);

router.delete("/:id", guestController.remove);

export default router;
