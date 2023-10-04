import { Router } from "express";
import { getAllBooks, createBook } from "../controller/bookController";

const router = Router();

router.get("/", getAllBooks);
router.post("/", createBook);

export default router;
