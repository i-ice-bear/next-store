import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Badge, Button, Card, useTheme } from "@nextui-org/react";
import { Buy, PaperNegative, PaperPlus } from "react-iconly";
export default function SidebarComponent(props) {
  const [open, setOpen] = useState(false);
  const { isDark, type } = useTheme();
  return (
    <>
      <span
        onClick={() => {
          setOpen(true);
        }}
        className="group -m-2 p-2 cursor-pointer flex items-center"
      >
        <span className="-z-3">
          <Badge color="error" content="1" shape="circle">
            <Buy size={30} />
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
          <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className={`absolute inset-0 ${isDark ? "bg-black" : "bg-rose-300"} bg-opacity-75 transition-opacity`}/>
          </Transition.Child>

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
<div className="pointer-events-auto w-screen max-w-2xl">
                  <div
                    className={`flex h-full flex-col overflow-y-scroll ${
                      isDark ? "bg-black" : "bg-white"
                    } py-6 shadow-xl`}
                  >
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h3 className="text-rose-500">Your cart</h3>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md text-rose-400 hover:text-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-800 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="p-3" aria-hidden="true">
                          <Card
                            css={{ height: "235px" }}
                            isHoverable
                            variant="bordered"
                          >
                            <div className="flex grid-cols-2">
                              <div className=" w-5/12 h-full">
                                <div className="bg-black  w-full h-full">
                                <img
                                  src="https://nextui.org/images/fruit-1.jpeg"
                                  alt="something"
                                  className="h-full object-cover"
                                  
                                  />
                                </div>
                              </div>
                              <div className="content-state w-9/12 p-6  h-full">
                                <h4>Product will goes here</h4>
                                <h5 className="font-quicksand">
                                  Color - Anything
                                </h5>
                                <h6>Size - Anything</h6>
                                <h6>Quantity - Anything</h6>
                                <div className="flex my-6">
                                  <Button auto icon={<PaperPlus />}>
                                    Add{" "}
                                  </Button>
                                  <Button auto icon={<PaperNegative />} shadow color='error' className="mx-5">
                                    Remove{" "}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </div>
                      {/* /End replace */}
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
