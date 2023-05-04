import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import "./FormService.css";
function FormService() {
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
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-4 p-md-5">
                    <h3 className="title mb-4 pb-2 pb-md-0 mb-md-5">
                      Thêm mới dịch vụ
                    </h3>
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstName"
                              required
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="firstName">
                              Tên dịch vụ
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <select className="select form-control-lg">
                            <option value="1">Chọn loại phòng</option>
                            <option value="2">Diamond</option>
                            <option value="3">Platinum</option>
                            <option value="4">Gold</option>
                            <option value="5">Silver</option>
                            <option value="6">Member</option>
                          </select>
                          <p className="form-label select-label">Loại phòng</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstName"
                              required
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="firstName">
                              Kích thước
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <select className="select form-control-lg">
                            <option value="1">Chọn tiêu chuẩn</option>
                            <option value="2">Diamond</option>
                            <option value="3">Platinum</option>
                            <option value="4">Gold</option>
                            <option value="5">Silver</option>
                            <option value="6">Member</option>
                          </select>
                          <p className="form-label select-label">Tiêu chuẩn</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="emailAddress"
                              required
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="emailAddress">
                              Giá thuê
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <select className="select form-control-lg">
                            <option value="1">Chọn diện tích</option>
                            <option value="2">15</option>
                            <option value="3">25</option>
                            <option value="4">35</option>
                            <option value="5">45</option>
                            <option value="6">Lớn nhất</option>
                          </select>
                          <p className="form-label select-label">
                            Diện tích hồ bơi
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="address"
                              required
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="address">
                              Tầng phòng thuê
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <select className="select form-control-lg">
                            <option value="1">Chọn dịch vụ</option>
                            <option value="2">Khăn ướt miễn phí</option>
                            <option value="3">Ăn trưa miễn phí</option>
                            <option value="4">Massage, giác hơi</option>
                          </select>
                          <label className="form-label select-label">
                            Dịch vụ miễn phí
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="address"
                            required
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
                            required
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
                        />
                      </div>
                    </form>
                  </div>
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
