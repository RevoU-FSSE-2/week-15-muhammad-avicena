import { Router } from "express";
import authRoutes from "./authRoutes";
import homeRoutes from "./homeRoutes";

const router = Router();

router.use("/", homeRoutes);
router.use("/api/v1/auth", authRoutes);

export default router;
