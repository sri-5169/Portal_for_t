import axios from "axios";
const URL = "http://localhost:8000";
export const getAllInfos = async () => {
  try {
    let response = await axios.get(`${URL}/infos`);
    return response.data;
  } catch (error) {
    console.log("Error while calling GetAllInfos API ", error);
  }
};
export const getInfo = async (id) => {
  try {
    let response = await axios.get(`${URL}/detail/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling get info API ", error);
  }
};
