import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useLogo from "../../../hooks/useLogo";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import Login from "../../modals/Login/Login";
import {
  setClosePopUpForForever,
  setShowLogin,
} from "../../../redux/features/global/globalSlice";
import Register from "../../modals/Register/Register";
import ForgotPassword from "../../modals/ForgotPassword/ForgotPassword";
import useBalance from "../../../hooks/balance";
import ForceChangePassword from "../../modals/ForceChangePassword/ForceChangePassword";
import { useEffect, useState } from "react";
import AppPopup from "./AppPopup";
import Notification from "../Notification/Notification";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";
import useWhatsApp from "../../../hooks/whatsapp";
import BuildVersion from "../../modals/BuildVersion/BuildVersion";
import Error from "../../UI/Error/Error";

const Header = ({ setIsOpenSidebar }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [filteredNotification, setFilteredNotification] = useState([]);
  const { data: socialLink } = useWhatsApp();
  const [showBuildVersion, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowScrollY, setWindowScrollY] = useState(0);
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScrollY = () => {
      setWindowScrollY(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScrollY);
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
  }, [location?.state?.pathname, location.pathname, isModalOpen, windowWidth]);

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

  const handleDefineTop = () => {
    if (
      Settings?.apkLink &&
      isModalOpen &&
      windowWidth < 550 &&
      windowScrollY < 70
    ) {
      if (showNotification && filteredNotification?.length > 0) {
        return "100px";
      } else {
        return "67px";
      }
    } else {
      return "0px";
    }
  };
  if (Settings.appOnly && !closePopupForForever) {
    return <Error />;
  }
  return (
    <div>
      <Notification
        filteredNotification={filteredNotification}
        setFilteredNotification={setFilteredNotification}
        setShowNotification={setShowNotification}
        showNotification={showNotification}
      />
      {Settings?.apkLink && isModalOpen && windowWidth < 550 && (
        <AppPopup
          showNotification={showNotification}
          filteredNotification={filteredNotification}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {Settings?.apkLink && showAPKModal && (
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
        style={{
          top: handleDefineTop(),
        }}
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="container-fluid d-flex align-items-center">
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
                <ul className="d-flex align-items-center">
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
    </div>
  );
};

export default Header;
