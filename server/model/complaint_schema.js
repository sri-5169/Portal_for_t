import mongoose from "mongoose";
const complaint_schema = new mongoose.Schema({
  title: { type: String, required: true },
  complaineeUANN: { type: String, required: true },
  picture: { type: String },
  adminName : {type : String, required : true},
  description: { type: String, required: true},
  school: { type: String, required: true },
  complaintDate : {type : Date ,default :  new Date()},
  seen : {type : Boolean, default : false},
});
const complaintInfos = mongoose.model("complaints_info", complaint_schema);
export default complaintInfos;
