import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { useEffect } from "react";
import disableDevtool from "disable-devtool";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/features/auth/authSlice";
import { setForceChangePassword } from "./redux/features/global/globalSlice";
import useWhatsApp from "./hooks/whatsapp";
import { Settings } from "./api";
import MaintenanceMessage from "./components/UI/MaintenanceMessage/MaintenanceMessage";

function App() {
  const { data: socialLink } = useWhatsApp();
  const disabledDevtool = socialLink?.disabledDevtool;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { showLogin } = useSelector((state) => state.global);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      if (disabledDevtool) {
        disableDevtool({
          ondevtoolopen: (type) => {
            const info = "devtool opened!; type =" + type;
            if (info) {
              dispatch(logout());
              window.location.href = "https://www.google.com/";
            }
          },
        });
      }
    }
  }, [navigate, disabledDevtool, dispatch]);

  useEffect(() => {
    const changePassword = localStorage.getItem("changePassword");
    if (changePassword) {
      dispatch(setForceChangePassword(true));
    }
  }, [showLogin, dispatch]);

  if (Settings.maintenance_message) {
    return <MaintenanceMessage />;
  }

  return <MainLayout />;
}

export default App;
