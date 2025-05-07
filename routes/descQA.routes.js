import { Router } from "express";
import * as descQAController from "../controllers/descQA.controller.js";

const router = Router();

router.post("/", descQAController.create);
router.patch("/:id", descQAController.update);

export default router;
