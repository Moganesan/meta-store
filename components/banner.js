import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const Banner = () => {
  const Banner1 = [
    {
      id: "1",
      img: "/banner1.jpg",
    },
    {
      id: "2",
      img: "/banner2.jpg",
    },
    {
      id: "3",
      img: "/banner3.jpg",
    },
  ];

  const Banner2 = [
    {
      id: "1",
      img: "/banner2.1.jpg",
    },
    {
      id: "2",
      img: "/banner2.2.jpg",
    },
    {
      id: "3",
      img: "/banner2.3.jpg",
    },
  ];

  const Banner3 = [
    {
      id: "1",
      img: "/banner3.1.jpg",
    },
    {
      id: "2",
      img: "/banner3.2.jpg",
    },
  ];

  const Banner4 = [
    {
      id: "1",
      img: "/banner4.1.jpg",
    },
    {
      id: "2",
      img: "/banner4.2.jpg",
    },
  ];
  return (
    <div className="flex justify-center mt-10">
      <div className="row-span-2">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1500 }}
          style={{ width: 571, scrollBehavior: "smooth" }}
          className="flex overflow-scroll banner"
        >
          {Banner1.map((banner) => (
            <SwiperSlide>
              <img
                key={banner.id}
                src={banner.img}
                style={{ height: 280, width: 571 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="row-span-2 ml-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1500 }}
          style={{ width: 280, scrollBehavior: "smooth" }}
          className="flex overflow-scroll banner"
        >
          {Banner2.map((banner) => (
            <SwiperSlide>
              <img
                key={banner.id}
                src={banner.img}
                style={{ height: 280, width: 280 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col justify-between ml-10">
        <div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1500 }}
            style={{ width: 275, scrollBehavior: "smooth" }}
            className="flex overflow-scroll banner"
          >
            {Banner3.map((banner) => (
              <SwiperSlide>
                <img
                  src={banner.img}
                  key={banner.id}
                  style={{ width: 275, height: 125 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1500 }}
            style={{ width: 275, scrollBehavior: "smooth" }}
            className="flex overflow-scroll banner"
          >
            {Banner4.map((banner) => (
              <SwiperSlide>
                <img src={banner.img} style={{ width: 275, height: 125 }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
