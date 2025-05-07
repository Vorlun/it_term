import { Router } from "express";
import * as guestController from "../controllers/guest.controller.js";
import validate from "../middlewares/validate.js";
import {
  createGuestValidation,
  updateGuestValidation,
} from "../validations/guest.validation.js";

const router = Router();

router.get("/", guestController.getAll);
router.get("/:id", guestController.getOne);
router.post("/", validate(createGuestValidation), guestController.create);
router.patch("/:id", validate(updateGuestValidation), guestController.update);

router.delete("/:id", guestController.remove);

export default router;
