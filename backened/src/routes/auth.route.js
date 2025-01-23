import { Router } from "express";
import { User } from "../models/user.model.js";
import { authcallback } from "../controller/auth.controller.js";
const router = Router();

router.post("/callback", authcallback);

export default router;