import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StarIcon, PlusIcon, MinusIcon } from "@heroicons/react/solid";
import {
  StarIcon as StarIconOutline,
  ShoppingCartIcon,
  HeartIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import CategoryProducts from "../../components/categoryProducts";
import { useSwiper } from "swiper/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Preview = ({ images, index }) => {
  const swiper = useSwiper();

  useEffect(() => {
    console.log(swiper);
  }, [swiper]);
  return (
    <div style={{ zIndex: -1 }} className="grid gap-5">
      {images.map((image, idx) => (
        <div
          // onClick={() => swiper.slideTo(idx)}
          style={{ borderWidth: 1 }}
          className={`w-20 h-20 ${
            index == idx && "border-yellow-500"
          } cursor-pointer`}
        >
          <Image width={100} height={100} src={image.image} />
        </div>
      ))}
    </div>
  );
};

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const [starCount, setStarCount] = useState(0);

  const Tags = ["Printer", "IT", "Grocery"];

  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    {
      image: "https://farmart.botble.com/storage/products/37.jpg",
    },
    {
      image: "https://farmart.botble.com/storage/products/37-1.jpg",
    },

    {
      image: "https://farmart.botble.com/storage/products/37-2.jpg",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center px-24 py-10">
        <div>
          <Preview images={images} index={imageIndex} />
        </div>
        <Swiper
          style={{ width: 200 }}
          spaceBetween={0}
          onSlideChange={(e) => setImageIndex(e.activeIndex)}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image) => (
            <SwiperSlide>
              <Image width={400} height={500} src={image.image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <h1 className="font-bold text-slate-800 text-xl">
            Dolmio Bolognese Pasta Sauce
          </h1>
          <h2>
            Brand: <Link href={"#"}>iTEA JSe</Link>
          </h2>
          <div>
            <div className="flex items-center">
              <StarIcon className="w-4 h-5 text-yellow-400" />
              <StarIcon className="w-4 h-5 text-yellow-400" />
              <StarIcon className="w-4 h-5 text-yellow-400" />
              <StarIcon className="w-4 h-5 text-yellow-400" />
              <StarIconOutline className="w-4 h-5 text-gray-400" />
              <span className="text-gray-500">12customers review</span>
            </div>
          </div>
          <h1 className="font-bold text-xl text-emerald-500 mt-5">₹1200</h1>

          <span>
            Sold By: <Link href={"#"}>GLOBAL STORE</Link>
          </span>

          <div
            style={{ borderWidth: 1 }}
            className="border-green-500 rounded-md text-center py-2 bg-green-100 mt-4"
          >
            <p>
              Availability:{" "}
              <span className="font-bold text-green-600">
                10 products available
              </span>
            </p>
          </div>

          <div className="mt-4">
            <span>Weight</span>
            <div className="grid grid-flow-col gap-5 mt-3">
              <div
                style={{ borderWidth: 1 }}
                className="w-18 h-8 flex items-center justify-center"
              >
                <span>1KG</span>
              </div>

              <div
                style={{ borderWidth: 1 }}
                className="w-18 h-8 flex items-center justify-center"
              >
                <span>2KG</span>
              </div>

              <div
                style={{ borderWidth: 1 }}
                className="w-18 h-8 flex items-center justify-center"
              >
                <span>4KG</span>
              </div>

              <div
                style={{ borderWidth: 1 }}
                className="w-18 h-8 flex items-center justify-center"
              >
                <span>5KG</span>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <h1>Quantity:</h1>
            <div className="flex items-center mt-3">
              <div
                style={{ borderWidth: 1 }}
                className="flex items-center w-20 justify-center h-12 rounded-md"
              >
                <button>
                  <MinusIcon className="w-4 h-4" />
                </button>

                <span className="ml-3">{quantity}</span>
                <button className="ml-3">
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>

              <button className="flex bg-yellow-500 h-10 px-3 rounded-sm items-center ml-4">
                <ShoppingCartIcon className="w-5 h-5" />
                <span className="ml-2">Add To Cart</span>
              </button>

              <button className="flex bg-stone-900 text-white h-10 px-3 rounded-sm items-center ml-4">
                <span className="ml-2">Buy Now</span>
              </button>
            </div>

            <div className="mt-4">
              <button className="flex items-center">
                <HeartIcon className="w-5 h-5" />
                <span>Wishlist</span>
              </button>

              <h1 className="mt-3">Tags:</h1>
              <div className="grid grid-cols-3 gap-4 text-center mt-3">
                {Tags.map((tag) => (
                  <div
                    style={{ borderWidth: 1 }}
                    className="rounded-sm bg-gray-50"
                  >
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="ml-20  self-start">
          <div className="bg-gray-100 p-3">
            <div className="flex items-center">
              <div>
                <Image
                  width={35}
                  height={35}
                  src={
                    "https://farmart.botble.com/storage/general/icon-rocket.png"
                  }
                />
              </div>
              <div className="ml-3">
                <h1 className="font-bold text-gray-500 text-xl">
                  Free Shipping
                </h1>
                <span className="text-sm">Free all orders above ₹1000</span>
              </div>
            </div>
            <hr className="mt-1 mb-1" />
            <div className="flex items-center">
              <div>
                <Image
                  width={40}
                  height={35}
                  src={
                    "https://farmart.botble.com/storage/general/icon-reload.png"
                  }
                />
              </div>
              <div className="ml-3">
                <h1 className="font-bold text-gray-500 text-xl">
                  1 & 1 Returns
                </h1>
                <span className="text-sm">Cancellation after 1 day</span>
              </div>
            </div>
            <hr className="mt-1 mb-1" />
            <div className="flex items-center">
              <div>
                <Image
                  width={35}
                  height={35}
                  src={
                    "https://farmart.botble.com/storage/general/icon-protect.png"
                  }
                />
              </div>
              <div className="ml-3">
                <h1 className="font-bold text-gray-500 text-xl">
                  Secure Payment
                </h1>
                <span className="text-sm">Guarantee secure payments</span>
              </div>
            </div>
          </div>
          <div className="mt-10 bg-gray-100 p-5">
            <h1 className="font-bold text-slate-800">Hotline Order:</h1>
            <p>Mon - Fri: 7:00AM - 18:00PM</p>
            <h1 className="font-bold text-slate-800 mt-3 text-2xl">
              (+965) 7492-4277
            </h1>
          </div>
        </div>
      </div>

      <div className="px-20">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Description
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Reviews
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <p>
                Short Hooded Coat features a straight body, large pockets with
                button flaps, ventilation air holes, and a string detail along
                the hemline. The style is completed with a drawstring hood,
                featuring Rains’ signature built-in cap. Made from waterproof,
                matte PU, this lightweight unisex rain jacket is an ode to
                nostalgia through its classic silhouette and utilitarian design
                details. - Casual unisex fit - 64% polyester, 36% polyurethane -
                Water column pressure: 4000 mm - Model is 187cm tall and wearing
                a size S / M - Unisex fit - Drawstring hood with built-in cap -
                Front placket with snap buttons - Ventilation under armpit -
                Adjustable cuffs - Double welted front pockets - Adjustable
                elastic string at hempen - Ultrasonically welded seams This is a
                unisex item, please check our clothing & footwear sizing guide
                for specific Rains jacket sizing information. RAINS comes from
                the rainy nation of Denmark at the edge of the European
                continent, close to the ocean and with prevailing westerly
                winds; all factors that contribute to an average of 121 rain
                days each year. Arising from these rainy weather conditions
                comes the attitude that a quick rain shower may be beautiful, as
                well as moody- but first and foremost requires the right outfit.
                Rains focus on the whole experience of going outside on rainy
                days, issuing an invitation to explore even in the most
                mercurial weather.
              </p>
            </Tab.Panel>
            <Tab.Panel>
              <div className="flex justify-center">
                <div style={{ borderWidth: 1 }} className="p-5 w-96 h-96">
                  <h1 className="text-4xl font-bold text-red-500">2.67</h1>
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIconOutline className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500">12customers review</span>
                  </div>
                  <hr className="mt-2 mb-2" />
                  <div>
                    <div>
                      <div>
                        <span>5 Stars</span>
                      </div>
                      <div className="w-full bg-gray-200">
                        <div
                          className="bg-yellow-500 text-xs font-medium text-yellow-100 text-center p-0.5 leading-none"
                          style={{ width: "25%" }}
                        >
                          25%
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div>
                        <span>4 Stars</span>
                      </div>
                      <div className="w-full bg-gray-200">
                        <div
                          className="bg-yellow-500 text-xs font-medium text-yellow-100 text-center p-0.5 leading-none"
                          style={{ width: "10%" }}
                        >
                          10%
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div>
                        <span>3 Stars</span>
                      </div>
                      <div className="w-full bg-gray-200">
                        <div
                          className="bg-yellow-500 text-xs font-medium text-yellow-100 text-center p-0.5 leading-none"
                          style={{ width: "15%" }}
                        >
                          15%
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div>
                        <span>2 Stars</span>
                      </div>
                      <div className="w-full bg-gray-200">
                        <div
                          className="bg-yellow-500 text-xs font-medium text-yellow-100 text-center p-0.5 leading-none"
                          style={{ width: "38%" }}
                        >
                          38%
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div>
                        <span>1 Stars</span>
                      </div>
                      <div className="w-full bg-gray-200">
                        <div
                          className="bg-yellow-500 text-xs font-medium text-yellow-100 text-center p-0.5 leading-none"
                          style={{ width: "50%" }}
                        >
                          40%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-40">
                  <h1 className="font-bold text-2xl">ADD YOUR REVIEW</h1>
                  <p>publish your review on this item.</p>
                  <p className="mt-3">Your Ratings:</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => setStarCount(1)}>
                      <StarIcon
                        id="star1"
                        onMouseLeave={() => {
                          const star1 = document.getElementById("star1");

                          if (starCount < 1)
                            star1.classList.replace(
                              "text-yellow-500",
                              "text-gray-500"
                            );
                        }}
                        onMouseOver={() => {
                          const star1 = document.getElementById("star1");

                          if (starCount < 1)
                            star1.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );
                        }}
                        className={`${
                          starCount >= 1
                            ? "w-5 h-5 text-yellow-500"
                            : "w-5 h-5 text-gray-500"
                        } `}
                      />
                    </button>
                    <button onClick={() => setStarCount(2)}>
                      <StarIcon
                        onMouseLeave={() => {
                          const star1 = document.getElementById("star1");
                          const star2 = document.getElementById("star2");

                          if (starCount < 2) {
                            if (starCount < 1)
                              star1.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );

                            if (starCount < 2)
                              star2.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );
                          }
                        }}
                        onMouseOver={() => {
                          const star1 = document.getElementById("star1");
                          const star2 = document.getElementById("star2");

                          if (starCount < 1)
                            star1.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );

                          if (starCount < 2)
                            star2.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );
                        }}
                        id="star2"
                        className={`${
                          starCount >= 2
                            ? "w-5 h-5 text-yellow-500"
                            : "w-5 h-5 text-gray-500"
                        } `}
                      />
                    </button>
                    <button onClick={() => setStarCount(3)}>
                      <StarIcon
                        onMouseLeave={() => {
                          const star1 = document.getElementById("star1");
                          const star2 = document.getElementById("star2");
                          const star3 = document.getElementById("star3");

                          if (starCount < 3) {
                            if (starCount < 1)
                              star1.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );

                            if (starCount < 2)
                              star2.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );

                            if (starCount < 3)
                              star3.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );
                          }
                        }}
                        onMouseOver={() => {
                          const star1 = document.getElementById("star1");
                          const star2 = document.getElementById("star2");
                          const star3 = document.getElementById("star3");
                          const star4 = document.getElementById("star4");
                          const star5 = document.getElementById("star5");

                          if (starCount < 1)
                            star1.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );

                          if (starCount < 2)
                            star2.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );

                          if (starCount < 3)
                            star3.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );
                        }}
                        id="star3"
                        className={`${
                          starCount >= 3
                            ? "w-5 h-5 text-yellow-500"
                            : "w-5 h-5 text-gray-500"
                        } `}
                      />
                    </button>
                    <button onClick={() => setStarCount(4)}>
                      <StarIcon
                        onMouseLeave={() => {
                          const star1 = document.getElementById("star1");
                          const star2 = document.getElementById("star2");
                          const star3 = document.getElementById("star3");
                          const star4 = document.getElementById("star4");

                          if (starCount < 4) {
                            if (starCount < 1)
                              star1.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );

                            if (starCount < 2)
                              star2.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );

                            if (starCount < 3)
                              star3.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );

                            if (starCount < 4)
                              star4.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );
                          }
                        }}
                        onMouseOver={() => {
                          const star1 = document.getElementById("star1");
                          const star2 = document.getElementById("star2");
                          const star3 = document.getElementById("star3");
                          const star4 = document.getElementById("star4");

                          if (starCount < 1)
                            star1.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );

                          if (starCount < 2)
                            star2.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );

                          if (starCount < 3)
                            star3.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );

                          if (starCount < 4)
                            star4.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );
                        }}
                        id="star4"
                        className={`${
                          starCount >= 4
                            ? "w-5 h-5 text-yellow-500"
                            : "w-5 h-5 text-gray-500"
                        } `}
                      />
                    </button>
                    <button onClick={() => setStarCount(5)}>
                      <StarIcon
                        onMouseLeave={() => {
                          const star1 = document.getElementById("star1");
                          const star2 = document.getElementById("star2");
                          const star3 = document.getElementById("star3");
                          const star4 = document.getElementById("star4");
                          const star5 = document.getElementById("star5");

                          if (starCount < 5) {
                            if (starCount < 1)
                              star1.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );

                            if (starCount < 2)
                              star2.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );

                            if (starCount < 3)
                              star3.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );

                            if (starCount < 4)
                              star4.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );

                            if (starCount < 5)
                              star5.classList.replace(
                                "text-yellow-500",
                                "text-gray-500"
                              );
                          }
                        }}
                        onMouseOver={() => {
                          const star1 = document.getElementById("star1");
                          const star2 = document.getElementById("star2");
                          const star3 = document.getElementById("star3");
                          const star4 = document.getElementById("star4");
                          const star5 = document.getElementById("star5");

                          if (starCount < 1)
                            star1.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );

                          if (starCount < 2)
                            star2.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );

                          if (starCount < 3)
                            star3.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );

                          if (starCount < 4)
                            star4.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );

                          if (starCount < 5)
                            star5.classList.replace(
                              "text-gray-500",
                              "text-yellow-500"
                            );
                        }}
                        id="star5"
                        className={`${
                          starCount >= 5
                            ? "w-5 h-5 text-yellow-500"
                            : "w-5 h-5 text-gray-500"
                        } `}
                      />
                    </button>
                  </div>
                  <p className="mt-3">Review:</p>
                  <textarea
                    style={{ borderWidth: 1 }}
                    className="w-96 h-52 outline-none p-3"
                  />

                  <div
                    style={{ borderWidth: 2 }}
                    className="p-5 border-dotted flex items-center flex-col mt-3 hover:bg-slate-50 cursor-pointer"
                  >
                    <PhotographIcon className="w-10 h-10 text-gray-300" />
                    <span className="text-sm">Upload Photos</span>
                  </div>

                  <button className="bg-yellow-500 p-3 font-bold rounded-sm mt-4">
                    Submit Review
                  </button>
                </div>
              </div>

              <div>
                <h1 className="font-bold text-2xl">Reviews (40)</h1>
              </div>

              <div className="mt-8">
                <div className="flex">
                  <div className="rounded-full w-16 h-16 overflow-hidden">
                    <Image
                      width={"100%"}
                      height={"100%"}
                      src={
                        "https://farmart.botble.com/storage/customers/3-150x150.jpg"
                      }
                    />
                  </div>
                  <div className="ml-4 w-7/12">
                    <div className="flex">
                      <h1 className="font-bold">Richard Eichmann </h1>
                      <span> - 2 Weeks ago</span>
                    </div>

                    <div className="flex mt-2">
                      <StarIcon className="w-4 h-4 text-yellow-500" />
                      <StarIcon className="w-4 h-4 text-yellow-500" />
                      <StarIcon className="w-4 h-4 text-yellow-500" />
                      <StarIcon className="w-4 h-4 text-yellow-500" />
                      <StarIcon className="w-4 h-4 text-gray-500" />
                    </div>
                    <p>
                      Sint consequat commodo sint nulla.Reprehenderit aliquip
                      est cupidatat sint labore eiusmod fugiat irure aute Lorem
                      laborum velit. Ullamco aliqua aliqua est reprehenderit ad
                      dolor consequat. Reprehenderit ex est et ut officia
                      adipisicing ad cupidatat veniam laboris sint cillum
                      pariatur. Consectetur dolore aliquip velit quis laborum
                      magna cupidatat magna et. Ea adipisicing aliqua do nisi ad
                      ea anim.
                    </p>
                  </div>
                </div>
              </div>

              <CategoryProducts category={"Related Prodcuts"} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default ProductDetails;
