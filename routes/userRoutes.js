import express from "express";
import { testRoute } from "../controller/userController.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.route("/testRoute").post(testRoute);

export default router;
