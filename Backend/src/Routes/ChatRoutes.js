import express from "express";
import { getStreamToken } from "../Controllers/ChatController.js";
import { protectRoute } from "../Middleware/ProtectRoute.js";

const router = express.Router();

router.get("/token", protectRoute, getStreamToken);

export default router;