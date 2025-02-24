import { useLoginMutation } from "../../redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useLogo from "../../hooks/useLogo";
import { Settings } from "../../api";
import { setUser } from "../../redux/features/auth/authSlice";
import toast from "react-hot-toast";

const Home = () => {
  const navigate = useNavigate();
  const { logo } = useLogo();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();

  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
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
    <div className="fullpage">
      <div>
        <div>
          <header
            id="header"
            className="header fixed-top d-flex align-items-center"
          >
            <div className="container-fluid d-flex align-items-center">
              {/* Logo Section */}
              <div className="d-flex align-items-center justify-content-between">
                <Link to="/home" className="logo d-flex align-items-center">
                  <img src={logo} alt="Logo" className="img-fluid" />
                </Link>
              </div>
              {/* Navigation Section */}
              <nav className="header-nav ms-auto">
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
                  <li className="nav-item expo_bal signupbtn">
                    <a id="loginbutton" className="nav-link">
                      <i className="bi bi-box-arrow-in-right" />
                      <span>Login</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <div
            id="loginmodal"
            role="dialog"
            aria-labelledby="dialog-login-name"
            className="modal fade login-popup in"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    id="loginclose"
                    type="button"
                    className="close pull-right"
                  >
                    <span>×</span>
                  </button>
                  <div>
                    <div>
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
                          <p>
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
                  <a target="_blank" href="https://11xplay.com/">
                    <img
                      src="/src/assets/images/poster-login-popup.webp"
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
          <div className="commentary">
            <img src="/src/assets/images/commentary.png" />
            <marquee>
              New Version Available With International Casino Please Contact
              Your Upline
            </marquee>
          </div>{" "}
        </div>
        <main id="main" className="main">
          <div>
            <div
              id="bannerMain"
              data-bs-ride="carousel"
              className="carousel slide"
            >
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img
                    src="/src/assets/images/banner1.png"
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item active">
                  <img
                    src="/src/assets/images/banner2.png"
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/src/assets/images/banner3.png"
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/src/assets/images/banner4.png"
                    className="img-fluid"
                  />
                </div>
              </div>
              <button
                type="button"
                data-bs-target="#bannerMain"
                data-bs-slide="prev"
                className="carousel-control-prev"
              >
                <span
                  aria-hidden="true"
                  className="carousel-control-prev-icon"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                type="button"
                data-bs-target="#bannerMain"
                data-bs-slide="next"
                className="carousel-control-next"
              >
                <span
                  aria-hidden="true"
                  className="carousel-control-next-icon"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <section className="sportsSection">
              <div className="container">
                <h2 className="titlehome">IN OUR EXCHANGE...</h2>
                <div className="row">
                  <div className="col-md-4 col-6" tabIndex={0}>
                    <div className="ss_div">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/4.webp"
                      />
                      <span className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span /> Cricket
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6" tabIndex={0}>
                    <div className="ss_div">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/1.webp"
                      />
                      <span className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span /> Football
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6" tabIndex={0}>
                    <div className="ss_div">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/2.webp"
                      />
                      <span className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span /> Tennis
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6" tabIndex={0}>
                    <div className="ss_div">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/99998.webp"
                      />
                      <span className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span /> Int Casino
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6" tabIndex={0}>
                    <div className="ss_div">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/7.webp"
                      />
                      <span className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span /> Horse Racing
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-6" tabIndex={0}>
                    <div className="ss_div">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/4339.webp"
                      />
                      <span className="home-animated">
                        <span />
                        <span />
                        <span />
                        <span /> Greyhound Racing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="marketing">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h2>Instant Action?</h2>
                    <p>
                      Instant Withdrawal &amp; Deposit Live Stream Of Events
                      Famous International Casino Surety of Winning Rate 24/7
                      Customer Service
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="/src/assets/images/casino-pic.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="casino">
              <div className="container">
                <h2 className="titlehome">OUR CASINOS</h2>
                <div className="row">
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/rummy.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/2020tp2.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/andarbahar.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/dragontiger.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/dragontigerlion.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/dragontigeroneday.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/dt2.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/baccarat.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/29baccarat.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/baccaratoneday.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/sicbo.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/roulette.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/20-20poker.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/poker.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/lucky7.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/onedayteenpatti.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/teenpattitest.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/2cardsteenpatti.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/muflisteenpattioneday.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/2020teenpatti.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/2cardonedayteenpatti.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/openteenpatti.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/32cards.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/amarakbaranthony.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/3cardjudgement.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/queenrace.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/race20.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/casinowar.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/worlimatka.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/trap.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/trio.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/bollywoodcasino.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/10kadum.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/1-card-20-20.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/one-card-one-day.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/race17.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/note-umber.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/raceto2nd.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/centercardoneday.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/lottery.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/superoveroneday.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/fivecricket.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/cricket2020.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/high_low.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/6pp.webp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="thumbnail__item__pic">
                      <img
                        className="img-fluid"
                        src="/src/assets/images/10-10-cricket.webp"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="casino_marketing">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img
                      src="/src/assets/images/casino-pic.png"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-5">
                    <h2>Best to others?</h2>
                    <p>
                      11xplay.online is India’s first and most trusted betting
                      exchange that offers the likes of sports book and live
                      casino and live Indian card games. Unlike most other
                      betting sites, on FairPlay a user bets against other
                      players and not the house thus maintaining transparency
                      and increasing a player’s chances of winning.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="all-providers">
              <div className="container">
                <h2 className="titlehome">Game Providers</h2>
                <div className="row align-items-center">
                  <div className="col-lg-2 col-6">
                    <img
                      src="/src/assets/images/mac88.webp"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img
                      src="/src/assets/images/mac88virtualgame.webp"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img
                      src="/src/assets/images/aesexy.webp"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img
                      src="/src/assets/images/betgames.webp"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img
                      src="/src/assets/images/bombaylive.webp"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img
                      src="/src/assets/images/evolution.webp"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img
                      src="/src/assets/images/ezugi.webp"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img
                      src="/src/assets/images/gamzix.webp"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img
                      src="/src/assets/images/jili.webp"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-2 col-6">
                    <img
                      src="/src/assets/images/spribe.webp"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="footer_home">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="footer__logo">
                      <a href="https://11xplay.com/home">
                        <img
                          alt=""
                          className="img-fluid"
                          src="/src/assets/images/logo.png"
                        />
                      </a>
                      <hr />
                      <p>
                        © 2024 All rights reserved.
                        <a href="https://11xplay.com/">
                          11xplay most trusted and secure exchange site in the
                          world.
                        </a>
                      </p>
                      <img
                        src="/src/assets/images/socialicon.png"
                        className="img-fluid mt-2"
                        style={{ width: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h2>Payment Partners</h2>
                    <img
                      src="/src/assets/images/payment.png"
                      className="img-fluid"
                      style={{ width: "300px" }}
                    />
                    <img
                      src="/src/assets/images/payment2.png"
                      className="img-fluid"
                      style={{ width: "300px" }}
                    />
                  </div>
                  <div className="col-lg-2">
                    <h2>Games</h2>
                    <div className="footer__nav">
                      <ul>
                        <li tabIndex={0}>
                          <a href="javascript:void(0)">Cricket</a>
                        </li>
                        <li tabIndex={0}>
                          <a href="javascript:void(0)">Football</a>
                        </li>
                        <li tabIndex={0}>
                          <a href="javascript:void(0)">Tennis</a>
                        </li>
                        <li tabIndex={0}>
                          <a href="javascript:void(0)">Int Casino</a>
                        </li>
                        <li tabIndex={0}>
                          <a href="javascript:void(0)">Horse Racing</a>
                        </li>
                        <li tabIndex={0}>
                          <a href="javascript:void(0)">Greyhound Racing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <h2>Security &amp; Game Integrity</h2>
                    <div className="securitylogo">
                      <img
                        src="/src/assets/images/18.png"
                        className="img-fluid"
                      />
                      <img
                        src="/src/assets/images/responsible-play.png"
                        className="img-fluid"
                      />
                      <p className="mt-3">
                        Powered by
                        <img
                          src="/src/assets/images/betfair.png"
                          className="img-fluid d-block"
                          style={{ height: "20px" }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <p className="bottom-links">
                      <a href="javascript:void(0);">Privacy Policy</a>
                      <a href="javascript:void(0);">Disconnection Policy</a>
                      <a href="javascript:void(0);">Responsible Gambling</a>
                      <a href="javascript:void(0);">Rules &amp; Regulations</a>
                      <a href="javascript:void(0);">Exclusion Policy</a>
                      <a href="javascript:void(0);">Restricted Territories</a>
                      <a href="javascript:void(0);">Terms And Conditions</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>{" "}
          </div>
        </main>
        <div>
          <nav className="footer_mobilemenu">
            <a href="dashboard.html">
              <img src="/src/assets/images/in-play.svg" className="img-fluid" />
              <span>in-play</span>
            </a>
            <a href="javascript:void(0)">
              <img src="/src/assets/images/multi.svg" className="img-fluid" />
              <span>Multi</span>
            </a>

            <a href="home.html" className="active">
              <img src="/src/assets/images/place.svg" className="img-fluid" />
              <span>Home</span>
            </a>

            <a href="sportbook1.html">
              <img
                src="/src/assets/images/icon-casino.svg"
                className="img-fluid"
              />
              <span>Casino</span>
            </a>
            <a href="sportbooklive.html">
              <img
                src="/src/assets/images/icon-casino.svg"
                className="img-fluid"
              />
              <span>ICasino</span>
            </a>
          </nav>
        </div>{" "}
      </div>
    </div>
  );
};

export default Home;
