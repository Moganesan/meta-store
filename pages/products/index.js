import { ChevronUpIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";

const Products = () => {
  const Brands = ["FoodPound", "iTea JSC", "Soda Brand", "Farmart"];

  const Tags = ["Fruits", "Vegitables", "Home", "Meat", "Milk"];

  return (
    <div>
      <h1 className="font-bold text-3xl ml-10 mt-10">Shop</h1>
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
                <input type="checkbox" id={brand} name={brand} value={brand} />
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
          <h1 className="text-xl mb-5">Tags</h1>
        </div>
      </section>
    </div>
  );
};

export default Products;
