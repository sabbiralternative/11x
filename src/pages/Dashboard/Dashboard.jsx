import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* Handle logout */
  const handleLogout = () => {
    dispatch(logout());
    navigate("/home");
  };
  return (
    <div>
      <div className="ng-star-inserted">
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
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
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
                                      <b>Note:</b> The New Password field must
                                      be at least 6 characters
                                    </i>
                                  </p>
                                  <p className="small m-0">
                                    <i>
                                      <b>Note:</b> The New Password must contain
                                      at least: 1 uppercase letter, 1 lowercase
                                      letter, 1 number
                                    </i>
                                  </p>
                                </div>
                                <div className="row mt-1">
                                  <button
                                    type="submit"
                                    className="btn btn-thmemes"
                                  >
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
        <div>
          <div className="commentary">
            <img src="/src/assets/images/commentary.png" />
            <marquee>
              🏏 𝐁𝐈𝐆 𝐁𝐀𝐒𝐇 𝐓𝟐𝟎 𝐂𝐔𝐏 𝐖𝐈𝐍𝐍𝐄𝐑🏆 𝐌𝐀𝐑𝐊𝐄𝐓 𝐒𝐓𝐀𝐑𝐓𝐄𝐃 𝐈𝐍 𝐎𝐔𝐑 𝐄𝐗𝐂𝐇𝐀𝐍𝐆𝐄🏏 🎾
              𝐕𝐈𝐑𝐓𝐔𝐀𝐋 𝐓𝐄𝐍𝐍𝐈𝐒 𝐍𝐎𝐖 𝐀𝐕𝐀𝐈𝐋𝐀𝐁𝐋𝐄 𝐈𝐍 𝐎𝐔𝐑 𝐄𝐗𝐂𝐇𝐀𝐍𝐆𝐄 🎾🏏 𝐎𝐔𝐑 𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝐄
              𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐌𝐀𝐑𝐊𝐄𝐓 𝐅𝐎𝐑 (𝐒𝐑𝐋) 𝐈𝐒 𝐍𝐎𝐖 𝐒𝐓𝐀𝐑𝐓𝐄𝐃 𝐈𝐍 𝐎𝐔𝐑 𝐄𝐗𝐂𝐇𝐀𝐍𝐆𝐄 , 𝐃𝐑𝐄𝐀𝐌
              𝐁𝐈𝐆 𝐖𝐈𝐍 𝐁𝐈𝐆 💰
            </marquee>
          </div>
        </div>
        <div className="ng-star-inserted">
          <aside id="sidebar" className="sidebar">
            <ul id="sidebar-nav" className="sidebar-nav">
              <img className="mobile-logo" src="/src/assets/images/logo.png" />

              <li className="nav-item">
                <a href="dashboard.html" className="nav-link final-link">
                  <img src="/src/assets/images/menu-home.png" />
                  <span>home</span>
                </a>
              </li>
              <li className="nav-item ng-star-inserted">
                <a
                  href="multimarket.html"
                  className="nav-link multi-market final-link"
                >
                  <img src="/src/assets/images/menu-market.png" />
                  <span>Multi Market</span>
                </a>
              </li>

              <li className="nav-item ng-star-inserted">
                <a href="profitandLoss.html" className="nav-link final-link">
                  <img
                    src="/src/assets/images/profitloss.svg"
                    className="img-fluid"
                  />
                  <span>profit &amp; loss</span>
                </a>
              </li>

              <li className="nav-item ng-star-inserted">
                <a
                  href="Account.html"
                  className="nav-link final-link nmm-active"
                >
                  <img
                    src="/src/assets/images/statement.svg"
                    className="img-fluid"
                  />
                  <span>Account statement</span>
                </a>
              </li>

              <li className="nav-item ng-star-inserted">
                <a href="unsettledbets.html" className="nav-link final-link">
                  <img
                    src="/src/assets/images/bets.svg"
                    className="img-fluid"
                  />
                  <span>unsettled bets</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="rules.html" className="nav-link final-link">
                  <img
                    src="/src/assets/images/terms.svg"
                    className="img-fluid"
                  />
                  <span>rules</span>
                </a>
              </li>
              <li className="nav-item ng-star-inserted">
                <a href="editstake.html" className="nav-link final-link">
                  <img
                    src="/src/assets/images/edit.svg"
                    className="img-fluid"
                  />
                  <span>edit stake</span>
                </a>
              </li>

              <li className="nav-item ng-star-inserted">
                <a href="profile.html" className="nav-link final-link">
                  <img
                    src="/src/assets/images/profile_image.png"
                    className="img-fluid"
                  />
                  <span>Profile (Demo123)</span>
                </a>
              </li>

              <li
                onClick={handleLogout}
                className="nav-item nav-highlight ng-star-inserted"
              >
                <a className="nav-link final-link">
                  <img
                    src="/src/assets/images/logout.svg"
                    className="img-fluid"
                  />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>

        <main
          id="main"
          className="main"
          //  style={{ marginLeft: "250px" }}
        >
          <div className="ng-star-inserted">
            <section className="section listing_page">
              <div className="main_navigation_menu">
                <tabset className="tab-container">
                  <ul
                    role="tablist"
                    className="nav nav-pills"
                    aria-label="Tabs"
                  >
                    <li className="active nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link active"
                        aria-controls
                        aria-selected="true"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-in_play.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-0"
                        >
                          Inplay{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-featured.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-1"
                        >
                          Featured{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-4.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-2"
                        >
                          Cricket{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="footbal.html"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-1.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-3"
                        >
                          Football{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-2.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-4"
                        >
                          Tennis{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-99999.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-5"
                        >
                          Casino{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-99998.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-6"
                        >
                          Int Casino{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="sportbooklive.html"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-99991.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-7"
                        >
                          Sports book{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="horseracing.html"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-7.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-8"
                        >
                          Horse Racing{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-4339.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-9"
                        >
                          Greyhound Racing{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-99990.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-10"
                        >
                          Binary{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-99994.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-11"
                        >
                          Kabaddi{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="politics.html"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-2378961.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-12"
                        >
                          Politics{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-7522.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-13"
                        >
                          Basketball{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-7511.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-14"
                        >
                          Baseball{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-20.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-15"
                        >
                          Table Tennis{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-998917.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-16"
                        >
                          Volleyball{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-7524.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-17"
                        >
                          Ice Hockey{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-5.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-18"
                        >
                          Rugby{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-26420387.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-19"
                        >
                          Mixed Martial Arts{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-3503.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-20"
                        >
                          Darts{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ng-star-inserted">
                      <a
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls
                        aria-selected="false"
                        id
                      >
                        <span />
                        <img
                          className="img-fluid ng-star-inserted"
                          src="/src/assets/images/menu-29.png"
                        />
                        <span
                          className="ml-2 ng-star-inserted"
                          id="staticTab-21"
                        >
                          Futsal{" "}
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane active ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="row mx-0 mb-1 d-none d-md-flex">
                          <div className="col-md-4 px-0">
                            <a
                              href="javascript:void(0);"
                              className="button_dakred"
                            >
                              Our casino
                            </a>
                          </div>
                          <div className="col-md-4 px-1">
                            <a
                              href="javascript:void(0);"
                              className="button_darkyellow"
                            >
                              Int casino
                            </a>
                          </div>
                          <div className="col-md-4 px-0">
                            <a
                              href="javascript:void(0);"
                              className="button_orange"
                            >
                              Sports Book
                            </a>
                          </div>
                        </div>
                        <div className="row mx-0 d-flex d-md-none ng-star-inserted">
                          <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/ak47_teenpatti.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/lucky_5.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/lucky_15.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/andarbahar.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/dragontiger.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/dragontigerlion.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/dragontigeroneday.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/baccarat.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/sicbo.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-block ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/roulette.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/20-20poker.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/pokeroneday.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/lucky7.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/onedayteenpatti.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/testteenpatti.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/muflisteenpatti.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/teenpatti2020.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/2cardteenpatti.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/32cards.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/aaa.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/3cardjudgement.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/queenrace.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/race2020.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/worlimatka.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/trio.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/bollywoodcasino.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/duskadum.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/1-card-20-20.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/one-card-one-day.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/note-number.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/raceto2nd.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/lottery.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/superover.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/fivecricket.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/casinowar.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/29baccarat.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/6playerpoker.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/raceto17.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/cricket2020.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/openteenpatti.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/centrecard1day.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/highlow.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/baccaratoneday.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/10-10-cricket.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/dragon-tiger-2.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/teen-patti2-20-20.png"
                              />
                            </a>
                          </div>
                          <div className="col-3 px-1 mb-1 d-none ng-star-inserted">
                            <a>
                              <img
                                className="img-fluid"
                                src="/src/assets/images/instant-2-card-teenpatti.png"
                              />
                            </a>
                          </div>

                          <div className="col-12">
                            <a
                              href="javascript:;"
                              className="btn_allgames more-btn d-block"
                            >
                              More Games &gt;&gt;
                            </a>
                            <a
                              href="javascript:;"
                              className="btn_allgames less-btn d-none"
                            >
                              &lt;&lt; Less Games
                            </a>
                          </div>
                        </div>

                        <div className="row mx-0 d-flex d-md-none">
                          <div className="col-6 px-1 mb-1 position-relative">
                            <img
                              src="/src/assets/images/aviator-730-280.gif"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-6 px-1 mb-1 position-relative">
                            <img
                              src="/src/assets/images/evoplay-730-280.gif"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-6 px-1 position-relative">
                            <a href="javascript:void(0)">
                              <img
                                src="/src/assets/images/fungames-730_280.gif"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                          <div className="col-6 px-1 position-relative">
                            <a href="javascript:void(0)">
                              <img
                                src="/src/assets/images/wingogames-730-280.gif"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card">
                              <div className="card-body card-content p-0">
                                <div
                                  data-bs-toggle="collapse"
                                  href="#HorseRacing"
                                  aria-expanded="true"
                                  aria-controls="HorseRacing"
                                  className="bet-table-header"
                                >
                                  <span className="list-sport-title">
                                    <img
                                      src="/src/assets/images/menu-horse.png"
                                      className="img-fluid game-icon-img"
                                    />
                                    Next Horse Racing
                                  </span>
                                </div>
                                <div
                                  id="HorseRacing"
                                  className="bet-table-body collapse show"
                                >
                                  <div className="race-section ng-star-inserted">
                                    <a
                                      href="https://11xplay.com/game-detail/33938341/1.238202914"
                                      className="chip ng-star-inserted"
                                    >
                                      <img
                                        alt="Horse"
                                        src="/src/assets/images/au.png"
                                      />
                                      <div className="race_detail">
                                        <span
                                          className="race_time"
                                          style={{ fontWeight: 700 }}
                                        >
                                          10:52 AM{" "}
                                        </span>
                                        <span className="race-name">
                                          R5 1609m Pace M
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="https://11xplay.com/game-detail/33935746/1.238156485"
                                      className="chip ng-star-inserted"
                                    >
                                      <img
                                        alt="Horse"
                                        src="/src/assets/images/au.png"
                                      />
                                      <div className="race_detail">
                                        <span
                                          className="race_time"
                                          style={{ fontWeight: 700 }}
                                        >
                                          11:00 AM{" "}
                                        </span>
                                        <span className="race-name">
                                          R7 1450m Hcap
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="https://11xplay.com/game-detail/33938356/1.238203064"
                                      className="chip ng-star-inserted"
                                    >
                                      <img
                                        alt="Horse"
                                        src="/src/assets/images/au.png"
                                      />
                                      <div className="race_detail">
                                        <span
                                          className="race_time"
                                          style={{ fontWeight: 700 }}
                                        >
                                          11:12 AM{" "}
                                        </span>
                                        <span className="race-name">
                                          R5 1660m Pace M
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="https://11xplay.com/game-detail/33935746/1.238156493"
                                      className="chip ng-star-inserted"
                                    >
                                      <img
                                        alt="Horse"
                                        src="/src/assets/images/au.png"
                                      />
                                      <div className="race_detail">
                                        <span
                                          className="race_time"
                                          style={{ fontWeight: 700 }}
                                        >
                                          11:30 AM{" "}
                                        </span>
                                        <span className="race-name">
                                          R8 1600m Hcap
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="https://11xplay.com/game-detail/33938341/1.238202917"
                                      className="chip ng-star-inserted"
                                    >
                                      <img
                                        alt="Horse"
                                        src="/src/assets/images/au.png"
                                      />
                                      <div className="race_detail">
                                        <span
                                          className="race_time"
                                          style={{ fontWeight: 700 }}
                                        >
                                          11:33 AM{" "}
                                        </span>
                                        <span className="race-name">
                                          R6 1609m Pace M
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="https://11xplay.com/game-detail/33938304/1.238202058"
                                      className="chip ng-star-inserted"
                                    >
                                      <img
                                        alt="Horse"
                                        src="/src/assets/images/au.png"
                                      />
                                      <div className="race_detail">
                                        <span
                                          className="race_time"
                                          style={{ fontWeight: 700 }}
                                        >
                                          11:42 AM{" "}
                                        </span>
                                        <span className="race-name">
                                          R1 1800m Pace M
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card">
                              <div className="card-body card-content p-0">
                                <div
                                  data-bs-toggle="collapse"
                                  href="#GreyRacing"
                                  aria-expanded="true"
                                  aria-controls="GreyRacing"
                                  className="bet-table-header"
                                >
                                  <span className="list-sport-title">
                                    <img
                                      src="/src/assets/images/menu-greyhound.png"
                                      className="img-fluid game-icon-img"
                                    />
                                    Next Greyhound Racing
                                  </span>
                                </div>
                                <div
                                  id="GreyRacing"
                                  className="bet-table-body collapse show"
                                >
                                  <div className="race-section ng-star-inserted">
                                    <a
                                      href="https://11xplay.com/game-detail/33938380/1.238203399"
                                      className="chip ng-star-inserted"
                                    >
                                      <img
                                        alt="Greyhound"
                                        src="/src/assets/images/au.png"
                                      />
                                      <div className="race_detail">
                                        <span
                                          className="race_time"
                                          style={{ fontWeight: 700 }}
                                        >
                                          10:57 AM{" "}
                                        </span>
                                        <span className="race-name">
                                          R6 520m Heat
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="https://11xplay.com/game-detail/33938333/1.238202515"
                                      className="chip ng-star-inserted"
                                    >
                                      <img
                                        alt="Greyhound"
                                        src="/src/assets/images/au.png"
                                      />
                                      <div className="race_detail">
                                        <span
                                          className="race_time"
                                          style={{ fontWeight: 700 }}
                                        >
                                          11:02 AM{" "}
                                        </span>
                                        <span className="race-name">
                                          R5 300m Rest
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="https://11xplay.com/game-detail/33938380/1.238203404"
                                      className="chip ng-star-inserted"
                                    >
                                      <img
                                        alt="Greyhound"
                                        src="/src/assets/images/au.png"
                                      />
                                      <div className="race_detail">
                                        <span
                                          className="race_time"
                                          style={{ fontWeight: 700 }}
                                        >
                                          11:17 AM{" "}
                                        </span>
                                        <span className="race-name">
                                          R7 431m Gr4/5
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="https://11xplay.com/game-detail/33938333/1.238202520"
                                      className="chip ng-star-inserted"
                                    >
                                      <img
                                        alt="Greyhound"
                                        src="/src/assets/images/au.png"
                                      />
                                      <div className="race_detail">
                                        <span
                                          className="race_time"
                                          style={{ fontWeight: 700 }}
                                        >
                                          11:24 AM{" "}
                                        </span>
                                        <span className="race-name">
                                          R6 411m Gr5
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="https://11xplay.com/game-detail/33938380/1.238203409"
                                      className="chip ng-star-inserted"
                                    >
                                      <img
                                        alt="Greyhound"
                                        src="/src/assets/images/au.png"
                                      />
                                      <div className="race_detail">
                                        <span
                                          className="race_time"
                                          style={{ fontWeight: 700 }}
                                        >
                                          11:37 AM{" "}
                                        </span>
                                        <span className="race-name">
                                          R8 431m Gr3/4
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="https://11xplay.com/game-detail/33938333/1.238202525"
                                      className="chip ng-star-inserted"
                                    >
                                      <img
                                        alt="Greyhound"
                                        src="/src/assets/images/au.png"
                                      />
                                      <div className="race_detail">
                                        <span
                                          className="race_time"
                                          style={{ fontWeight: 700 }}
                                        >
                                          11:44 AM{" "}
                                        </span>
                                        <span className="race-name">
                                          R7 484m Gr5
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="ng-star-inserted">
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted">
                            <app-sport-list
                              _nghost-gjk-c71
                              className="ng-star-inserted"
                            >
                              <div className="row ng-star-inserted">
                                <div className="col-lg-12">
                                  <div className="card">
                                    <div className="card-body card-content p-0">
                                      <div className="bet-table-header">
                                        <div className="row align-items-center">
                                          <div className="col-md-6">
                                            <span className="list-sport-title">
                                              <img
                                                className="img-fluid game-icon-img"
                                                src="/src/assets/images/menu-4.png"
                                              />
                                              &nbsp; Cricket
                                            </span>
                                            <a
                                              href="https://11xplay.com/#sportOne-4"
                                              data-bs-toggle="collapse"
                                              aria-expanded="true"
                                              className="collapseIcon"
                                              aria-controls="sportOne-4"
                                            >
                                              <i />
                                            </a>
                                            <ul className="live_virtual">
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order one"
                                                  id="checkboxOne4-inplay"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxOne4-inplay">
                                                  LIVE
                                                </label>
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order Two"
                                                  id="checkboxTwo4--inplay"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxTwo4--inplay">
                                                  VIRTUAL
                                                </label>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            1
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            x
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            2
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="bet-table-body collapse show ng-star-inserted"
                                        id="sportOne-4"
                                      >
                                        <div className="ng-star-inserted">
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="/eventdetails.html">
                                                        <p className="team-name text-left team-event">
                                                          Dec 15 2024 13:45
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Twenty20 Big Bash
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33936322">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 04:35
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Australia Women v
                                                          England Women
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        F
                                                      </span>

                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.1
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.11
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          10
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          11
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33931637">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 05:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Queensland Fire v
                                                          Tasmania Women
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        F
                                                      </span>

                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.24
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.29
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.4
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          5.2
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/52368033">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 07:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Western Australia
                                                          Women V New South
                                                          Wales Breakers Women
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker bg-success ng-star-inserted">
                                                        P
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="bl-box back">
                                                        <span className="d-block bet-button-price">
                                                          14
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="bl-box back">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="bl-box back">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33936453">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 08:55
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Wellington Firebirds v
                                                          Otago Volts
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        F
                                                      </span>

                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.5
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.53
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.9
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.98
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/56768113">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 09:30
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Lucknow Super Giants
                                                          SRL V Kolkata Knight
                                                          Riders SRL
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market"></div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/56963759">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 10:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Pondicherry South Xi v
                                                          Pondicherry North Xi
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker bg-success ng-star-inserted">
                                                        P
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="bl-box back">
                                                        <span className="d-block bet-button-price">
                                                          2.35
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="bl-box back">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="bl-box back">
                                                        <span className="d-block bet-button-price">
                                                          1.55
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/1736713970">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 10:10
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          🎮WELSH FIRE T10 VS
                                                          SOUTHERN BRAVE T10
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/gamepad.png"
                                                          className="img-fluid"
                                                        />
                                                      </span>

                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33931100">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 14:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Hobart Hurricanes v
                                                          Melbourne Renegades
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        F
                                                      </span>

                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_fancy ng-star-inserted">
                                                        T
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.75
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.76
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.32
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.34
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33936633">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 16:30
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Pretoria Capitals v
                                                          Sunrisers Eastern Cape
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        F
                                                      </span>

                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_fancy ng-star-inserted">
                                                        T
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.81
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.93
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.06
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.22
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33936818">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 20:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Gulf Giants v Desert
                                                          Vipers
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        F
                                                      </span>

                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_fancy ng-star-inserted">
                                                        T
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.3
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.44
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.69
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.76
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33936995">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 21:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Durban Super Giants v
                                                          Joburg Super Kings
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        F
                                                      </span>

                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_fancy ng-star-inserted">
                                                        T
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.79
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.84
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.18
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.26
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </app-sport-list>
                          </div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted">
                            <app-sport-list
                              _nghost-gjk-c71
                              className="ng-star-inserted"
                            >
                              <div className="row ng-star-inserted">
                                <div className="col-lg-12">
                                  <div className="card">
                                    <div className="card-body card-content p-0">
                                      <div className="bet-table-header">
                                        <div className="row align-items-center">
                                          <div className="col-md-6">
                                            <span className="list-sport-title">
                                              <img
                                                className="img-fluid game-icon-img"
                                                src="/src/assets/images/menu-1.png"
                                              />
                                              &nbsp; Football
                                            </span>
                                            <a
                                              href="https://11xplay.com/#sportOne-1"
                                              data-bs-toggle="collapse"
                                              aria-expanded="true"
                                              className="collapseIcon"
                                              aria-controls="sportOne-1"
                                            >
                                              <i />
                                            </a>
                                            <ul className="live_virtual">
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order one"
                                                  id="checkboxOne1-inplay"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxOne1-inplay">
                                                  LIVE
                                                </label>
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order Two"
                                                  id="checkboxTwo1--inplay"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxTwo1--inplay">
                                                  VIRTUAL
                                                </label>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            1
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            x
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            2
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="bet-table-body collapse show ng-star-inserted"
                                        id="sportOne-1"
                                      >
                                        <div className="ng-star-inserted">
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33916635">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 23:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Como v AC Milan
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.1
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.2
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          3.65
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          3.7
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.04
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.06
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33886048">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 23:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Holstein Kiel v
                                                          Dortmund
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          6.6
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          6.8
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          5
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          5.1
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.53
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.54
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33899467">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Brentford v Man City
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          5.2
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          5.3
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.5
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.6
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.68
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.69
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33899488">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Chelsea v Bournemouth
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.63
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.64
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.8
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.9
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          5.5
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          5.6
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33886046">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Eintracht Frankfurt v
                                                          Freiburg
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.83
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.84
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.1
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.2
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.6
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.7
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33899452">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          West Ham v Fulham
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          3.05
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          3.1
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          3.6
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          3.65
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.5
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.52
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33886058">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Wolfsburg v Mgladbach
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.12
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.14
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          3.9
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          3.95
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          3.6
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          3.65
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33886065">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Leverkusen v Mainz
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.38
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.39
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          5.7
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          5.8
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          9.4
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          9.6
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33916643">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:15
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Atalanta v Juventus
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.12
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.14
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          3.4
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          3.45
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.1
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.2
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33899454">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:30
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Nottm Forest v
                                                          Liverpool
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          5.7
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          5.8
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.3
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.4
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.68
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.69
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </app-sport-list>
                          </div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted">
                            <app-sport-list
                              _nghost-gjk-c71
                              className="ng-star-inserted"
                            >
                              <div className="row ng-star-inserted">
                                <div className="col-lg-12">
                                  <div className="card">
                                    <div className="card-body card-content p-0">
                                      <div className="bet-table-header">
                                        <div className="row align-items-center">
                                          <div className="col-md-6">
                                            <span className="list-sport-title">
                                              <img
                                                className="img-fluid game-icon-img"
                                                src="/src/assets/images/menu-2.png"
                                              />
                                              &nbsp; Tennis
                                            </span>
                                            <a
                                              href="https://11xplay.com/#sportOne-2"
                                              data-bs-toggle="collapse"
                                              aria-expanded="true"
                                              className="collapseIcon"
                                              aria-controls="sportOne-2"
                                            >
                                              <i />
                                            </a>
                                            <ul className="live_virtual">
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order one"
                                                  id="checkboxOne2-inplay"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxOne2-inplay">
                                                  LIVE
                                                </label>
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order Two"
                                                  id="checkboxTwo2--inplay"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxTwo2--inplay">
                                                  VIRTUAL
                                                </label>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            1
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            x
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            2
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="bet-table-body collapse show ng-star-inserted"
                                        id="sportOne-2"
                                      >
                                        <div className="ng-star-inserted">
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33927211">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 05:24
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Arnaldi v Musetti
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.3
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.34
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.75
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.76
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33927102">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 05:24
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Monfils v Mpetshi
                                                          Perricard
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.27
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.28
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.7
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.8
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33926933">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 05:24
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Hurkacz v T Griekspoor
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.05
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.06
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          18
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          21
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33927957">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 05:25
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Cam Ugo Carabelli v Le
                                                          Tien
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.3
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          5
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.25
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.31
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33927116">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 06:20
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Fa Acosta v Ziz Bergs
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.28
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.32
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.76
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.78
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33927168">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 06:20
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Kas Samrej v Medvedev
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          110
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          400
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          0
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.01
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33927109">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 06:20
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Comesana v Altmaier
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.32
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.4
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.71
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.76
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33927047">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 06:23
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          S Zhang v McCartn
                                                          Kessler
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.88
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.9
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.1
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.14
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33926966">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 06:25
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Kovinic v Lulu Sun
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.2
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.24
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.81
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.83
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33927067">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 06:25
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Putintseva v El
                                                          Avanesyan
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.04
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.96
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.99
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33927683">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 06:25
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          I Begu v E Ruse
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.12
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.42
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.71
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.9
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33927159">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 06:25
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          V Gracheva v C Mcnally
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.07
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.1
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          11
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          14.5
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33934418">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 06:28
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Khu Sultanov v Yu
                                                          Shimizu
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          0
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          0
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          0
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          0
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33934408">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 07:30
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          T Chanta v Grenier
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          60
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          110
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.01
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.02
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/1736782575">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 07:40
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          🎮MOYUKA UCHIJIMA (V)
                                                          VS YAFAN WANG (V)
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/gamepad.png"
                                                          className="img-fluid"
                                                        />
                                                      </span>

                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33938621">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 09:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Skatov v Ri Noguchi
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.94
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.02
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.98
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.08
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/1736782597">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 09:05
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          🎮CHRISTOPHER EUBANKS
                                                          (V) VS MAX PURCELL (V)
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/gamepad.png"
                                                          className="img-fluid"
                                                        />
                                                      </span>

                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/29047232">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 09:45
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Queray vs. Bertich
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market"></div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/29047234">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 10:09
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Thimm vs. Tsogna
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market"></div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/29047236">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 10:15
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Djokevic vs. Kyrgiso
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market"></div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33926971">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 10:55
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          E Rybakina v Eme Jones
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          0
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          0
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          0
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          0
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </app-sport-list>
                          </div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted">
                            <app-sport-list
                              _nghost-gjk-c71
                              className="ng-star-inserted"
                            >
                              <div className="row ng-star-inserted">
                                <div className="col-lg-12">
                                  <div className="card">
                                    <div className="card-body card-content p-0">
                                      <div className="bet-table-header">
                                        <div className="row align-items-center">
                                          <div className="col-md-6">
                                            <span className="list-sport-title">
                                              <img
                                                className="img-fluid game-icon-img"
                                                src="/src/assets/images/menu-99990.png"
                                              />
                                              &nbsp; Binary
                                            </span>
                                            <a
                                              href="https://11xplay.com/#sportOne-99990"
                                              data-bs-toggle="collapse"
                                              aria-expanded="true"
                                              className="collapseIcon"
                                              aria-controls="sportOne-99990"
                                            >
                                              <i />
                                            </a>
                                            <ul className="live_virtual">
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order one"
                                                  id="checkboxOne99990-inplay"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxOne99990-inplay">
                                                  LIVE
                                                </label>
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order Two"
                                                  id="checkboxTwo99990--inplay"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxTwo99990--inplay">
                                                  VIRTUAL
                                                </label>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            1
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            x
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            2
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="bet-table-body collapse show ng-star-inserted"
                                        id="sportOne-99990"
                                      >
                                        <div className="ng-star-inserted">
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/1736812800">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 10:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Binary 2025/01/14
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        F
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </app-sport-list>
                          </div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted">
                            <app-sport-list
                              _nghost-gjk-c71
                              className="ng-star-inserted"
                            >
                              <div className="row ng-star-inserted">
                                <div className="col-lg-12">
                                  <div className="card">
                                    <div className="card-body card-content p-0">
                                      <div className="bet-table-header">
                                        <div className="row align-items-center">
                                          <div className="col-md-6">
                                            <span className="list-sport-title">
                                              <img
                                                className="img-fluid game-icon-img"
                                                src="/src/assets/images/menu-99994.png"
                                              />
                                              &nbsp; Kabaddi
                                            </span>
                                            <a
                                              href="https://11xplay.com/#sportOne-99994"
                                              data-bs-toggle="collapse"
                                              aria-expanded="true"
                                              className="collapseIcon"
                                              aria-controls="sportOne-99994"
                                            >
                                              <i />
                                            </a>
                                            <ul className="live_virtual">
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order one"
                                                  id="checkboxOne99994-inplay"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxOne99994-inplay">
                                                  LIVE
                                                </label>
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order Two"
                                                  id="checkboxTwo99994--inplay"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxTwo99994--inplay">
                                                  VIRTUAL
                                                </label>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            1
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            x
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            2
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="bet-table-body collapse show ng-star-inserted"
                                        id="sportOne-99994"
                                      >
                                        <div className="ng-star-inserted"></div>
                                      </div>

                                      <div
                                        className="bet-table-body collapse show ng-star-inserted"
                                        id="sportOne-99994"
                                      >
                                        <span className="norecords">
                                          No real-time records found
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </app-sport-list>
                          </div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted">
                            <app-sport-list
                              _nghost-gjk-c71
                              className="ng-star-inserted"
                            >
                              <div className="row ng-star-inserted">
                                <div className="col-lg-12">
                                  <div className="card">
                                    <div className="card-body card-content p-0">
                                      <div className="bet-table-header">
                                        <div className="row align-items-center">
                                          <div className="col-md-6">
                                            <span className="list-sport-title">
                                              <img
                                                className="img-fluid game-icon-img"
                                                src="/src/assets/images/menu-2378961.png"
                                              />
                                              &nbsp; Politics
                                            </span>
                                            <a
                                              href="https://11xplay.com/#sportOne-2378961"
                                              data-bs-toggle="collapse"
                                              aria-expanded="true"
                                              className="collapseIcon"
                                              aria-controls="sportOne-2378961"
                                            >
                                              <i />
                                            </a>
                                            <ul className="live_virtual">
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order one"
                                                  id="checkboxOne2378961-inplay"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxOne2378961-inplay">
                                                  LIVE
                                                </label>
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order Two"
                                                  id="checkboxTwo2378961--inplay"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxTwo2378961--inplay">
                                                  VIRTUAL
                                                </label>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            1
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            x
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            2
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="bet-table-body collapse show ng-star-inserted"
                                        id="sportOne-2378961"
                                      >
                                        <div className="ng-star-inserted">
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/1736377636">
                                                        <p className="team-name text-left team-event">
                                                          Jan 09 2025 00:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Assembly Election 2025
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        F
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </app-sport-list>
                          </div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                      </div>

                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="ng-star-inserted">
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted">
                            <app-sport-list
                              _nghost-gjk-c71
                              className="ng-star-inserted"
                            >
                              <div className="row ng-star-inserted">
                                <div className="col-lg-12">
                                  <div className="card">
                                    <div className="card-body card-content p-0">
                                      <div className="bet-table-header">
                                        <div className="row align-items-center">
                                          <div className="col-md-6">
                                            <span className="list-sport-title">
                                              <img
                                                className="img-fluid game-icon-img"
                                                src="/src/assets/images/menu-4.png"
                                              />
                                              &nbsp; Cricket
                                            </span>
                                            <a
                                              href="https://11xplay.com/#sportOne-4"
                                              data-bs-toggle="collapse"
                                              aria-expanded="true"
                                              className="collapseIcon"
                                              aria-controls="sportOne-4"
                                            >
                                              <i />
                                            </a>
                                            <ul className="live_virtual">
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order one"
                                                  id="checkboxOne4-featured"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxOne4-featured">
                                                  LIVE
                                                </label>
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order Two"
                                                  id="checkboxTwo4--featured"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxTwo4--featured">
                                                  VIRTUAL
                                                </label>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            1
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            x
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            2
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="bet-table-body collapse show ng-star-inserted"
                                        id="sportOne-4"
                                      >
                                        <div className="ng-star-inserted">
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/27996014">
                                                        <p className="team-name text-left team-event">
                                                          Dec 15 2024 13:45
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Twenty20 Big Bash
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_bookmaker ng-star-inserted">
                                                        BM
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          -
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </app-sport-list>
                          </div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted">
                            <app-sport-list
                              _nghost-gjk-c71
                              className="ng-star-inserted"
                            >
                              <div className="row ng-star-inserted">
                                <div className="col-lg-12">
                                  <div className="card">
                                    <div className="card-body card-content p-0">
                                      <div className="bet-table-header">
                                        <div className="row align-items-center">
                                          <div className="col-md-6">
                                            <span className="list-sport-title">
                                              <img
                                                className="img-fluid game-icon-img"
                                                src="/src/assets/images/menu-1.png"
                                              />
                                              &nbsp; Football
                                            </span>
                                            <a
                                              href="https://11xplay.com/#sportOne-1"
                                              data-bs-toggle="collapse"
                                              aria-expanded="true"
                                              className="collapseIcon"
                                              aria-controls="sportOne-1"
                                            >
                                              <i />
                                            </a>
                                            <ul className="live_virtual">
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order one"
                                                  id="checkboxOne1-featured"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxOne1-featured">
                                                  LIVE
                                                </label>
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order Two"
                                                  id="checkboxTwo1--featured"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxTwo1--featured">
                                                  VIRTUAL
                                                </label>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            1
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            x
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            2
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="bet-table-body collapse show ng-star-inserted"
                                        id="sportOne-1"
                                      >
                                        <div className="ng-star-inserted">
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33916635">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 23:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Como v AC Milan
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.1
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.2
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          3.65
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          3.7
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.04
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.06
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="dashboard.html">
                                                        <p className="team-name text-left team-event">
                                                          Jan 14 2025 23:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Holstein Kiel v
                                                          Dortmund
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>

                                                      <span className="icon_game ng-star-inserted">
                                                        <img
                                                          src="/src/assets/images/tv.svg"
                                                          className="img-fluid"
                                                        />
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          6.6
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          6.8
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          5
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          5.1
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.53
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.54
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33899467">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Brentford v Man City
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          5.2
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          5.3
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.5
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.6
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.68
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.69
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33899488">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Chelsea v Bournemouth
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.63
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.64
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.8
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.9
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          5.5
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          5.6
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33886046">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Eintracht Frankfurt v
                                                          Freiburg
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.83
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.84
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.1
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.2
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.6
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.7
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33899452">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          West Ham v Fulham
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          3.05
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          3.1
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          3.6
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          3.65
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.5
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.52
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33886058">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Wolfsburg v Mgladbach
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.12
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.14
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          3.9
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          3.95
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          3.6
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          3.65
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33886065">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:00
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Leverkusen v Mainz
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.38
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.39
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          5.7
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          5.8
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          9.4
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          9.6
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33916643">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:15
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Atalanta v Juventus
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          2.12
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          2.14
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          3.4
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          3.45
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.1
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.2
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bet-table-row ng-star-inserted">
                                            <div className="row">
                                              <div className="col-md-6">
                                                <div className="game-box">
                                                  <div className="game-left-col">
                                                    <div className="game-name">
                                                      <a href="https://11xplay.com/game-detail/33899454">
                                                        <p className="team-name text-left team-event">
                                                          Jan 15 2025 01:30
                                                          (IST)
                                                        </p>
                                                        <p className="team-name text-left">
                                                          Nottm Forest v
                                                          Liverpool
                                                        </p>
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="game-icons">
                                                    <div className="icons_market">
                                                      <span className="icon_fancy ng-star-inserted">
                                                        G
                                                      </span>
                                                    </div>
                                                    <div className="game-date inplay ng-star-inserted">
                                                      <span>Live</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-md-6 text-center">
                                                <div className="row g-0 ng-star-inserted">
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          5.7
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          5.8
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          4.3
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          4.4
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-4 col-4">
                                                    <div className="h-backLay">
                                                      <div className="back bl-box">
                                                        <span className="d-block bet-button-price">
                                                          1.68
                                                        </span>
                                                      </div>
                                                      <div className="bl-box lay">
                                                        <span className="d-block bet-button-price">
                                                          1.69
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </app-sport-list>
                          </div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted">
                            <app-sport-list
                              _nghost-gjk-c71
                              className="ng-star-inserted"
                            >
                              <div className="row ng-star-inserted">
                                <div className="col-lg-12">
                                  <div className="card">
                                    <div className="card-body card-content p-0">
                                      <div className="bet-table-header">
                                        <div className="row align-items-center">
                                          <div className="col-md-6">
                                            <span className="list-sport-title">
                                              <img
                                                className="img-fluid game-icon-img"
                                                src="/src/assets/images/menu-2.png"
                                              />
                                              &nbsp; Tennis
                                            </span>
                                            <a
                                              href="https://11xplay.com/#sportOne-2"
                                              data-bs-toggle="collapse"
                                              aria-expanded="true"
                                              className="collapseIcon"
                                              aria-controls="sportOne-2"
                                            >
                                              <i />
                                            </a>
                                            <ul className="live_virtual">
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order one"
                                                  id="checkboxOne2-featured"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxOne2-featured">
                                                  LIVE
                                                </label>
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  defaultValue="Order Two"
                                                  id="checkboxTwo2--featured"
                                                  className="ng-untouched ng-pristine ng-valid"
                                                />
                                                <label htmlFor="checkboxTwo2--featured">
                                                  VIRTUAL
                                                </label>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            1
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            x
                                          </div>
                                          <div className="col-md-2 text-center d-none d-md-block">
                                            2
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="bet-table-body collapse show ng-star-inserted"
                                        id="sportOne-2"
                                      >
                                        <div className="ng-star-inserted"></div>
                                      </div>

                                      <div
                                        className="bet-table-body collapse show ng-star-inserted"
                                        id="sportOne-2"
                                      >
                                        <span className="norecords">
                                          No real-time records found
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </app-sport-list>
                          </div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                        <div className="ng-star-inserted">
                          <div className="ng-star-inserted"></div>
                        </div>
                      </div>

                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    ></tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    ></tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    ></tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                    <tab
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane ng-star-inserted"
                    >
                      <div className="extra ng-star-inserted">
                        <div className="bet-table-header">
                          <span className="list-sport-title">
                            <img
                              src="/src/assets/images/icon-casino.svg"
                              className="img-fluid game-icon-img"
                            />
                            &nbsp; casino provider
                          </span>
                        </div>
                        <div className="csn_div">
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88_cp580-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/mac88virtualgame.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/fungames_500-299.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evolution.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/ezugi.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vivogaming.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/turbogames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/spribe.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/gamzix.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/jili.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/aesexy.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/evoplay.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/bombaylive.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/kingmaker.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/smartsoft.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/playtech.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/betgames.webp"
                              className="img-fluid"
                            />
                          </div>
                          <div className="csn_thumb">
                            <img
                              src="/src/assets/images/vsport.webp"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </tab>
                  </div>
                </tabset>
              </div>
            </section>
          </div>
        </main>
        <div>
          <nav className="footer_mobilemenu">
            <a href="dashboard.html" className="active">
              <img src="/src/assets/images/in-play.svg" className="img-fluid" />
              <span>in-play</span>
            </a>
            <a href="javascript:void(0)">
              <img src="/src/assets/images/multi.svg" className="img-fluid" />
              <span>Multi</span>
            </a>
            <a href="dashboard.html" className="ng-star-inserted">
              <img src="/src/assets/images/place.svg" className="img-fluid" />
              <span>Home</span>
            </a>

            <a href="https://11xplay.com/sports/99999">
              <img
                src="/src/assets/images/icon-casino.svg"
                className="img-fluid"
              />
              <span>Casino</span>
            </a>
            <a href="https://11xplay.com/sports/99998">
              <img
                src="/src/assets/images/icon-casino.svg"
                className="img-fluid"
              />
              <span>ICasino</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
