import { Router } from "express";
import * as authorSocialController from "../controllers/descQA.controller.js";

const router = Router();

router.post("/", authorSocialController.create);
router.patch("/:id", authorSocialController.update);

export default router;
