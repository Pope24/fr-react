import axios from "axios";
const FREE_SERVICE_API = "http://localhost:3000/freeService/";
export const findAllFreeService = async () => {
  try {
    const result = await axios.get(FREE_SERVICE_API);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const findByIdFreeService = async (id) => {
  try {
    const result = await axios.get(FREE_SERVICE_API + id);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
