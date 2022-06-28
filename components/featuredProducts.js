import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useSwiper } from "swiper/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/outline";
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

const FeaturedProducts = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="flex justify-between items-end px-10">
        <h1 className="font-bold text-3xl mt-10">Todays Deal</h1>
      </div>
      <div className="mt-10">
        <Swiper
          spaceBetween={40}
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

          <SwiperSlide
            style={{
              borderWidth: 1,
              width: 216,
              marginLeft: 40,
            }}
            className="hover:bg-white hover:shadow-xl cursor-pointer transition-all flex flex-col items-center justify-center rounded-lg"
          >
            <img
              style={{ height: 180 }}
              src="https://shop.activeitzone.com/public/uploads/all/kbKj4pi7j7a2v6YW0l2j4u3D6adKni2480oWNbqK.png"
            />
            <div className="p-4 self-start">
              <div className="flex items-center self-start">
                <h1 className="text-slate-400 line-through">400$</h1>
                <h1 className="font-bold text-xl ml-1">300$</h1>
              </div>
              <p className="text-sm text-gray-500">
                Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google
                Maps and Assistant
              </p>
              <div className="flex justify-between items-center">
                <button
                  style={{ borderWidth: 2 }}
                  className="flex items-center border-slate-200 transition-all hover:border-white hover:bg-teal-600 hover:text-white px-3 py-2 mt-2 rounded-md"
                >
                  <ShoppingCartIcon className=" w-5 h-5" />
                  <span className="ml-1">Add to Cart</span>
                </button>
                <button>
                  <HeartIcon className="w-7 h-7 text-yellow-400" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              borderWidth: 1,
              width: 216,
            }}
            className="hover:bg-white hover:shadow-xl cursor-pointer transition-all flex flex-col items-center justify-center rounded-lg"
          >
            <img
              style={{ height: 180 }}
              src="https://shop.activeitzone.com/public/uploads/all/kbKj4pi7j7a2v6YW0l2j4u3D6adKni2480oWNbqK.png"
            />
            <div className="p-4 self-start">
              <div className="flex items-center self-start">
                <h1 className="text-slate-400 line-through">400$</h1>
                <h1 className="font-bold text-xl ml-1">300$</h1>
              </div>
              <p className="text-sm text-gray-500">
                Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google
                Maps and Assistant
              </p>
              <div className="flex justify-between items-center">
                <button
                  style={{ borderWidth: 2 }}
                  className="flex items-center border-slate-200 transition-all hover:border-white hover:bg-teal-600 hover:text-white px-3 py-2 mt-2 rounded-md"
                >
                  <ShoppingCartIcon className=" w-5 h-5" />
                  <span className="ml-1">Add to Cart</span>
                </button>
                <button>
                  <HeartIcon className="w-7 h-7 text-yellow-400" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              borderWidth: 1,
              width: 216,
            }}
            className="hover:bg-white hover:shadow-xl cursor-pointer transition-all flex flex-col items-center justify-center rounded-lg"
          >
            <img
              style={{ height: 180 }}
              src="https://shop.activeitzone.com/public/uploads/all/kbKj4pi7j7a2v6YW0l2j4u3D6adKni2480oWNbqK.png"
            />
            <div className="p-4 self-start">
              <div className="flex items-center self-start">
                <h1 className="text-slate-400 line-through">400$</h1>
                <h1 className="font-bold text-xl ml-1">300$</h1>
              </div>
              <p className="text-sm text-gray-500">
                Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google
                Maps and Assistant
              </p>
              <div className="flex justify-between items-center">
                <button
                  style={{ borderWidth: 2 }}
                  className="flex items-center border-slate-200 transition-all hover:border-white hover:bg-teal-600 hover:text-white px-3 py-2 mt-2 rounded-md"
                >
                  <ShoppingCartIcon className=" w-5 h-5" />
                  <span className="ml-1">Add to Cart</span>
                </button>
                <button>
                  <HeartIcon className="w-7 h-7 text-yellow-400" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              borderWidth: 1,
              width: 216,
            }}
            className="hover:bg-white hover:shadow-xl cursor-pointer transition-all flex flex-col items-center justify-center rounded-lg"
          >
            <img
              style={{ height: 180 }}
              src="https://shop.activeitzone.com/public/uploads/all/kbKj4pi7j7a2v6YW0l2j4u3D6adKni2480oWNbqK.png"
            />
            <div className="p-4 self-start">
              <div className="flex items-center self-start">
                <h1 className="text-slate-400 line-through">400$</h1>
                <h1 className="font-bold text-xl ml-1">300$</h1>
              </div>
              <p className="text-sm text-gray-500">
                Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google
                Maps and Assistant
              </p>
              <div className="flex justify-between items-center">
                <button
                  style={{ borderWidth: 2 }}
                  className="flex items-center border-slate-200 transition-all hover:border-white hover:bg-teal-600 hover:text-white px-3 py-2 mt-2 rounded-md"
                >
                  <ShoppingCartIcon className=" w-5 h-5" />
                  <span className="ml-1">Add to Cart</span>
                </button>
                <button>
                  <HeartIcon className="w-7 h-7 text-yellow-400" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              borderWidth: 1,
              width: 216,
            }}
            className="hover:bg-white hover:shadow-xl cursor-pointer transition-all flex flex-col items-center justify-center rounded-lg"
          >
            <img
              style={{ height: 180 }}
              src="https://shop.activeitzone.com/public/uploads/all/kbKj4pi7j7a2v6YW0l2j4u3D6adKni2480oWNbqK.png"
            />
            <div className="p-4 self-start">
              <div className="flex items-center self-start">
                <h1 className="text-slate-400 line-through">400$</h1>
                <h1 className="font-bold text-xl ml-1">300$</h1>
              </div>
              <p className="text-sm text-gray-500">
                Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google
                Maps and Assistant
              </p>
              <div className="flex justify-between items-center">
                <button
                  style={{ borderWidth: 2 }}
                  className="flex items-center border-slate-200 transition-all hover:border-white hover:bg-teal-600 hover:text-white px-3 py-2 mt-2 rounded-md"
                >
                  <ShoppingCartIcon className=" w-5 h-5" />
                  <span className="ml-1">Add to Cart</span>
                </button>
                <button>
                  <HeartIcon className="w-7 h-7 text-yellow-400" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              borderWidth: 1,
              width: 216,
            }}
            className="hover:bg-white hover:shadow-xl cursor-pointer transition-all flex flex-col items-center justify-center rounded-lg"
          >
            <img
              style={{ height: 180 }}
              src="https://shop.activeitzone.com/public/uploads/all/kbKj4pi7j7a2v6YW0l2j4u3D6adKni2480oWNbqK.png"
            />
            <div className="p-4 self-start">
              <div className="flex items-center self-start">
                <h1 className="text-slate-400 line-through">400$</h1>
                <h1 className="font-bold text-xl ml-1">300$</h1>
              </div>
              <p className="text-sm text-gray-500">
                Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps | Google
                Maps and Assistant
              </p>
              <div className="flex justify-between items-center">
                <button
                  style={{ borderWidth: 2 }}
                  className="flex items-center border-slate-200 transition-all hover:border-white hover:bg-teal-600 hover:text-white px-3 py-2 mt-2 rounded-md"
                >
                  <ShoppingCartIcon className=" w-5 h-5" />
                  <span className="ml-1">Add to Cart</span>
                </button>
                <button>
                  <HeartIcon className="w-7 h-7 text-yellow-400" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedProducts;
