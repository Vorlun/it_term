import { Router } from "express";
import dictRouter from "./dict.routes.js"
import adminRouter from "./admin.routes.js";
import descRouter from "./desc.routes.js";
import guestRouter from "./guest.routes.js";
import authorRouter from "./author.routes.js";
import qaRouter from "./QA.routes.js";
import socialRouter from "./social.routes.js";
import topicRouter from "./topic.routes.js";
import userRouter from "./user.routes.js";
import categoryRouter from "./category.routes.js";


const router = Router();

router.use("/dict", dictRouter);
router.use("/desc", descRouter);
router.use("/qa", qaRouter);
router.use("/author", authorRouter);
router.use("/admin", adminRouter);
router.use("/category", categoryRouter);
router.use("/guest", guestRouter);
router.use("/social", socialRouter);
router.use("/topic", topicRouter);
router.use("/user", userRouter);


export default router;
