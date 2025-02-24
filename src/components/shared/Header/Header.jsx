import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useLogo from "../../../hooks/useLogo";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";

import Login from "../../modals/Login/Login";
import { setShowLogin } from "../../../redux/features/global/globalSlice";
import Register from "../../modals/Register/Register";
import ForgotPassword from "../../modals/ForgotPassword/ForgotPassword";

const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const { showLogin, showRegister, showForgotPassword } = useSelector(
    (state) => state.global
  );
  const navigate = useNavigate();
  const { logo } = useLogo();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();

  const loginWithDemo = async () => {
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const modal = {
        banner: result?.result?.banner,
        bannerTitle: result?.result?.bannerTitle,
      };

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("modal", JSON.stringify(modal));
      localStorage.setItem("bonusToken", bonusToken);
      if (token && user) {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  return (
    <div>
      {showLogin && <Login />}
      {showRegister && <Register />}
      {showForgotPassword && <ForgotPassword />}
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="container-fluid d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/" className="logo d-flex align-items-center">
              <img alt="" className="img-fluid" src={logo} />
            </Link>
            <i className="bi bi-list-nested toggle-sidebar-btn ng-star-inserted" />
          </div>

          <nav className="header-nav ms-auto">
            {token ? (
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
            ) : (
              <ul className="d-flex align-items-center">
                {/* Demo Link */}
                <li
                  onClick={loginWithDemo}
                  className="nav-item expo_bal loginbtn"
                >
                  <a className="nav-link">
                    <i className="bi bi-box-arrow-in-right" />
                    <span>Demo</span>
                  </a>
                </li>
                {/* Login Link */}
                <li
                  onClick={() => dispatch(setShowLogin(true))}
                  className="nav-item expo_bal signupbtn"
                >
                  <a id="loginbutton" className="nav-link">
                    <i className="bi bi-box-arrow-in-right" />
                    <span>Login</span>
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>

      {/* Force change password */}
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
      {/* Modal */}
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
