import axios from "axios";
const TYPE_ROOM_API = "http://localhost:3000/typeRoom/";
export const findAllTypeRoom = async () => {
  try {
    const result = await axios.get(TYPE_ROOM_API);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const findByIdTypeRoom = async (id) => {
  try {
    const result = await axios.get(TYPE_ROOM_API + id);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
