import Teacher from "../model/teacher_schema.js";

export const GetAllInfos = async (req, res) => {
  try {
    let infos = await Teacher.find({});
    res.status(200).json(infos);
  } catch (error) {
    console.log(error.messsage);
    res.status(500).json(error);
  }
};
