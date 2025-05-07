import { Router } from "express";
import * as authorController from "../controllers/author.controller.js";
import validate from "../middlewares/validate.js";
import {
  createAuthorValidation,
  updateAuthorValidation,
} from "../validations/author.validation.js";

const router = Router();

router.get("/", authorController.getAll);
router.get("/:id", authorController.getOne);
router.post("/", validate(createAuthorValidation), authorController.create);
router.patch("/:id", validate(updateAuthorValidation), authorController.update);

router.delete("/:id", authorController.remove);

export default router;
