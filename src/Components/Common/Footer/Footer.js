import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section
          className=""
          style={{ backgroundColor: "#003680", height: "auto" }}
        >
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div
                className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                style={{ backgroundColor: "#f3f3f3", width: "320px" }}
              >
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{
                    marginTop: "50px",
                    color: "#cbbe73",
                    fontSize: "25px",
                    textAlign: "center",
                  }}
                >
                  <i className="fas fa-gem me-3"></i>Hướng dẫn di chuyển
                </h6>
                <p style={{ fontSize: "13px" }}>
                  Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong
                  những điểm đến hấp dẫn nhất Châu Á. Chỉ cách Đà Nẵng một quãng
                  lái xe ngắn là bốn Di sản Văn hóa Thế giới được UNESCO công
                  nhận
                </p>
                <button
                  style={{
                    margin: "auto",
                    display: "block",
                    backgroundColor: "#003680",
                    fontSize: "16px",
                    padding: "5px",
                    border: "none",
                    color: "white",
                    height: "40px",
                  }}
                >
                  Xem trên bản đồ
                </button>
                <p style={{ color: "#cbbe73", marginTop: "15px" }}>Địa điểm</p>
                <table className="table" style={{ fontSize: "13px" }}>
                  <tr>
                    <td>1.Cố đô Huế</td>
                    <td>2 tiếng</td>
                  </tr>
                  <tr>
                    <td>2.Phố cổ Hội An</td>
                    <td>30 phút</td>
                  </tr>
                  <tr>
                    <td>3.Thánh địa Mỹ Sơn</td>
                    <td>90 phút</td>
                  </tr>
                  <tr>
                    <td>4.Động Phong Nha</td>
                    <td>3 tiếng</td>
                  </tr>
                </table>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <ul
                  className="menu-footer color-fff"
                  style={{ marginTop: "50px", marginLeft: "5%" }}
                >
                  <li>Giá công bố</li>
                  <li>LifeStyle blog</li>
                  <li>Tuyển dụng</li>
                  <li>Liên hệ</li>
                </ul>
                <img
                  style={{
                    marginTop: "170px",
                    marginLeft: "-70px",
                    width: "300%",
                  }}
                  src="https://furamavietnam.com/wp-content/uploads/2023/03/Ariyana-Tourism-Complex-02-500x131.png"
                />
              </div>
              <div
                className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 color-fff"
                style={{ marginTop: "50px" }}
              >
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "#cbbe73" }}
                >
                  Liên hệ
                </h6>
                <p style={{ fontSize: "12px" }}>
                  <i className="fas fa-home me-3"></i>103 - 105 Vo Nguyen Giap
                  Street, Khue My Ward, Ngu Hanh Son District, Danang City,
                  Vietnam Tel.: 84-236-3847 333/888 * Fax: 84-236-3847 666
                  Email: reservation@furamavietnam.com * www.furamavietnam.com
                  GDS Codes: Amadeus-GD DADFUR, Galileo/Apollo-GD 16236,
                  Sabre-GD 032771, Worldspan- GD DADFU
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
