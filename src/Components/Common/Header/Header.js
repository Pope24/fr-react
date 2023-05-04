import { faMagnifyingGlass, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                  <a href="/home">Trang chủ</a>
                </li>
                <li>
                  <a href="/service/room">Phòng resort</a>
                </li>
                <li>
                  <a href="/service/villa">Phòng villa</a>
                </li>
                <li>
                  <a href="/utility-service">Tiện ích</a>
                </li>
                <li>
                  <a href="/news">Tin tức</a>
                </li>
                <li>
                  <a href="/contact">Liên hệ furama</a>
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
