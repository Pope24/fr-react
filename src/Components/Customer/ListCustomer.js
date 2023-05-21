import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import "./ListCustomer.css";
import {
  faPenToSquare,
  faTrashCan,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import {
  findAllCustomers,
  findAllCustomersByNameContaining,
  findAllCustomersByType,
} from "../../services/customerService";
import { findAllTypeCustomer } from "../../services/typeCustomerService";
import { Link } from "react-router-dom";
import { deleteCustomerById } from "../../services/customerService";
function ListCustomer() {
  const [customerList, setCustomerList] = useState(null);
  const [typeCustomers, setTypeCustomers] = useState(null);
  const [customerDeleted, setCustomerDeleted] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [arrayPages, setArrayPages] = useState(null);
  const fetchApiCustomers = async (page) => {
    const result = await findAllCustomers(page);
    setCustomerList(result);
    // setCurrPage(page);
    const totalPages = new Array(Math.ceil(9 / 3))
      .fill(undefined)
      .map((val, idx) => idx);
    setArrayPages(totalPages);
  };
  const fetchApiTypeCustomer = async () => {
    const result = await findAllTypeCustomer();
    setTypeCustomers(result);
  };
  const fetchApiCustomerByType = async (id) => {
    const result = await findAllCustomersByType(id);
    setCustomerList(result);
  };
  useEffect(() => {
    fetchApiCustomers(1);
    fetchApiTypeCustomer();
  }, []);
  const handleDelete = async (id) => {
    await deleteCustomerById(id);
    setCustomerList((prev) => prev.filter((customer) => customer.id !== id));
  };
  const handleSearch = async () => {
    console.log(search);
    const result = await findAllCustomersByNameContaining(search);
    setCustomerList(result);
  };
  return (
    <>
      <div className="customer">
        <Header />
        <div className="content mt-5">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <Link
                to="/customer/create"
                className="btn btn-dark fw-semibold float-start"
              >
                Thêm mới <FontAwesomeIcon icon={faUserPlus} className="ms-1" />
              </Link>
              <div className="d-flex justify-content-between align-items-center">
                <select
                  className="btn btn-dark"
                  onChange={(e) => {
                    fetchApiCustomers(e.target.value);
                  }}
                >
                  <option value="_order=asc" selected>
                    Sắp xếp
                  </option>
                  <option value="_order=desc">Ngày tạo</option>
                  <option value="_sort=name&_order=asc">Tên</option>
                  <option value="_sort=dateOfBirth&_order=asc">
                    Ngày sinh
                  </option>
                  <option value="_sort=address&_order=asc">Địa chỉ</option>
                </select>
                <select
                  className="btn btn-secondary ms-3"
                  onChange={(e) => {
                    e.target.value === 0
                      ? fetchApiCustomers()
                      : fetchApiCustomerByType(e.target.value);
                  }}
                >
                  <option value={0}>Danh sách khách hàng</option>;
                  {typeCustomers &&
                    typeCustomers.map((type) => {
                      return (
                        <option value={type.id}>
                          {"Loại khách " + type.name}
                        </option>
                      );
                    })}
                </select>
                <form className="ms-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    name="search"
                    type="text"
                    className="border border-dark btn"
                    placeholder="Nhập tên muốn tìm.."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="btn btn-dark ms-1"
                  >
                    Tìm kiếm
                  </button>
                </form>
              </div>
            </div>
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
                {customerList &&
                  customerList.map((customer, index) => (
                    <tr key={customer.id}>
                      <th>{index + 1}</th>
                      <td>{customer.name}</td>
                      <td>{customer.dateOfBirth}</td>
                      <td>{customer.gender}</td>
                      <td>{customer.identity}</td>
                      <td>{customer.phoneNumber}</td>
                      <td>{customer.email}</td>
                      <td>{customer?.typeCustomer?.name}</td>
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
                          onClick={() => {
                            handleShow();
                            setCustomerDeleted(customer);
                          }}
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
                  {arrayPages &&
                    arrayPages.map((page, index) => {
                      return (
                        <li className="page-item">
                          <button
                            className={
                              currPage != page + 1
                                ? "page-link text-dark"
                                : "page-link text-dark active"
                            }
                            href="#"
                            onClick={() => fetchApiCustomers(page + 1)}
                          >
                            {page + 1}
                          </button>
                        </li>
                      );
                    })}
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xác nhận</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Bạn chắc chắn muốn xóa {customerDeleted?.name} ?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                handleClose();
                handleDelete(customerDeleted.id);
              }}
            >
              Xác nhận
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default ListCustomer;
