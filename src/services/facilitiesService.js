import axios from "axios";
const FACILITIES_API = "http://localhost:3000/facilities/";
export const findAllFacilities = async () => {
  try {
    const result = await axios.get(FACILITIES_API);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const findByIdFacility = async (id) => {
  try {
    const result = await axios.get(FACILITIES_API + id);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
