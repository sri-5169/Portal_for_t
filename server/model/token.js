import mongoose from "mongoose";

const TokenSchema = mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  createdAt:{
    type : Date,
    default : new Date(),
  }
});

const token = mongoose.model("token", TokenSchema);
export default token;
