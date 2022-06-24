import Image from "next/image";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/outline";

const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
    icon: "",
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    icon: "",
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    icon: "",
  },
];

const Header = () => {
  return (
    <>
      <nav
        style={{ borderBottomWidth: 1 }}
        className="p-5 flex items-center justify-evenly"
      >
        <div>
          <Image width={200} height={50} src={"/logo.svg"} />
        </div>
        <div
          style={{ width: 550 }}
          className="bg-gray-background rounded-sm flex h-11"
        >
          <select className="bg-transparent px-5 outline-none">
            <option>Fruits & Vegitables</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Graphs</option>
            <option>Berries</option>
          </select>
          <input
            placeholder="I'm shopping for..."
            className="outline-none ml-5 bg-transparent w-72"
          />
          <button>
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="font-bold text-xl">+91 7827897892</h1>
          <span className="text-slate-500 font-normal">Support 24/7</span>
        </div>
        <div className="flex w-32 justify-evenly">
          <button>
            <ShoppingBagIcon className="w-7 h-7" />
          </button>
          <button>
            <HeartIcon className="w-7 h-7" />
          </button>
        </div>
        <div className="text-center">
          <span className="font-thin text-slate-600 text-sm">Your Cart</span>
          <h1>$23.00</h1>
        </div>
        <div className="rounded-full overflow-hidden w-12 h-12">
          <img src={"/profile.png"} className="object-cover w-full h-full" />
        </div>
      </nav>

      <ul
        style={{ borderBottomWidth: 1 }}
        className="grid grid-flow-col gap-5 px-10 py-5 font-bold text-sm"
      >
        <li>Home</li>
        <li>Fruits & Vegitables</li>
        <li>Breads & Sweets</li>
        <li>Raw Meats</li>
        <li>Tea & Coffee</li>
        <li>Milks and Diaries</li>
        <li>Pet Foods</li>
      </ul>
    </>
  );
};

export default Header;
