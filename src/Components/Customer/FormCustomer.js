import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import "./FormCustomer.css";
function FormCustomer() {
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
                      Thêm mới khách hàng
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
                              Full name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="number"
                              id="lastName"
                              required
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="lastName">
                              ID number
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 d-flex align-items-center">
                          <div className="form-outline datepicker w-100">
                            <input
                              type="date"
                              className="form-control form-control-lg"
                              id="birthdayDate"
                              required
                            />
                            <label for="birthdayDate" className="form-label">
                              Birthday
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <h6 className="mb-2 pb-1">Gender:</h6>

                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="femaleGender"
                              value="option1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              for="femaleGender"
                            >
                              Female
                            </label>
                          </div>

                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="maleGender"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              for="maleGender"
                            >
                              Male
                            </label>
                          </div>

                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="otherGender"
                              value="option3"
                            />
                            <label
                              className="form-check-label"
                              for="otherGender"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="email"
                              id="emailAddress"
                              required
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="emailAddress">
                              Email
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="tel"
                              id="phoneNumber"
                              required
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="phoneNumber">
                              Phone Number
                            </label>
                          </div>
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
                              Address
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <select className="select form-control-lg">
                            <option value="1">Choose option</option>
                            <option value="2">Diamond</option>
                            <option value="3">Platinum</option>
                            <option value="4">Gold</option>
                            <option value="5">Silver</option>
                            <option value="6">Member</option>
                          </select>
                          <label className="form-label select-label">
                            Choose option
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

export default FormCustomer;
