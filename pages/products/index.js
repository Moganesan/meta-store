import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";
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
    </div>
  );
};

export default Products;
