import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownComponent(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-2xl px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-rose-500">
          Products
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="origin-top-right p-2 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="../../page/Bracelets">
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-rose-400 rounded-2xl hover:text-white text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Bracelet
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="../../page/Hoodies">
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-rose-400 rounded-2xl hover:text-white text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Hoodies
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="../../page/Mugs">
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-rose-400 rounded-2xl hover:text-white text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Mugs
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="../../page/Shirts">
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-rose-400 rounded-2xl hover:text-white text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Shirts
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
