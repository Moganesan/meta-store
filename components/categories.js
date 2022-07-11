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

const Categories = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="flex justify-between items-end px-10">
        <h1 className="font-bold text-3xl mt-10">Popular Categories</h1>
      </div>
      <div className="mt-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1500 }}
          spaceBetween={0}
          slidesPerView={5}
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
            <div className="hover:bg-white hover:shadow-2xl cursor-pointer hover:scale-105 transition-all bg-gray-100 w-48 flex flex-col items-center justify-center h-56 rounded-lg">
              <img
                style={{ width: 100, height: 100 }}
                src="https://farmart.botble.com/storage/product-categories/1-300x300.png"
              />
              <h1 className="mt-5 font-bold text-slate-900 w-32 text-center">
                Freates and Vegitables
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" hover:bg-white hover:shadow-2xl cursor-pointer hover:scale-105 transition-all bg-gray-100 w-48 flex flex-col items-center justify-center h-56 rounded-lg">
              <img
                style={{ width: 100, height: 100 }}
                src="https://farmart.botble.com/storage/product-categories/2-300x300.png"
              />
              <h1 className="mt-5 font-bold text-slate-900 w-32 text-center">
                Breads and Sweets
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" hover:bg-white hover:shadow-2xl cursor-pointer hover:scale-105 transition-all bg-gray-100 w-48 flex flex-col items-center justify-center h-56 rounded-lg">
              <img
                style={{ width: 100, height: 100 }}
                src="https://farmart.botble.com/storage/product-categories/3-300x300.png"
              />
              <h1 className="mt-5 font-bold text-slate-900 w-32 text-center">
                Frozen Seafoods
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" hover:bg-white hover:shadow-2xl cursor-pointer hover:scale-105 transition-all bg-gray-100 w-48 flex flex-col items-center justify-center h-56 rounded-lg">
              <img
                style={{ width: 100, height: 100 }}
                src="https://farmart.botble.com/storage/product-categories/4-300x300.png"
              />
              <h1 className="mt-5 font-bold text-slate-900 w-32 text-center">
                Raw Meats
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" hover:bg-white hover:shadow-2xl cursor-pointer hover:scale-105 transition-all bg-gray-100 w-48 flex flex-col items-center justify-center h-56 rounded-lg">
              <img
                style={{ width: 100, height: 100 }}
                src="https://farmart.botble.com/storage/product-categories/5-300x300.png"
              />
              <h1 className="mt-5 font-bold text-slate-900 w-32 text-center">
                Wine & Alchohole Drinks
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" hover:bg-white hover:shadow-2xl cursor-pointer hover:scale-105 transition-all bg-gray-100 w-48 flex flex-col items-center justify-center h-56 rounded-lg">
              <img
                style={{ width: 100, height: 100 }}
                src="https://farmart.botble.com/storage/product-categories/6-300x300.png"
              />
              <h1 className="mt-5 font-bold text-slate-900 w-32 text-center">
                Tea & Coffee
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" hover:bg-white hover:shadow-2xl cursor-pointer hover:scale-105 transition-all bg-gray-100 w-48 flex flex-col items-center justify-center h-56 rounded-lg">
              <img
                style={{ width: 100, height: 100 }}
                src="https://farmart.botble.com/storage/product-categories/7-300x300.png"
              />
              <h1 className="mt-5 font-bold text-slate-900 w-32 text-center">
                Milks and Diaries
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" hover:bg-white hover:shadow-2xl cursor-pointer hover:scale-105 transition-all bg-gray-100 w-48 flex flex-col items-center justify-center h-56 rounded-lg">
              <img
                style={{ width: 100, height: 100 }}
                src="https://farmart.botble.com/storage/product-categories/8-300x300.png"
              />
              <h1 className="mt-5 font-bold text-slate-900 w-32 text-center">
                Pet Foods
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" hover:bg-white hover:shadow-2xl cursor-pointer hover:scale-105 transition-all bg-gray-100 w-48 flex flex-col items-center justify-center h-56 rounded-lg">
              <img
                style={{ width: 100, height: 100 }}
                src="https://farmart.botble.com/storage/product-categories/7-300x300.png"
              />
              <h1 className="mt-5 font-bold text-slate-900 w-32 text-center">
                Food Cupboard
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Categories;
