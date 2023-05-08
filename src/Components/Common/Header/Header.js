import { faMagnifyingGlass, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header">
        <div className="container d-flex justify-content-between h-100">
          <div className="left d-flex h-100">
            <div className="logo h-100">
              <img
                className="h-100"
                src="https://furama-booking.com/wp-content/uploads/2021/10/logo-furama-resort-villa.png"
                alt=""
              />
            </div>
            <div className="menu d-flex align-items-center">
              <ul className="d-flex text-uppercase">
                <li>
                  <Link to="/facilities">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/facilities">Dịch vụ</Link>
                </li>
                <li>
                  <Link to="/customer">Khách hàng</Link>
                </li>
                <li>
                  <Link to="/employee">Nhân viên</Link>
                </li>
                <li>
                  <Link to="/contract">Hợp đồng</Link>
                </li>
                <li>
                  <Link to="/contact">Liên hệ furama</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right d-flex justify-content-between align-items-center">
            <div className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="phone-number">
              <FontAwesomeIcon icon={faPhone} />
              <span>+84934541444</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
