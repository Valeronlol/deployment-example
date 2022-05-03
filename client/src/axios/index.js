import axios from "axios";
import { url } from "../constant";

export const getImagesAxios = async () => {
  return await axios.get(`${url}/pets/images`);
};

export const login = async (payload) => {
  try {
    await axios
      .post(`${url}/auth/login`, payload, {
        headers: {
          "Access-Control-Allow-Origin": url,
          "Content-Type": "application/json",
        },
      })
      .then((responce) => console.log("hello", responce.data));
  } catch (error) {
    console.log(error);
  }
};

export const registration = async (payload) => {
  try {
    await axios
      .post(`${url}/auth/registration`, payload, {
        headers: {
          "Access-Control-Allow-Origin": url,
          "Content-Type": "application/json",
        },
      })
      .then((responce) => console.log(responce.data));
  } catch (error) {
    console.log(error);
  }
};
