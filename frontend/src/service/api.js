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

export const createTeacherInfo = async (info) => {
  try {
    console.log("hello from createTeacherInfo API ", info);
    await axios.post(`${URL}/newInfo`, info);
  } catch (error) {
    console.log("Error while calling createDetails API", error);
  }
};

// users

export const createAdmin = async (newUser) => {
  try {
    console.log(newUser);
    await axios.post(`${URL}/signup`, newUser);
  } catch (error) {
    console.log("Error while calling createUser API", error);
  }
};

export const loginAdmin = async (user) => {
  try {
    let response = await axios.post(`${URL}/login`, user);
    alert(response.data.message);
    console.log(response.data.loggedInUser);
    return response.data.loggedInUser;
  } catch (error) {
    console.log("Error while calling login API", error);
  }
};
