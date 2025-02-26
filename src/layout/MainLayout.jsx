import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import MobileFooter from "../components/shared/MobileFooter/MobileFooter";
import Sidebar from "../components/shared/Sidebar/Sidebar";
import Notification from "../components/shared/Notification/Notification";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`ng-star-inserted ${
        isMobile && isOpenSidebar ? "toggle-sidebar" : ""
      }`}
    >
      <Header setIsOpenSidebar={setIsOpenSidebar} />
      <Notification />
      <Sidebar setIsOpenSidebar={setIsOpenSidebar} />
      <Outlet />
      <MobileFooter />
    </div>
  );
};

export default MainLayout;
