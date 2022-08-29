import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HeartIcon, XIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";
import { Button, Badge } from "@nextui-org/react";
import { Buy, PaperNegative, PaperPlus } from "react-iconly";

export default function SideMenuCaret(props) {
  const [open, setOpen] = useState(false);
  const [countProduct, setCountProduct] = useState(0);
  const changeHandle = (e) => {
    countProduct(e.target.value);
  };

  return (
    <>
      <span
        onClick={() => {
          setOpen(true);
        }}
        className="group -m-2 p-2 cursor-pointer flex items-center"
      >
        {/* <ShoppingBagIcon
          className="flex-shrink-0 h-6 w-6 text-ros-400 group-transition   hover:text-ros-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium  group-transition   hover:text-rose-700">
          {countProduct}
        </span> */}

        <span className="-z-3">
          <Badge color="error" content={countProduct} shape="circle">
            <Buy fill="currentColor" size={30} />
          </Badge>
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </span>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={setOpen}
        >
          <div className="absolute z-10 inset-0 overflow-hidden ">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="pointer-events-auto relative w-96">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        class-roseName="rounded-md  hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>

                  <div
                    className={`h-full z-10 overflow-y-auto ${
                      props.isDark ? "bg-black" : "bg-white"
                    } p-8`}
                  >
                    <div className="teaserBanner">
                      <h3 className="text-md text-rose-600">Your cart</h3>
                    </div>
                    <div className="space-y-6 pb-16">
                      <div>
                        <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                            alt=""
                            className="object-cover h-40 w-full"
                          />
                        </div>
                        <div className="mt-4 flex items-start justify-between">
                          <div>
                            <h2 className="text-lg font-medium text-ros-900">
                              <span className="sr-only">Details for </span>
                              Product title will goes here
                            </h2>
                            <p className="text-sm font-medium text-ros-500">
                              publisher name goes here
                            </p>
                          </div>
                          <button
                            type="button"
                            className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-rose-400 text-ros-400 hover:bg-rose-800 hover:text-ros-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                          >
                            <HeartIcon className="h-6 w-6" aria-hidden="true" />
                            <span className="sr-only">Favorite</span>
                          </button>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-ros-900">
                          Information
                        </h3>
                        <dl className="mt-2">
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-ros-500">Quantity</dt>
                            <dd className="text-ros-900">{countProduct}</dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="">Address :</dt>
                            <dd className="w-40 text-end">
                              Block - Z Helwett peckard valley
                            </dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-ros-500">Last modified</dt>
                            <dd className="text-ros-900">June 8, 2020</dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-ros-500">Dimensions</dt>
                            <dd className="text-ros-900">4032 x 3024</dd>
                          </div>
                          <div className="flex justify-between py-3 text-sm font-medium">
                            <dt className="text-ros-500">Resolution</dt>
                            <dd className="text-ros-900">72 x 72</dd>
                          </div>
                        </dl>
                      </div>
                      <div>
                        <div className="flex justify-between py-3 text-sm font-medium">
                          <dt className="text-ros-500">Quantity</dt>
                          <dd className="text-ros-900">{countProduct}</dd>
                        </div>
                        <div className="flex mb-10">
                          <Button
                            auto
                            className="mx-3"
                            icon={<PaperPlus />}
                            color="success"
                            shadow
                            onChange={changeHandle}
                            onClick={() => {
                              setCountProduct(countProduct + 1);
                            }}
                          >
                            Add
                          </Button>
                          <Button
                            auto
                            color="error"
                            shadow
                            icon={<PaperNegative />}
                            onChange={changeHandle}
                            onClick={() => {
                              setCountProduct(countProduct - 1);
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                        <h3 className="font-medium text-ros-900">
                          Description
                        </h3>

                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-sm text-ros-500">
                            Description will gose here
                          </p>
                          <button
                            type="button"
                            className="-mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-ros-400 hover:bg-gray-100 hover:text-ros-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                          >
                            <PencilIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Add description</span>
                          </button>
                        </div>
                      </div>

                      <div className="flex-3">
                        <Button
                          shadow
                          color="error"
                          css={{ margin: "auto", position: "relative", top: 6 }}
                          icon={<Buy />}
                          size={"lg"}
                        >
                          Buy now{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
