import Link from "next/link";
import React from "react";
import { BsFacebook, BsGoogle, BsInstagram } from "react-icons/bs";
import FooterComponent from "../components/Footnote/Footer";

const LoginComponent = () => {
  const loginOptionMapping = [
    { spanText: "Sign in with facebook", icon: <BsFacebook /> },
    { spanText: "Sign in with instagram", icon: <BsInstagram /> },
    { spanText: "Sign in with google", icon: <BsGoogle /> },
  ];
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-28 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Sign in to your account
          </h2>
         
        </div>

        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm ">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-rose-600 hover:text-rose-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-rose-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 py-2 rounded-xl bg-rose-800 text-white">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {loginOptionMapping.map((item) => {
                  return (
                    <div key={item.icon}>
                      <Link
                        key={item.icon}
                        href="/"
                        className="w-full inline-flex transition-all justify-center py-2 px-4 rounded-xl shadow-sm bg-rose-600 text-sm font-medium text-white hover:bg-rose-400"
                      >
                        <div>
                          <span className="sr-only">{item.spanText}</span>
                          <div>{item.icon}</div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default LoginComponent;
