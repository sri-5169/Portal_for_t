import { teacherInfos } from "./constants/teacher.js";
import Teacher from "./model/teacher_schema.js";

const DefaultData = async () => {
  try {
    await Teacher.insertMany(teacherInfos);
    console.log("Data imported successfully");
    // await Teacher.updateMany({}, { $set: { PhoneNumber: "9988998899" } });
    // console.log("Data updated successfully");
  } catch (error) {
    console.log("Default not submitted", error.message);
  }
};

export default DefaultData;
