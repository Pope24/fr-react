import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import "./FormCustomer.css";
import { useEffect, useState } from "react";
import {
  addNewCustomer,
  findByIdCustomer,
  updateCustomer,
} from "../../services/customerService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Skeleton from "react-loading-skeleton";
import { HashLoader } from "react-spinners";
import * as Yup from "yup";
import { findAllTypeCustomer } from "../../services/typeCustomerService";
import { ToastContainer, toast } from "react-toastify";
function FormCustomer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [typeCustomer, setTypeCustomer] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const REGEX = {
    NAME: /^([A-Z_ÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ][a-z_àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹý]*(\s[A-Z_ÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ][a-z_àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹý]*)*)$/,
    PHONE_NUMBER: /^(090|091|(84)+90|(84)+91)[0-9]{7}$/,
    CMND: /^[0-9]{9}$|^[0-9]{12}$/,
    EMAIL: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  useEffect(() => {
    const fetchApiCustomerById = async () => {
      if (id == undefined) {
        await setTimeout(() => {
          setCustomer({});
        }, 1500);
        return;
      }
      const result = await findByIdCustomer(id);
      console.log(result);
      await setTimeout(() => {
        setCustomer(result);
      }, 1500);
    };
    const fetchApiTypeCustomer = async () => {
      const result = await findAllTypeCustomer();
      setTypeCustomer(result);
    };
    fetchApiCustomerById();
    fetchApiTypeCustomer();
  }, []);
  console.log(customer);
  return (
    <div>
      <Header />
      <div className="content mt-5 mb-5">
        <section className="gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7 d-flex justify-content-center">
                <div
                  className="card card-registration"
                  style={{ borderRadius: "15px", height: "700px" }}
                >
                  {customer == null ? (
                    <>
                      <Skeleton count={30} style={{ lineHeight: 0.4 }} />
                      <h3 className="title mb-4 pb-2 pb-md-0 mb-md-5">
                        Loading...
                      </h3>
                    </>
                  ) : (
                    <div className="card-body p-4 p-md-5">
                      <h3 className="title mb-4 pb-2 pb-md-0 mb-md-5">
                        {id ? "Chỉnh sửa khách hàng" : "Thêm mới khách hàng"}
                      </h3>
                      {loading ? (
                        <div className="d-flex justify-content-center align-items-center flex-column">
                          <HashLoader
                            color="#000"
                            cssOverride={{
                              marginTop: 200,
                              textAlign: "center",
                            }}
                            size={100}
                          />
                          <h3
                            className="title mb-4 pb-2 pb-md-0 mb-md-5"
                            style={{ fontFamily: "Montserrat" }}
                          >
                            Loading...
                          </h3>
                        </div>
                      ) : (
                        <Formik
                          initialValues={{
                            name: customer.name,
                            dateOfBirth: customer.dateOfBirth || "",
                            gender: customer.gender || "",
                            identity: customer.identity,
                            phoneNumber: customer.phoneNumber,
                            email: customer.email || "",
                            address: customer.address || "",
                            id: customer.id || null,
                            typeCustomer: customer.typeCustomer || null,
                          }}
                          validationSchema={Yup.object({
                            name: Yup.string()
                              .required("Tên bắt buộc nhập.")
                              .matches(REGEX.NAME, "Chữ cái đầu phải viết hoa"),
                            phoneNumber: Yup.string()
                              .required("Số điện thoại bắt buộc nhập.")
                              .matches(
                                REGEX.PHONE_NUMBER,
                                "SDT phải bắt đầu 090|091|(84)+90|(84)+91 và 10 chữ số."
                              ),
                            identity: Yup.string()
                              .required("Số CMND bắt buộc phải nhập.")
                              .matches(
                                REGEX.CMND,
                                "Số CMND bắt buộc 9 số hoặc 12 số."
                              ),
                            dateOfBirth: Yup.string().required(
                              "Ngày sinh bắt buộc nhập"
                            ),
                            email: Yup.string()
                              .required("Email bắt buộc nhập.")
                              .matches(
                                REGEX.EMAIL,
                                "Email nhập không đúng định dạng."
                              ),
                          })}
                          onSubmit={async (values) => {
                            values.typeCustomer = {
                              id: values.typeCustomer.id,
                            };
                            console.log(values);
                            if (values.id) {
                              await updateCustomer(values);
                            } else {
                              await addNewCustomer(values);
                            }
                            await setLoading(true);
                            await setTimeout(() => {
                              setLoading(false);
                              {
                                values.id
                                  ? toast(
                                      "Thêm mới " + values.name + " thành công."
                                    )
                                  : toast(
                                      "Chỉnh sửa " +
                                        values.name +
                                        " thành công."
                                    );
                              }
                            }, 1500);
                          }}
                        >
                          <Form>
                            <div className="row">
                              <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                  <Field
                                    type="text"
                                    name="name"
                                    className="form-control form-control-lg fs-16"
                                  />
                                  <label className="form-label">Họ tên</label>
                                </div>
                                <ErrorMessage
                                  component={"p"}
                                  className="error"
                                  name="name"
                                />
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                  <Field
                                    type="text"
                                    id="lastName"
                                    name="identity"
                                    className="form-control form-control-lg fs-16"
                                  />
                                  <label className="form-label" for="lastName">
                                    Số CMND
                                  </label>
                                  <ErrorMessage
                                    className="error"
                                    component={"p"}
                                    name="identity"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 mb-4 d-flex align-items-center">
                                <div className="form-outline datepicker w-100">
                                  <Field
                                    type="date"
                                    name="dateOfBirth"
                                    className="form-control form-control-lg fs-16"
                                    id="birthdayDate"
                                  />
                                  <label
                                    for="birthdayDate"
                                    className="form-label"
                                  >
                                    Ngày sinh
                                  </label>
                                  <ErrorMessage
                                    className="error"
                                    component={"p"}
                                    name="dateOfBirth"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <h6 className="mb-2 pb-1">Giới tính:</h6>

                                <div className="form-check form-check-inline">
                                  <Field
                                    className="form-check-input fs-16"
                                    type="radio"
                                    name="gender"
                                    id="femaleGender"
                                    value="Nữ"
                                    checked
                                  />
                                  <label
                                    className="form-check-label"
                                    for="femaleGender"
                                  >
                                    Nữ
                                  </label>
                                </div>

                                <div className="form-check form-check-inline">
                                  <Field
                                    className="form-check-input fs-16"
                                    type="radio"
                                    name="gender"
                                    id="maleGender"
                                    value="Nam"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="maleGender"
                                  >
                                    Nam
                                  </label>
                                </div>

                                <div className="form-check form-check-inline">
                                  <Field
                                    className="form-check-input fs-16"
                                    type="radio"
                                    name="gender"
                                    id="otherGender"
                                    value="Khác"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="otherGender"
                                  >
                                    Khác
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 mb-4 pb-2">
                                <div className="form-outline">
                                  <Field
                                    type="email"
                                    id="emailAddress"
                                    name="email"
                                    className="form-control form-control-lg fs-16"
                                  />
                                  <label
                                    className="form-label"
                                    for="emailAddress"
                                  >
                                    Email
                                  </label>
                                  <ErrorMessage
                                    className="error"
                                    component={"p"}
                                    name="email"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4 pb-2">
                                <div className="form-outline">
                                  <Field
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    className="form-control form-control-lg fs-16"
                                  />
                                  <label
                                    className="form-label"
                                    for="phoneNumber"
                                  >
                                    Số điện thoại
                                  </label>
                                  <ErrorMessage
                                    component={"p"}
                                    name="phoneNumber"
                                    className="error"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 mb-4 pb-2">
                                <div className="form-outline">
                                  <Field
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="form-control form-control-lg fs-16"
                                  />
                                  <label className="form-label" for="address">
                                    Địa chỉ
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6 mb-4 pb-2">
                                <Field
                                  as="select"
                                  name="typeCustomer.id"
                                  className="select form-control-lg fs-16"
                                  style={{
                                    border: "border: 1px solid #ced4da;",
                                  }}
                                >
                                  <option>---Chọn loại khách---</option>
                                  {typeCustomer &&
                                    typeCustomer.map((type) => {
                                      return (
                                        <option value={type.id}>
                                          {type.name}
                                        </option>
                                      );
                                    })}
                                </Field>
                                <label className="form-label select-label">
                                  Loại khách
                                </label>
                              </div>
                            </div>

                            <div className="mt-4 pt-2 d-flex">
                              <input
                                className="submit-form btn btn-primary btn-lg flex-grow-1"
                                type="submit"
                                value="Submit"
                              />
                            </div>
                          </Form>
                        </Formik>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{ backgroundColor: "#3E5FA7", color: "#fff" }}
      />
    </div>
  );
}

export default FormCustomer;
