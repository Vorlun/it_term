import { Router } from "express";
import * as descTopicController from "../controllers/descTopic.controller.js";

const router = Router();

router.post("/", descTopicController.create);
router.patch("/:id", descTopicController.update);

export default router;
