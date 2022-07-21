import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  Name:  {type : String, required: true,},
  DateofBirth:  {type : String, required: true,},
  AadhaarNo:  {type : String, required: true,unique : true,},
  Email:  {type : String, required: true,unique : true,},
  Password:  {type : String, required: true,},
});

const Admin = mongoose.model("admin", adminSchema);
export default Admin;
