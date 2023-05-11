import axios from "axios";
const TYPE_CUSTOMER_API = "http://localhost:8080/api-typeCustomer";
export const findAllTypeCustomer = async () => {
  try {
    const result = await axios.get(TYPE_CUSTOMER_API);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
