import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useSwiper } from "swiper/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import "swiper/css";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      className="bg-gray-100 p-2 rounded-md ml-4"
      onClick={() => swiper.slideNext()}
    >
      {children}
    </button>
  );
};

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      className="bg-gray-100 p-2 rounded-md"
      onClick={() => swiper.slidePrev()}
    >
      {children}
    </button>
  );
};

const FeaturedBrands = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="flex justify-between items-end px-10">
        <h1 className="font-bold text-3xl mt-10">Featured Brands</h1>
      </div>
      <div className="mt-10">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="flex self-end ml-10 mt-5">
            <SwiperButtonPrev>
              <ArrowLeftIcon className="w-5 h-5" />
            </SwiperButtonPrev>
            <SwiperButtonNext>
              <ArrowRightIcon className="w-5 h-5" />
            </SwiperButtonNext>
          </div>

          <SwiperSlide style={{ marginLeft: 40 }}>
            <div className="hover:bg-white hover:shadow-2xl hover:p-2 cursor-pointer transition-all w-72 flex flex-col items-start justify-center h-72 rounded-lg">
              <img src="https://farmart.botble.com/storage/brands/1.png" />
              <span className="mt-5 font-bold text-gray-600 w-72 text-xl text-start">
                FOODPOUND
              </span>
              <h1 className="font-bold text-slate-800 text-lg">
                New Snacks Release
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hover:bg-white hover:shadow-2xl hover:p-2 cursor-pointer transition-all w-72 flex flex-col items-start justify-center h-72 rounded-lg">
              <img src="https://farmart.botble.com/storage/brands/2.png" />
              <span className="mt-5 font-bold text-gray-600 w-72 text-xl text-start">
                ITEA JSE
              </span>
              <h1 className="font-bold text-slate-800 text-lg">
                Happy Tea 100% Organic.
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hover:bg-white hover:shadow-2xl hover:p-2 cursor-pointer transition-all w-72 flex flex-col items-start justify-center h-72 rounded-lg">
              <img src="https://farmart.botble.com/storage/brands/3.png" />
              <span className="mt-5 font-bold text-gray-600 w-72 text-xl text-start">
                SODA BRAND
              </span>
              <h1 className="font-bold text-slate-800 text-lg">
                Fresh Energy Drinks
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hover:bg-white hover:shadow-2xl hover:p-2 cursor-pointer transition-all w-72 flex flex-col items-start justify-center h-72 rounded-lg">
              <img src="https://farmart.botble.com/storage/brands/4.png" />
              <span className="mt-5 font-bold text-gray-600 w-72 text-xl text-start">
                FARMART
              </span>
              <h1 className="font-bold text-slate-800 text-lg">
                Fresh Meat Sausage. Buy 2 Get 1!
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hover:bg-white hover:shadow-2xl hover:p-2 cursor-pointer transition-all w-72 flex flex-col items-start justify-center h-72 rounded-lg">
              <img src="https://farmart.botble.com/storage/brands/4.png" />
              <span className="mt-5 font-bold text-gray-600 w-72 text-xl text-start">
                FARMART
              </span>
              <h1 className="font-bold text-slate-800 text-lg">
                Fresh Meat Sausage. Buy 2 Get 1!
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedBrands;
