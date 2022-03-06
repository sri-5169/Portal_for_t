import mongoose from "mongoose";

const teacherInfoSchema = new mongoose.Schema({
  id: String,
  EST_SL: String,
  SL_NO: String,
  TeacherType: String,
  TeacherName: String,
  DateofBirth: String,
  DateofJoining: String,
  DateofTraining: String,
  AccountNo: String,
  IFSCCode: String,
  UANNumber: String,
  AadhaarNo: String,
  NameAsPerAadhar: String,
  YearAsPerAadhar: String,
  DiseCode: String,
  Employment_Category: String,
  AreaType: String,
  Block: String,
  District: String,
  EmploymentUnit: String,
  GradePay: String,
  PayDraw: String,
  PhoneNumber: String,
});

const teacherInfos = mongoose.model("teachers_info", teacherInfoSchema);
export default teacherInfos;
