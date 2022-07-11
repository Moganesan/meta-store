import Image from "next/image";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import {
  ShoppingBagIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

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
  const { loading, auth } = useSelector((state) => state.auth);

  const { image, name } = useSelector((state) => state.auth.data);

  const router = useRouter();

  const [profile, setProfile] = useState("");

  const fetchProfile = async () => {
    const url = await fetch(
      `https://avatars.dicebear.com/api/human/${name}.svg`
    ).then((res) => res.url);
    image = url;

    setProfile(url);
  };

  useEffect(() => {
    if (!image) {
      fetchProfile();
    }
  }, [image]);

  return (
    <>
      <nav
        style={{ borderBottomWidth: 1 }}
        className="p-5 flex items-center justify-evenly"
      >
        <Link href={"/"}>
          <Image width={200} height={50} src={"/logo.svg"} />
        </Link>
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

        {loading ? (
          <>
            <div className="bg-gray-200 animate-pulse w-28 h-8"></div>

            <div className="w-10 h-10 rounded-full animate-pulse bg-gray-200"></div>
          </>
        ) : auth ? (
          <>
            {" "}
            <div className="text-center">
              <span className="text-slate-700 text-sm font-bold">{name}</span>
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button>
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    <img
                      src={image ? image : profile}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <UserIcon className="w-6 h-6 mr-2" />
                          Your Account
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <ShoppingBagIcon className="w-6 h-6 mr-2" /> Your
                          Orders
                        </button>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <HeartIcon className="w-6 h-6 mr-2" /> Your Wishlist
                        </button>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() =>
                            router.push("/api/customer/auth/logout")
                          }
                          className={`${
                            active ? "bg-red-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <LogoutIcon className="w-6 h-6 mr-2" />
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        ) : (
          <Link href={"/login"}>
            <button className="font-bold bg-teal-500 text-white px-7 py-2 rounded-sm">
              Login
            </button>
          </Link>
        )}
      </nav>

      <ul
        style={{ borderBottomWidth: 1 }}
        className="grid grid-flow-col gap-5 px-10 py-5 text-sm"
      >
        <li>Home</li>
        <li>All Categories</li>
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
