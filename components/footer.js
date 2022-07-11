import { PhoneIcon, HomeIcon, MailIcon } from "@heroicons/react/outline";
const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-evenly py-14 border-t-2 border-b-2">
        <div className="flex items-center justify-center">
          <div>
            <img src="https://farmart.botble.com/storage/general/icon-rocket.png" />
          </div>
          <div className="ml-5">
            <h1 className="font-bold text-slate-600">Free Shipping</h1>
            <p>For all orders above $100</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <img src="https://farmart.botble.com/storage/general/icon-reload.png" />
          </div>
          <div className="ml-5">
            <h1 className="font-bold text-slate-600">1 & 1 Returns</h1>
            <p>Cancellation after 1 day</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <img src="https://farmart.botble.com/storage/general/icon-protect.png" />
          </div>
          <div className="ml-5">
            <h1 className="font-bold text-slate-600">100% Secure Payment</h1>
            <p>Guarantee Secure Payments</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <img src="https://farmart.botble.com/storage/general/icon-support.png" />
          </div>
          <div className="ml-5">
            <h1 className="font-bold text-slate-600">24/7 Dedicated Support</h1>
            <p>Anywhere & Anytime</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <img src="https://farmart.botble.com/storage/general/icon-tag.png" />
          </div>
          <div className="ml-5">
            <h1 className="font-bold text-slate-600">Daily Offers</h1>
            <p>Discount Upto 70% OFF</p>
          </div>
        </div>
      </div>
      <div className="flex p-10">
        <div className="w-96">
          <h1 className="font-bold text-slate-700 text-lg">
            Meta Store - Your one and only foods & Grocery shop
          </h1>
          <p className="mt-6 text-slate-500">
            Reprehenderit excepteur enim commodo non incididunt laboris duis
            pariatur cupidatat ad.Veniam incididunt tempor voluptate deserunt
            ipsum tempor.
          </p>
          <div className="mt-6">
            <div className="flex items-center">
              <PhoneIcon className="w-6 h-6 text-slate-500" />
              <p className="text-xl font-bold text-slate-600 ml-2">
                +91 9677645152
              </p>
            </div>

            <div className="flex items-center mt-3">
              <HomeIcon className="w-6 h-6 text-slate-500" />
              <p className="text-sm font-bold text-slate-600 ml-2">
                Sh No 6, New Mini Market, Near Famous Book Store, Janpath
              </p>
            </div>

            <div className="flex items-center mt-3">
              <MailIcon className="w-6 h-6 text-slate-500" />
              <p className="text-sm font-bold text-slate-600 ml-2">
                Support@metaStore.com
              </p>
            </div>
          </div>
        </div>

        <div className="w-40 ml-10">
          <h1 className="font-bold text-slate-700 text-lg">Useful Links</h1>
          <ul className="grid gap-4 mt-10 text-slate-700">
            <li>Terms of use</li>
            <li>Terms and Condition</li>
            <li>Refund Policy</li>
            <li>FAQs</li>
            <li>Categories</li>
          </ul>
        </div>

        <div className="w-40 ml-10">
          <h1 className="font-bold text-slate-700 text-lg">Help Center</h1>
          <ul className="grid gap-4 mt-10 text-slate-700">
            <li>About Us</li>
            <li>Affiliate</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="w-40 ml-10">
          <h1 className="font-bold text-slate-700 text-lg">Business</h1>
          <ul className="grid gap-4 mt-10 text-slate-700">
            <li>Our Blog</li>
            <li>Cart</li>
            <li>My Account</li>
            <li>Shop</li>
          </ul>
        </div>

        <div className="w-96 ml-10">
          <h1 className="font-bold text-slate-700 text-lg">Newsletter</h1>
          <p className="mt-6 text-slate-500">
            Reprehenderit excepteur enim commodo non incididunt laboris duis
            pariatur cupidatat ad.Veniam incididunt tempor voluptate deserunt
            ipsum tempor.
          </p>
          <div className="flex items-center border-2 mt-6 rounded-md">
            <div className="ml-5">
              <MailIcon className="w-5 h-5" />
            </div>
            <input
              className="ml-5 outline-none h-full"
              placeholder="Your email address"
            />
            <button className="bg-teal-700 h-14 w-full rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 flex items-center justify-between px-10 py-11">
        <p>© 2022 Meta Store. All Rights Reserved.</p>
        <img src="https://farmart.botble.com/storage/general/footer-payments.png" />
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
