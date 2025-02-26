import useBannerImage from "../../hooks/banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const Banner = () => {
  const { data } = useBannerImage();
  console.log(data);
  return (
    <Swiper
      //   autoplay={{
      //     delay: 5000,
      //     disableOnInteraction: false,
      //   }}
      slidesPerView={2}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <div id="bannerMain" data-bs-ride="carousel" className="carousel slide">
        <div className="carousel-inner">
          {data?.banner?.map((image, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="carousel-item active">
                  <img src={image} className="img-fluid" />
                </div>
              </SwiperSlide>
            );
          })}
        </div>

        <button
          type="button"
          data-bs-target="#bannerMain"
          data-bs-slide="prev"
          className="carousel-control-prev"
        >
          <span aria-hidden="true" className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          type="button"
          data-bs-target="#bannerMain"
          data-bs-slide="next"
          className="carousel-control-next"
        >
          <span aria-hidden="true" className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Swiper>
  );
};

export default Banner;
