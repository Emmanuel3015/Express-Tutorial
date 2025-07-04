import express from "express";
import { userLogin, userSignup } from "./controller.js";

let router = express.Router();

router.get("/login", userLogin);
router.get("/signup", userSignup);

export default router;
