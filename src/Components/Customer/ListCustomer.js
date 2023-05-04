import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import "./ListCustomer.css";
import {
  faPenToSquare,
  faTrashCan,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
function ListCustomer() {
  return (
    <>
      <div className="customer">
        <Header />
        <div className="content mt-5">
          <div className="container">
            <button className="btn btn-dark fw-semibold float-start">
              Thêm mới <FontAwesomeIcon icon={faUserPlus} className="ms-1" />
            </button>
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Họ tên</th>
                  <th>Ngày sinh</th>
                  <th>Giới tính</th>
                  <th>Số CMND</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Loại khách</th>
                  <th>Địa chỉ</th>
                  <th className="text-center">Chỉnh sửa</th>
                  <th className="text-center">Xóa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Lê Văn Chính</td>
                  <td>24/02/2003</td>
                  <td>Nam</td>
                  <td>004203005749</td>
                  <td>0915412406</td>
                  <td>levanchinh24@gmail.com</td>
                  <td>Diamond</td>
                  <td>Quảng bình</td>
                  <td className="text-center">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="update-btn"
                    ></FontAwesomeIcon>
                  </td>
                  <td className="text-center">
                    <FontAwesomeIcon icon={faTrashCan} className="trash-can" />
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Nguyễn Minh Lãnh</td>
                  <td>01/11/1990</td>
                  <td>Nam</td>
                  <td>004203005756</td>
                  <td>0914816862</td>
                  <td>lanhbootstrap11@gmail.com</td>
                  <td>Gold</td>
                  <td>Quảng Nam</td>
                  <td className="text-center">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="update-btn"
                    ></FontAwesomeIcon>
                  </td>
                  <td className="text-center">
                    <FontAwesomeIcon icon={faTrashCan} className="trash-can" />
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Nguyễn Quốc Anh</td>
                  <td>25/02/2001</td>
                  <td>Nam</td>
                  <td>004203005458</td>
                  <td>09458544547</td>
                  <td>quocAnh25@gmail.com</td>
                  <td>Gold</td>
                  <td>Quảng Trị</td>
                  <td className="text-center">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="update-btn"
                    ></FontAwesomeIcon>
                  </td>
                  <td className="text-center">
                    <FontAwesomeIcon icon={faTrashCan} className="trash-can" />
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Lê Jong Chinh</td>
                  <td>24/02/2003</td>
                  <td>Nam</td>
                  <td>004203005749</td>
                  <td>0915412406</td>
                  <td>lejongchinh24@gmail.com</td>
                  <td>Diamond</td>
                  <td>Quảng bình</td>
                  <td className="text-center">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="update-btn"
                    ></FontAwesomeIcon>
                  </td>
                  <td className="text-center">
                    <FontAwesomeIcon icon={faTrashCan} className="trash-can" />
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Phan Văn Đồng</td>
                  <td>05/09/1997</td>
                  <td>Nam</td>
                  <td>004203005784</td>
                  <td>07345122124</td>
                  <td>phandong97@gmail.com</td>
                  <td>Silver</td>
                  <td>Quảng Trị</td>
                  <td className="text-center">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="update-btn"
                    ></FontAwesomeIcon>
                  </td>
                  <td className="text-center">
                    <FontAwesomeIcon icon={faTrashCan} className="trash-can" />
                  </td>
                </tr>
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
        <Footer />
      </div>
    </>
  );
}

export default ListCustomer;
