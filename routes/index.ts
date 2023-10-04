import { Router } from "express";
import bookRoutes from "./bookRoutes";
import homeRoutes from "./homeRoutes";

const router = Router();

router.use("/", homeRoutes);
router.use("/api/v1/books", bookRoutes);

export default router;
