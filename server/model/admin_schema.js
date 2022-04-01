import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  Name: String,
  DateofBirth: String,
  AadhaarNo: String,
  Email: String,
  Password: String,
});

const Admin = mongoose.model("admin", adminSchema);
export default Admin;
