import express from "express";
import { GetAllInfos, GetInfo } from "../controllers/InfoController.js";

const router = express.Router();

//infos
router.get("/infos", GetAllInfos);
router.get("/detail/:id", GetInfo);
export default router;
