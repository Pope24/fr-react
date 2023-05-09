import { Field, Form, Formik } from "formik";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import "./FormService.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findByIdFacility } from "../../services/facilitiesService";
import Skeleton from "react-loading-skeleton";
import { HashLoader } from "react-spinners";
import * as Yup from "yup";
function FormService() {
  const { id } = useParams();
  const [facility, setFacility] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchApiFacilityById = async () => {
      if (id === undefined) {
        await setTimeout(() => {
          setFacility({});
        }, 1500);
        return;
      }
      const result = await findByIdFacility(id);
      await setTimeout(() => {
        setFacility(result);
      }, 1500);
    };
    fetchApiFacilityById();
  }, []);
  const handleSubmit = async () => {
    await setLoading(true);
    await setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  console.log(facility);
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
                  style={{ borderRadius: "15px", height: "900px" }}
                >
                  {facility == null ? (
                    <>
                      <Skeleton count={30} style={{ lineHeight: 0.4 }} />
                      <h3
                        className="title mb-4 pb-2 pb-md-0 mb-md-5"
                        style={{ fontFamily: "cursive!important" }}
                      >
                        Loading...
                      </h3>
                    </>
                  ) : (
                    <div className="card-body p-4 p-md-5">
                      <h3 className="title mb-4 pb-2 pb-md-0 mb-md-5">
                        Thêm mới dịch vụ
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
                            id: facility.id,
                            img: facility.img,
                            nameFacility: facility.nameFacility,
                            typeRoom: facility.typeRoom,
                            roomSize: facility.roomSize,
                            price: facility.price,
                            maxPerson: facility.maxPerson,
                            roomStandard: facility.roomStandard,
                            floor: facility.floor,
                            poolArea: facility.poolArea,
                            description: facility.description,
                            freeService: facility.freeService,
                          }}
                          validationSchema={Yup.object({})}
                        >
                          <Form>
                            <div className="row">
                              <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                  <Field
                                    type="text"
                                    name="nameFacility"
                                    id="firstName"
                                    className="form-control form-control-lg"
                                  />
                                  <label className="form-label" for="firstName">
                                    Tên dịch vụ
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6 mb-4 pb-2">
                                <Field
                                  as="select"
                                  name="typeRoom"
                                  className="select form-control-lg"
                                >
                                  <option>---Chọn loại phòng---</option>
                                  <option value="1">Villa</option>
                                  <option value="2">House</option>
                                  <option value="3">Room</option>
                                </Field>
                                <p className="form-label select-label">
                                  Loại phòng
                                </p>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                  <Field
                                    type="text"
                                    id="firstName"
                                    name="roomSize"
                                    className="form-control form-control-lg"
                                  />
                                  <label className="form-label" for="firstName">
                                    Kích thước
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6 mb-4 pb-2">
                                <Field
                                  as="select"
                                  name="roomStandard"
                                  className="select form-control-lg"
                                >
                                  <option>---Chọn tiêu chuẩn---</option>
                                  <option value="Vip">Vip</option>
                                  <option value="Thương gia">Thương gia</option>
                                  <option value="Thường">Thường</option>
                                </Field>
                                <p className="form-label select-label">
                                  Tiêu chuẩn
                                </p>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 mb-4 pb-2">
                                <div className="form-outline">
                                  <Field
                                    type="text"
                                    id="emailAddress"
                                    name="price"
                                    className="form-control form-control-lg"
                                  />
                                  <label
                                    className="form-label"
                                    for="emailAddress"
                                  >
                                    Giá thuê
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6 mb-4 pb-2">
                                <Field
                                  as="select"
                                  className="select form-control-lg"
                                >
                                  <option value="0">
                                    ---Chọn diện tích---
                                  </option>
                                  <option value="15">15</option>
                                  <option value="25">25</option>
                                  <option value="35">35</option>
                                  <option value="45">45</option>
                                  <option value="100">Lớn nhất</option>
                                </Field>
                                <p className="form-label select-label">
                                  Diện tích hồ bơi
                                </p>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 mb-4 pb-2">
                                <div className="form-outline">
                                  <Field
                                    type="text"
                                    id="address"
                                    name="floor"
                                    className="form-control form-control-lg"
                                  />
                                  <label className="form-label" for="address">
                                    Tầng phòng thuê
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6 mb-4 pb-2">
                                <Field
                                  as="select"
                                  name="freeService"
                                  className="select form-control-lg"
                                >
                                  <option>Chọn dịch vụ</option>
                                  <option value="1">Đặt chỗ máy bay</option>
                                  <option value="2">Bữa sáng miễn phí</option>
                                  <option value="3">Giặt áo quần</option>
                                </Field>
                                <label className="form-label select-label">
                                  Dịch vụ miễn phí
                                </label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-outline">
                                <Field
                                  type="text"
                                  id="address"
                                  name="img"
                                  className="form-control form-control-lg"
                                />
                                <label className="form-label" for="address">
                                  Ảnh minh họa
                                </label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-outline">
                                <textarea
                                  type="text"
                                  id="address"
                                  className="form-control form-control-lg"
                                ></textarea>
                                <label className="form-label" for="address">
                                  Mô tả dịch vụ
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

export default FormService;
