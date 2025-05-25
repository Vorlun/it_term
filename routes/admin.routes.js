import { Router } from "express";
import * as adminController from "../controllers/admin.controller.js";
import { authGuard } from "../middlewares/guards/auth.guard.js";
import {roleGuard} from "../middlewares/guards/role.guard.js";

const router = Router();

router.get("/", authGuard, adminController.getAll);
router.get("/:id", authGuard, adminController.getOne);
router.post("/", adminController.create);
router.put("/:id", authGuard, roleGuard, adminController.update);
router.delete("/:id", authGuard, roleGuard, adminController.remove);
router.post("/login", adminController.login);

export default router;
