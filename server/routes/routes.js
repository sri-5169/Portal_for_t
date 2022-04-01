import express from "express";
import { CreateAdmin } from "../controllers/admin_controller.js";
import {
  CreateTeacherInfo,
  GetAllInfos,
  GetInfo,
} from "../controllers/InfoController.js";

const router = express.Router();

//admins
router.post("/signup", CreateAdmin);

//infos
router.get("/infos", GetAllInfos);
router.get("/detail/:id", GetInfo);
router.post("/newInfo", CreateTeacherInfo);
export default router;
