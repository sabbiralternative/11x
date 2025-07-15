import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import MobileFooter from "../components/shared/MobileFooter/MobileFooter";
import Sidebar from "../components/shared/Sidebar/Sidebar";
import Notification from "../components/shared/Notification/Notification";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Banner from "../components/modals/Banner/Banner";

const MainLayout = () => {
  const { banner } = useSelector((state) => state.global);
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
  console.log(banner);
  return (
    <div
      className={`ng-star-inserted ${
        isMobile && isOpenSidebar ? "toggle-sidebar" : ""
      }`}
    >
      {banner && <Banner />}
      <Header setIsOpenSidebar={setIsOpenSidebar} />
      <Notification />
      <Sidebar setIsOpenSidebar={setIsOpenSidebar} />
      <Outlet />
      <MobileFooter />
    </div>
  );
};

export default MainLayout;
