import express from "express";
import { CreateAdmin, LoginAdmin } from "../controllers/admin_controller.js";
import { GetAllComplaints, GetComplaint, SeeComplaint } from "../controllers/complaint_controller.js";
import {
  CreateTeacherInfo,
  GetAllInfos,
  GetInfo,
} from "../controllers/info_controller.js";
import { CreateReport, GetAllReports } from "../controllers/report_controller.js";
import { UserCounter } from "../controllers/user_controller.js";

const router = express.Router();

//admins
router.post("/signup", CreateAdmin);
router.post("/login",LoginAdmin);

//infos
router.get("/infos", GetAllInfos);
router.get("/detail/:id", GetInfo);
router.post("/newInfo", CreateTeacherInfo);


// users
router.get("/countuser",UserCounter);

// complaints
router.get("/complaints", GetAllComplaints);
router.get("/complaint/:id", GetComplaint);
router.put("/seenComplaint/:id",SeeComplaint);

// reports
router.post("/newReport",CreateReport);
router.get("/reports",GetAllReports);

export default router;
