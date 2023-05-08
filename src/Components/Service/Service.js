import Carousel from "../Common/Carousel/Carousel";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Service.css";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { findAllFacilities } from "../../services/facilitiesService";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
function Service() {
  const [facilityList, setFacilityList] = useState([]);
  useEffect(() => {
    const findAll = async () => {
      const result = await findAllFacilities();
      setFacilityList(result);
    };
    findAll();
  }, []);
  console.log(facilityList);
  return (
    <>
      <div className="service">
        <Header />
        <Carousel />
        <div className="content pt-5 mb-5">
          <div className="container">
            <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
              {facilityList.map((facility) => (
                <div className="col-4">
                  <div className="card mb-4">
                    <img src={facility.img} alt="..." />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title fw-semibold text-start">
                          {facility.nameFacility}
                        </h5>
                        <p className="fw-bold">Giá: {facility.price} dollar</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="card-text">
                          Diện tích phòng {facility.roomSize} m<sub>2</sub>
                        </p>
                        <p className="card-text">
                          <FontAwesomeIcon
                            icon={faCircleInfo}
                          ></FontAwesomeIcon>
                          Xem thêm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Service;
