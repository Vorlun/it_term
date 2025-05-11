import { Router } from "express";
import * as adminController from "../controllers/admin.controller.js";
import { authenticate } from "../middlewares/auth.js";
import { authorizeCreator } from "../middlewares/authorize.js";

const router = Router();

router.get("/", authenticate, adminController.getAll);
router.get("/:id", authenticate, adminController.getOne);
router.post("/", authenticate, authorizeCreator, adminController.create);
router.put("/:id", authenticate, authorizeCreator, adminController.update);
router.delete("/:id", authenticate, authorizeCreator, adminController.remove);
router.post("/login", adminController.login);

export default router;
