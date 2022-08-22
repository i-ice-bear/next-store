import React from "react";
import Link from "next/link";
import DesignerBanners from "./components/Incentives/DesignerBanners";
import { motion } from "framer-motion";
import FooterComponent from "./components/Footnote/Footer";
import ProductListComponent from "./components/Product-lists/ProductList";
import ShirtAndTees from "./components/Product-lists/Collection/ShirtAndTees";

export default function HomePage() {
  return (
    <>
      <div className="relative py-1.5 px-20">
        <br />
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-8 lg:py-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    The all new 🎇🎇🎇
                  </span>
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <h1 className="block font">Fashion from professional</h1>
                  <span className="block text-rose-600">Fashion Designers</span>
                </span>
              </h1>
              <h6 className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-sm xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua ad ad non deserunt sunt.
              </h6>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <h6 className="text-base font-medium">
                  Sign up to get notified when its ready.
                </h6>
                <form action="#" method="POST" className="mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full py-3 p-5 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-700 shadow-sm hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Notify me
                  </button>
                </form>
                <h6 className="mt-3 text-sm text-gray-400">
                  We care about the protection of your data. Read our
                  <Link href="/">
                    <span>
                      <span className="mx-1 inline-block  font-medium text-rose-600">
                        Privacy Policy
                      </span>
                    </span>
                  </Link>
                </h6>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                  <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-20 text-indigo-500"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle
                        opacity="0.9"
                        cx={42}
                        cy={42}
                        r={42}
                        fill="white"
                      />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>

        <div className="Designer-banner">
          <motion.div
            initial={{
              opacity: 0.5,
              marginBottom: "3rem",
            }}
            animate={{
              opacity: 1,
              marginBottom: 0,
            }}
            transition={{
              type: "tween",
              duration: 2,
            }}
          >
            <DesignerBanners />
          </motion.div>
        </div>
        <div className="product-list">
          <ProductListComponent />
        </div>
        <div className="shirts-and-tees">
          <ShirtAndTees />
        </div>
        <div className="footer-component">
          <motion.footer>
            <FooterComponent />
          </motion.footer>
        </div>
      </div>
    </>
  );
}
