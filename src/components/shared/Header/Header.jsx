import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import useLogo from "../../../hooks/useLogo";
import { Settings } from "../../../api";
import Login from "../../modals/Login/Login";
import {
  setClosePopUpForForever,
  setHeaderHeight,
  setShowLogin,
  setShowRegister,
} from "../../../redux/features/global/globalSlice";
import Register from "../../modals/Register/Register";
import ForgotPassword from "../../modals/ForgotPassword/ForgotPassword";
import useBalance from "../../../hooks/balance";
import ForceChangePassword from "../../modals/ForceChangePassword/ForceChangePassword";
import { Fragment, useEffect, useRef, useState } from "react";
import AppPopup from "./AppPopup";
import Notification from "../Notification/Notification";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
import useWhatsApp from "../../../hooks/whatsapp";
import BuildVersion from "../../modals/BuildVersion/BuildVersion";
import Error from "../../UI/Error/Error";
import useLanguage from "../../../hooks/useLanguage";
import Language from "../../modals/Language";
import img from "../../../assets/img";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const Header = ({ setIsOpenSidebar }) => {
  const { valueByLanguage, setLanguage } = useLanguage();
  const [showLanguage, setShowLanguage] = useState(false);
  const ref = useRef();
  const [showNotification, setShowNotification] = useState(false);
  const [filteredNotification, setFilteredNotification] = useState([]);
  const { data: socialLink } = useWhatsApp();
  const [showBuildVersion, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showAPKModal, setShowAPKModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { data } = useBalance();
  const { token } = useSelector((state) => state.auth);
  const {
    showLogin,
    showRegister,
    showForgotPassword,
    forceChangePassword,
    closePopupForForever,
  } = useSelector((state) => state.global);

  const { logo } = useLogo();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    dispatch(setClosePopUpForForever(closePopupForForever ? true : false));
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      dispatch(setClosePopUpForForever(true));
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!apk_modal_shown) {
        setShowAPKModal(true);
      }
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if (!expiryTime || currentTime > expiryTime) {
          localStorage.removeItem("installPromptExpiryTime");

          setIsModalOpen(true);
        }
      }
    }
  }, [
    location?.state?.pathname,
    location.pathname,
    isModalOpen,
    windowWidth,
    dispatch,
  ]);

  useEffect(() => {
    if (ref.current) {
      const headerHeight = ref.current.offsetHeight;

      dispatch(setHeaderHeight(headerHeight));
    }
  }, [ref, dispatch, isModalOpen, location.pathname, windowWidth]);

  useEffect(() => {
    const newVersion = socialLink?.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        localStorage.setItem("build_version", newVersion);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [socialLink?.build_version, stored_build_version]);

  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "english");
  }, [setLanguage]);

  if (Settings.app_only && !closePopupForForever) {
    return <Error />;
  }

  return (
    <Fragment>
      {Settings.apk_link && showAPKModal && (
        <DownloadAPK setShowAPKModal={setShowAPKModal} />
      )}
      {showBuildVersion && !showAPKModal && (
        <BuildVersion
          build_version={socialLink?.build_version}
          setShowBuildVersion={setShowBuildVersion}
        />
      )}

      {showLogin && <Login />}
      {showRegister && <Register />}
      {showForgotPassword && <ForgotPassword />}
      {forceChangePassword && <ForceChangePassword />}
      <header
        ref={ref}
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <Notification
          filteredNotification={filteredNotification}
          setFilteredNotification={setFilteredNotification}
          setShowNotification={setShowNotification}
          showNotification={showNotification}
        />
        {Settings.apk_link && isModalOpen && windowWidth < 550 && (
          <AppPopup
            showNotification={showNotification}
            filteredNotification={filteredNotification}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        <div
          className="container-fluid d-flex align-items-center"
          style={{
            padding: "10px 0px",
          }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <Link
              to={token ? "/" : "/home"}
              className="logo d-flex align-items-center"
            >
              <img alt="" className="img-fluid" src={logo} />
            </Link>
            {location.pathname !== "/home" && (
              <i
                onClick={() => setIsOpenSidebar((prev) => !prev)}
                className="bi bi-list-nested toggle-sidebar-btn ng-star-inserted"
              />
            )}
          </div>

          <nav className="header-nav ms-auto">
            {token ? (
              <nav className="header-nav ms-auto ng-star-inserted">
                <ul
                  className="d-flex align-items-center"
                  style={{ gap: "3px" }}
                >
                  <li className="nav-item balance_li">
                    <a className="nav-link">
                      <i className="bi bi-bank" /> Balance
                      <b>{data?.availBalance}</b>
                    </a>
                  </li>
                  <li className="nav-item expo_li">
                    <a className="nav-link">
                      <i className="bi bi-bar-chart" />
                      expo. <b>{data?.deductedExposure}</b>
                    </a>
                  </li>
                  <li className="nav-item expo_li">
                    <div style={{ position: "relative", padding: "6px 4px" }}>
                      {Settings.language && (
                        <button
                          onClick={() => setShowLanguage((prev) => !prev)}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "end",
                              background: "transparent",
                              border: "none",
                            }}
                          >
                            <img
                              style={{
                                height: "20px",
                                width: "20px",
                                filter: "invert(1)",
                              }}
                              src={img.globe}
                              alt=""
                            />
                          </div>
                        </button>
                      )}
                      {showLanguage && (
                        <Language setShowLanguage={setShowLanguage} />
                      )}
                    </div>
                  </li>
                </ul>
              </nav>
            ) : (
              <ul className="d-flex align-items-center">
                {/* Demo Link */}

                {/* Login Link */}
                <li
                  onClick={() => dispatch(setShowLogin(true))}
                  className="nav-item expo_bal signupbtn"
                >
                  <a id="loginbutton" className="nav-link">
                    <i className="bi bi-box-arrow-in-right" />
                    <span>
                      {" "}
                      {languageValue(valueByLanguage, LanguageKey.LOGIN)}
                    </span>
                  </a>
                </li>
                <li
                  onClick={() => dispatch(setShowRegister(true))}
                  className="nav-item expo_bal loginbtn"
                >
                  <a className="nav-link">
                    <i className="bi bi-box-arrow-in-right" />
                    <span>Register</span>
                  </a>
                </li>
                <li className="nav-item expo_li">
                  <div style={{ position: "relative", padding: "1px" }}>
                    {Settings.language && (
                      <button onClick={() => setShowLanguage((prev) => !prev)}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "end",
                            background: "transparent",
                            border: "none",
                            marginTop: "1px",
                          }}
                        >
                          <img
                            style={{
                              height: "20px",
                              width: "20px",
                              filter: "invert(1)",
                            }}
                            src={img.globe}
                            alt=""
                          />
                        </div>
                      </button>
                    )}
                    {showLanguage && (
                      <Language setShowLanguage={setShowLanguage} />
                    )}
                  </div>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
