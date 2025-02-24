import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="container-fluid d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/" className="logo d-flex align-items-center">
              <img
                alt=""
                className="img-fluid"
                src="/src/assets/images/logo.png"
              />
            </Link>
            <i className="bi bi-list-nested toggle-sidebar-btn ng-star-inserted" />
          </div>

          <nav className="header-nav ms-auto ng-star-inserted">
            <ul className="d-flex align-items-center">
              <li className="nav-item balance_li">
                <a href="javascript:void(0);" className="nav-link">
                  <i className="bi bi-bank" /> Balance
                  <b>0</b>
                </a>
              </li>
              <li className="nav-item expo_li">
                <a className="nav-link">
                  <i className="bi bi-bar-chart" />
                  expo. <b>0</b>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* <a
            href="javascript:void(0);"
            className="casino_chip ng-star-inserted"
          >
            <img src="/src/assets/images/casino-chip.png" />
          </a> */}

      <div
        tabIndex={-1}
        role="dialog"
        aria-labelledby="dialog-login-name"
        className="modal fade login-popup"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                aria-label="Close"
                className="close pull-right"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div>
                <div className="ng-star-inserted">
                  <div className="modal-body">
                    <form
                      noValidate
                      className="login-form ng-untouched ng-pristine ng-invalid"
                    >
                      <div className="form-group">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="text-uppercase"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          placeholder="Username"
                          className="form-control ng-untouched ng-pristine ng-invalid"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="text-uppercase"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control ng-untouched ng-pristine ng-invalid"
                        />
                      </div>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          <span>Remember Me?</span>
                        </label>
                      </div>

                      <button type="submit" className="btn btn-login">
                        Log In
                      </button>
                    </form>
                    <div className="copy-text">
                      Powered by
                      <a href="javascript:void(0)">11xplay</a>
                      <p className="ng-star-inserted">
                        <a href="mailto:11xplayofficiall@gmail.com">
                          11xplayofficiall@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        tabIndex={-1}
        role="dialog"
        aria-labelledby
        className="modal fade force-change-password-popup"
      >
        <div className="modal-dialog bookModal">
          <div className="modal-content modal-content-centered">
            <div className="modal-header">
              <h5 className="modal-title">Force Change Password</h5>
              <button
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div>
                <section className="section accounts">
                  <div className="row">
                    <div className="col-xl-12">
                      <h2 className="userscreen-title">Change Password</h2>
                      <div className="card stakesettingui">
                        <div className="card-body">
                          <form
                            noValidate
                            className="cp_form p-3 ng-untouched ng-pristine ng-invalid"
                          >
                            <div className="row mb-lg-3 mt-lg-2 align-items-center">
                              <label
                                htmlFor="currentPassword"
                                className="col-md-3 col-lg-3 col-form-label text-lg-end"
                              >
                                Current Password :
                              </label>
                              <div className="col-md-9 col-lg-9">
                                <input
                                  type="password"
                                  id="currentPassword"
                                  className="form-control ng-untouched ng-pristine ng-invalid"
                                />
                              </div>
                            </div>
                            <div className="row mb-lg-3 mt-lg-2 align-items-center">
                              <label
                                htmlFor="newPassword"
                                className="col-md-3 col-lg-3 col-form-label text-lg-end"
                              >
                                New Password :
                              </label>
                              <div className="col-md-9 col-lg-9">
                                <input
                                  type="password"
                                  id="newPassword"
                                  className="form-control ng-untouched ng-pristine ng-invalid"
                                />
                              </div>
                            </div>
                            <div className="row mb-lg-3 mt-lg-2 align-items-center">
                              <label
                                htmlFor="renewPassword"
                                className="col-md-3 col-lg-3 col-form-label text-lg-end"
                              >
                                Re-enter New Password :
                              </label>
                              <div className="col-md-9 col-lg-9">
                                <input
                                  type="password"
                                  id="renewPassword"
                                  className="form-control ng-untouched ng-pristine ng-invalid"
                                />
                              </div>
                            </div>
                            <div className="feedback">
                              <p className="small m-0">
                                <i>
                                  <b>Note:</b> The New Password field must be at
                                  least 6 characters
                                </i>
                              </p>
                              <p className="small m-0">
                                <i>
                                  <b>Note:</b> The New Password must contain at
                                  least: 1 uppercase letter, 1 lowercase letter,
                                  1 number
                                </i>
                              </p>
                            </div>
                            <div className="row mt-1">
                              <button type="submit" className="btn btn-thmemes">
                                Change Password
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        tabIndex={-1}
        role="dialog"
        aria-labelledby
        className="modal fade force-change-password-popup"
      >
        <div className="modal-dialog bookModal app_version">
          <div className="modal-content modal-content-padding-custom">
            <div className="modal-body p-0">
              <button
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="close"
                style={{
                  position: "absolute",
                  right: "13px",
                  top: "1px",
                  color: "#fff",
                  fontSize: "21px",
                }}
              >
                <span aria-hidden="true">×</span>
              </button>
              <a target="_blank" href="dashboard.html">
                <img
                  src="/src/assets/images/poster-login-popup.webp"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
