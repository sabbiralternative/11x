import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import MobileFooter from "../components/shared/MobileFooter/MobileFooter";
import Sidebar from "../components/shared/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Banner from "../components/modals/Banner/Banner";

const MainLayout = () => {
  const { banner, headerHeight } = useSelector((state) => state.global);
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
      {banner && <Banner />}
      <Header setIsOpenSidebar={setIsOpenSidebar} />
      <Sidebar setIsOpenSidebar={setIsOpenSidebar} />
      <div style={{ marginTop: `${headerHeight}px` }}>
        {" "}
        <Outlet />
      </div>
      <MobileFooter />
    </div>
  );
};

export default MainLayout;
