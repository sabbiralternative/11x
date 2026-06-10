import useBannerImage from "../../hooks/banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";

const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { data } = useBannerImage();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Swiper
      //   autoplay={{
      //     delay: 5000,
      //     disableOnInteraction: false,
      //   }}
      slidesPerView={windowWidth < 550 ? 1 : 2}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      className="mySwiper"
      style={{ marginTop: "10px" }}
    >
      <div id="bannerMain" data-bs-ride="carousel" className="carousel slide">
        <div className="carousel-inner">
          {data?.banner?.map((image, i) => {
            return (
              <SwiperSlide key={i}>
                <div
                  className="carousel-item active"
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    style={{ borderRadius: "10px" }}
                    src={image}
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </div>
    </Swiper>
  );
};

export default Banner;
