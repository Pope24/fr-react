import axios from "axios";
const CUSTOMER_API = "http://localhost:3000/customer/";
export const findAllCustomers = async () => {
  try {
    const result = await axios.get(CUSTOMER_API);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const findByIdCustomer = async (id) => {
  try {
    const result = await axios.get(CUSTOMER_API + id);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
