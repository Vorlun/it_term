import { Router } from "express";
import * as tagController from "../controllers/tag.controller.js";

const router = Router();

router.post("/", tagController.create);
router.patch("/:id", tagController.update);

export default router;
