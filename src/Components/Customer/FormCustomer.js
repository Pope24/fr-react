import { useParams } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import "./FormCustomer.css";
import { useEffect, useState } from "react";
import { findByIdCustomer } from "../../services/customerService";
import { Field, Form, Formik } from "formik";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { GridLoader } from "react-spinners";
function FormCustomer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchApiCustomerById = async () => {
      const result = await findByIdCustomer(id);
      setTimeout(() => {
        setCustomer(result);
      }, 1500);
    };
    fetchApiCustomerById();
  }, []);
  const handleSubmit = async () => {
    await setLoading(true);
    await setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
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
                  style={{ borderRadius: "15px", height: "100vh" }}
                >
                  {customer == null ? (
                    <Skeleton count={30} style={{ lineHeight: 0.4 }} />
                  ) : (
                    <div className="card-body p-4 p-md-5">
                      <h3 className="title mb-4 pb-2 pb-md-0 mb-md-5">
                        Thêm mới khách hàng
                      </h3>
                      {loading ? (
                        <GridLoader
                          color="#003680"
                          cssOverride={{ marginTop: 200 }}
                          size={20}
                        />
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
                                  <label className="form-label">
                                    Full name
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                  <Field
                                    type="number"
                                    id="lastName"
                                    disabled
                                    name="id"
                                    required
                                    className="form-control form-control-lg fs-16"
                                  />
                                  <label className="form-label" for="lastName">
                                    ID number
                                  </label>
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
                                    required
                                  />
                                  <label
                                    for="birthdayDate"
                                    className="form-label"
                                  >
                                    Birthday
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <h6 className="mb-2 pb-1">Gender:</h6>

                                <div className="form-check form-check-inline">
                                  <Field
                                    className="form-check-input fs-16"
                                    type="radio"
                                    name="gender"
                                    id="femaleGender"
                                    value="Nữ"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="femaleGender"
                                  >
                                    Female
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
                                    Male
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
                                    Other
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
                                    required
                                    className="form-control form-control-lg fs-16"
                                  />
                                  <label
                                    className="form-label"
                                    for="emailAddress"
                                  >
                                    Email
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6 mb-4 pb-2">
                                <div className="form-outline">
                                  <Field
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    required
                                    className="form-control form-control-lg fs-16"
                                  />
                                  <label
                                    className="form-label"
                                    for="phoneNumber"
                                  >
                                    Phone Number
                                  </label>
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
                                    required
                                    className="form-control form-control-lg fs-16"
                                  />
                                  <label className="form-label" for="address">
                                    Address
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6 mb-4 pb-2">
                                <Field
                                  as="select"
                                  name="typeCustomer"
                                  className="select form-control-lg fs-16"
                                  style={{
                                    border: "border: 1px solid #ced4da;",
                                  }}
                                >
                                  <option value={1}>Diamond</option>
                                  <option value={2}>Platinum</option>
                                  <option value={3}>Gold</option>
                                  <option value={4}>Silver</option>
                                  <option value={5}>Member</option>
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
                                onClick={handleSubmit}
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
    </div>
  );
}

export default FormCustomer;
