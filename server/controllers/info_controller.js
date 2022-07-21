import { request, response } from "express";
import Teacher from "../model/teacher_schema.js";

export const GetAllInfos = async (req, res) => {
  try {
    let infos = await Teacher.find({});
    console.log("infos are ");
    // console.log(infos);
    res.status(200).json(infos);
  } catch (error) {
    console.log(error.messsage);
    res.status(500).json(error);
  }
};

export const GetInfo = async (request, response) => {
  try {
    let info = await Teacher.findById(request.params.id);
    console.log(info);
    response.status(200).json(info);
  } catch (error) {
    console.log(error.messsage);
    response.status(500).json(error);
  }
};

export const CreateTeacherInfo = async (request, response) => {
  console.log(request.body);
  try {
    const details = request.body;
    const newTeacher = await new Teacher(details);
    newTeacher.save();
    response.status(200).json("Details successfully saved");
    // }
  } catch (error) {
    console.log("Error in backend of createTeacherInfos:  ", error.message);
  }
};
