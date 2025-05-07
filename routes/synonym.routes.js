import { Router } from "express";
import * as synonymController from "../controllers/synonym.controller.js";

const router = Router();

router.post("/", synonymController.create);
router.patch("/:id", synonymController.update);

export default router;
