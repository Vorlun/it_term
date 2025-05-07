import { Router } from "express";
import * as topicController from "../controllers/topic.controller.js";
import validate from "../middlewares/validate.js";
import {
  createTopicValidation,
  updateTopicValidation,
} from "../validations/topic.validation.js";

const router = Router();

router.get("/", topicController.getAll);
router.get("/:id", topicController.getOne);
router.post("/", validate(createTopicValidation), topicController.create);
router.patch("/:id", validate(updateTopicValidation), topicController.update);

router.delete("/:id", topicController.remove);

export default router;
