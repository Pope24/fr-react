import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import "../Customer/ListCustomer.css";
import {
  faFolderPlus,
  faPenToSquare,
  faTrashCan,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findAllFacilities } from "../../services/facilitiesService";
import { findAllFreeService } from "../../services/freeService";
import { findAllTypeRoom } from "../../services/typeRoomService";
function ListService() {
  const [facilities, setFacilities] = useState(null);
  const [typeRoom, setTypeRoom] = useState(null);
  const [freeService, setFreeService] = useState(null);
  useEffect(() => {
    const fetchApiFacilities = async () => {
      const result = await findAllFacilities();
      setFacilities(result);
    };
    const fetchApiTypeRoom = async () => {
      const result = await findAllTypeRoom();
      setTypeRoom(result);
    };
    const fetchApiFreeService = async () => {
      const result = await findAllFreeService();
      setFreeService(result);
    };
    fetchApiFacilities();
    fetchApiFreeService();
    fetchApiTypeRoom();
  }, []);
  return (
    <>
      <div className="customer">
        <Header />
        {facilities && (
          <div className="content mt-5">
            <div className="container">
              <Link
                to="/add-facility"
                className="btn btn-dark fw-semibold float-start"
              >
                Thêm mới{" "}
                <FontAwesomeIcon icon={faFolderPlus} className="ms-1" />
              </Link>
              <table className="table">
                <thead className="table-light">
                  <tr>
                    <th>STT</th>
                    <th>Tên dịch vụ</th>
                    <th>Loại phòng</th>
                    <th>Kích thước</th>
                    <th>Giá ($)</th>
                    <th>Người tối đa</th>
                    <th>Tiêu chuẩn</th>
                    <th>Số tầng</th>
                    <th>
                      Hồ bơi (m<sub>2</sub>)
                    </th>
                    <th>Dịch vụ đi kèm</th>
                    <th>Miêu tả</th>
                    <th className="text-center">Chỉnh sửa</th>
                    <th className="text-center">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {facilities.map((facility, index) => (
                    <tr key={facility.id}>
                      <th>{index + 1}</th>
                      <td>{facility.nameFacility || "Không"}</td>
                      <td>
                        {(typeRoom &&
                          typeRoom.find((type) => type.id === facility.typeRoom)
                            ?.name) ||
                          "..."}
                      </td>
                      <td>{facility.roomSize || "Không"}</td>
                      <td>{facility.price || "Không"}</td>
                      <td>{facility.maxPerson || "Không"}</td>
                      <td>{facility.roomStandard || "..."}</td>
                      <td>{facility.floor || "Không"}</td>
                      <td>{facility.poolArea || "Không"}</td>
                      <td>
                        {(freeService &&
                          freeService.find(
                            (service) => service.id === facility.freeService
                          )?.name) ||
                          "..."}
                      </td>
                      <td>{facility.description || "..."}</td>
                      <td className="text-center">
                        <Link
                          to={"/update-facility/" + facility.id}
                          className="text-dark"
                        >
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="update-btn"
                          ></FontAwesomeIcon>
                        </Link>
                      </td>
                      <td className="text-center">
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          className="trash-can"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link text-dark" href="#">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link text-dark" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link text-dark" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link text-dark" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link text-dark" href="#">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default ListService;
