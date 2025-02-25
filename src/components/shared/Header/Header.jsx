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
import useBalance from "../../../hooks/balance";
import ForceChangePassword from "../../modals/ForceChangePassword/ForceChangePassword";

const Header = ({ setIsOpenSidebar }) => {
  const { data } = useBalance();
  const { token } = useSelector((state) => state.auth);
  const { showLogin, showRegister, showForgotPassword, forceChangePassword } =
    useSelector((state) => state.global);
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
      {forceChangePassword && <ForceChangePassword />}
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="container-fluid d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/" className="logo d-flex align-items-center">
              <img alt="" className="img-fluid" src={logo} />
            </Link>
            <i
              onClick={() => setIsOpenSidebar((prev) => !prev)}
              className="bi bi-list-nested toggle-sidebar-btn ng-star-inserted"
            />
          </div>

          <nav className="header-nav ms-auto">
            {token ? (
              <nav className="header-nav ms-auto ng-star-inserted">
                <ul className="d-flex align-items-center">
                  <li className="nav-item balance_li">
                    <a href="javascript:void(0);" className="nav-link">
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
