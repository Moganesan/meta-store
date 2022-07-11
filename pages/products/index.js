import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
import Nouislider from "nouislider-react";
import WNumb from "wnumb";
import "nouislider/distribute/nouislider.css";

const Products = () => {
  const Brands = ["FoodPound", "iTea JSC", "Soda Brand", "Farmart"];

  const Tags = ["Fruits", "Vegitables", "Home", "Meat", "Milk"];

  const [maxPrice, setMaxPrice] = useState(5000);

  const [priceFilter, setPriceFilter] = useState([100, 1000]);

  return (
    <div>
      <h1 className="font-bold text-3xl ml-10 mt-10">Shop</h1>
      <div className="flex">
        <div>
          <section className="p-5">
            <div className="bg-gray-100 w-72 p-5">
              <h1 className="text-xl mb-5">Product Categories</h1>
              <ul className="grid gap-5">
                <li>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className={"flex items-center"}>
                          <span>Fruits & Vegitables</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "" : "rotate-180 transform"
                            } h-5 w-5`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                          <ul className="grid gap-5">
                            <li>
                              <Disclosure>
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button className="flex items-center">
                                      <span>Fruits</span>
                                      <ChevronUpIcon
                                        className={`${
                                          open ? "" : "rotate-180 transform"
                                        } h-5 w-5`}
                                      />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                                      <ul className="grid gap-5">
                                        <li>Apples</li>
                                        <li>Bananas</li>
                                        <li>Barries</li>
                                        <li>Graphs</li>
                                        <li>Melon</li>
                                        <li>Avacados</li>
                                      </ul>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            </li>
                            <li>
                              <Disclosure>
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button className="flex items-center">
                                      <span>Vegitables</span>
                                      <ChevronUpIcon
                                        className={`${
                                          open ? "" : "rotate-180 transform"
                                        } h-5 w-5`}
                                      />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                                      <ul className="grid gap-5">
                                        <li>Potatos</li>
                                        <li>Carrots&Vegitables</li>
                                        <li>Mushrooms</li>
                                        <li>Tomatoes</li>
                                        <li>Onions, Leeks & Garlic</li>
                                        <li>Beans, Peans & Sweetcorn</li>
                                      </ul>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            </li>
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </li>

                <li>Raw Meats</li>
                <li>Pet Foods</li>
                <li>Food Cupboard</li>
              </ul>
            </div>
          </section>

          <section className="p-5">
            <div className="bg-gray-100 w-72 p-5">
              <h1 className="text-xl mb-5">Brands</h1>
              <ul className="grid gap-5">
                {Brands.map((brand) => (
                  <li>
                    <input
                      type="checkbox"
                      id={brand}
                      name={brand}
                      value={brand}
                    />
                    <label for={brand}> {brand}</label>
                    <br />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="p-5">
            <div className="bg-gray-100 w-72 p-5">
              <h1 className="text-xl mb-5">Tags</h1>
              <ul className="grid gap-5">
                {Tags.map((tag) => (
                  <li>
                    <input type="checkbox" id={tag} name={tag} value={tag} />
                    <label for={tag}> {tag}</label>
                    <br />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="p-5">
            <div className="bg-gray-100 w-72 p-5">
              <h1 className="text-xl mb-5">Filter By Price</h1>
              <Nouislider
                range={{ min: [0], max: [maxPrice] }}
                onChange={(e) => setPriceFilter([e[0], e[1]])}
                start={[priceFilter[0], priceFilter[1]]}
                connect
              />
              <span>
                ₹{priceFilter[0]} - ₹{priceFilter[1]}
              </span>
            </div>
          </section>
        </div>
        <div>
          <div className="grid gap-5 grid  grid-cols-4">
            <div
              style={{
                borderWidth: 1,
                width: 216,
              }}
              className="hover:bg-white cursor-pointer transition-all flex flex-col items-center justify-center rounded-lg"
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
            </div>

            <div
              style={{
                borderWidth: 1,
                width: 216,
              }}
              className="hover:bg-white cursor-pointer transition-all flex flex-col items-center justify-center rounded-lg"
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
            </div>
            <div
              style={{
                borderWidth: 1,
                width: 216,
              }}
              className="hover:bg-white cursor-pointer transition-all flex flex-col items-center justify-center rounded-lg"
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
            </div>

            <div
              style={{
                borderWidth: 1,
                width: 216,
              }}
              className="hover:bg-white cursor-pointer transition-all flex flex-col items-center justify-center rounded-lg"
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
            </div>

            <div
              style={{
                borderWidth: 1,
                width: 216,
              }}
              className="hover:bg-white cursor-pointer transition-all flex flex-col items-center justify-center rounded-lg"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
