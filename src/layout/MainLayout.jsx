import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import MobileFooter from "../components/shared/MobileFooter/MobileFooter";
import Sidebar from "../components/shared/Sidebar/Sidebar";
import Notification from "../components/shared/Notification/Notification";

const MainLayout = () => {
  return (
    <div className="ng-star-inserted">
      <Header />
      <Notification />
      <Sidebar />
      <Outlet />
      <MobileFooter />
    </div>
  );
};

export default MainLayout;
