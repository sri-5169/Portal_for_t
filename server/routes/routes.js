import express from "express";
import { GetAllInfos } from "../controllers/InfoController.js";

const router = express.Router();

//infos
router.get("/infos", GetAllInfos);

export default router;
