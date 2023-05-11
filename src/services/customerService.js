import axios from "axios";
const CUSTOMER_API = "http://localhost:8080/api-customer/";
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
    const result = await axios.get(CUSTOMER_API + id, { maxRedirects: 0 });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const addNewCustomer = async (data) => {
  console.log(data);
  try {
    await axios.post(CUSTOMER_API, data);
  } catch (error) {
    console.log(error);
  }
};
export const updateCustomer = async (data) => {
  try {
    await axios.put(CUSTOMER_API, data);
  } catch (error) {
    console.log(error);
  }
};
export const deleteCustomerById = async (id) => {
  try {
    await axios.delete(CUSTOMER_API + id);
  } catch (error) {
    console.log(error);
  }
};
export const findAllCustomersByType = async (id) => {
  try {
    const result = await axios.get(CUSTOMER_API + "type-customer/" + id);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const findAllCustomersByNameContaining = async (name) => {
  console.log(CUSTOMER_API + "?name=" + name);
  try {
    const result = await axios.get(CUSTOMER_API + "search?name=" + name);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
