import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import "./ListCustomer.css";
import {
  faPenToSquare,
  faTrashCan,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { findAllCustomers } from "../../services/customerService";
import { findAllTypeCustomer } from "../../services/typeCustomerService";
import { Link } from "react-router-dom";
function ListCustomer() {
  const [customerList, setCustomerList] = useState([]);
  const [typeCustomers, setTypeCustomers] = useState(null);
  useEffect(() => {
    const fetchApiCustomers = async () => {
      const result = await findAllCustomers();
      setCustomerList(result);
    };
    const fetchApiTypeCustomer = async () => {
      const result = await findAllTypeCustomer();
      setTypeCustomers(result);
    };
    fetchApiCustomers();
    fetchApiTypeCustomer();
  }, []);
  return (
    <>
      <div className="customer">
        <Header />
        <div className="content mt-5">
          <div className="container">
            <Link
              to="/customer/create"
              className="btn btn-dark fw-semibold float-start"
            >
              Thêm mới <FontAwesomeIcon icon={faUserPlus} className="ms-1" />
            </Link>
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th>STT</th>
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
                {customerList.map((customer, index) => (
                  <tr key={customer.id}>
                    <th>{index + 1}</th>
                    <td>{customer.name}</td>
                    <td>{customer.dateOfBirth}</td>
                    <td>{customer.gender}</td>
                    <td>{customer.identity}</td>
                    <td>{customer.phoneNumber}</td>
                    <td>{customer.email}</td>
                    <td>
                      {typeCustomers &&
                        typeCustomers.find(
                          (typeCustomer) =>
                            typeCustomer.id === customer.typeCustomer
                        ).name}
                    </td>
                    <td>{customer.address}</td>
                    <td className="text-center">
                      <Link
                        to={"/customer/update/" + customer.id}
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
        <Footer />
      </div>
    </>
  );
}

export default ListCustomer;
