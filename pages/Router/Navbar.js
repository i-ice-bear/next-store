import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, Text, useTheme } from "@nextui-org/react";
import SideMenuCaret from "../components/User-utility/Sidenav";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Home", href: "/" },
    { name: "Purchase Page", href: "../data/store-page" },
    { name: "Categories", href: "../page/Category" },
    { name: "Posts", href: "../page/Community" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarComponent( props ) {
  console.log(props.cart, props.subTotal, props.clearCart, props.removeFromCart, props.addToCart, props.saveCart);
  const [open, setOpen] = useState(false);
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  function darkModeToggle(e) {
    setTheme(e.target.checked ? "dark" : "light");
    document.body.style.transition = "all 0.3s ease";
  }
  return (
    <div
      className=""
      style={{
        position: "absolute",
        display: "inherit",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div
              className={`relative max-w-xs w-full bg-${
                isDark ? "black" : "white"
              } shadow-xl pb-12 flex flex-col overflow-y-auto`}
            >
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-800 bg-transparent"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-indigo-600 border-indigo-600"
                              : " border-transparent",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="pt-10 pb-8 px-4 space-y-10"
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm"
                          >
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-transition   hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-center object-cover"
                              />
                            </div>
                            <a
                              href={item.href}
                              className="mt-6 block font-medium "
                            >
                              <span
                                className="absolute z-10 inset-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                            <p aria-hidden="true" className="mt-1">
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <h6
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className="font-medium "
                          >
                            {section.name}
                          </h6>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <span
                                  href={item.href}
                                  className="-m-2 p-2 block "
                                >
                                  {item.name}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link href={page.href}>
                      <span>
                        <span className="-m-2 p-2 block font-medium ">
                          {page.name}
                        </span>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                </div>
                <div className="flow-root">
                  <Link href={"../page/Login"}>
                    <span className="-m-2 p-2 block font-medium text-rose-500 ">
                      Create account
                    </span>
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4">
                <a href="#" className="-m-2 p-2 flex items-center">
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="w-5 h-auto block flex-shrink-0"
                  />
                  <span className="ml-3 block text-base font-medium ">CAD</span>
                  <span className="sr-only">, change currency</span>
                </a>
                <div className="dark-mode-toggle">
                  <span>
                    <Switch
                      color="error"
                      className="my-10"
                      checked={isDark}
                      onChange={darkModeToggle}
                    />
                  </span>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className=" p-2 rounded-md text-gray-600 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <span className="flex text-center align-center justify-center ">
                    <img
                      className="h-8 w-auto rounded-2xl"
                      src="/images/util/Logo.png"
                      alt=""
                    />

                    <p
                      className="mx-3 font-quicksand font-400
                    font-weighttransform-gpu"
                    >
                      Andy shoppe
                    </p>
                  </span>
                </Link>
              </div>
              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-rose-400 text-rose-600"
                                  : "border-transparent transition   hover:text-rose-500",
                                "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-rose-500">
                              <div
                                className="absolute inset-0 top-1/2 shadow"
                                aria-hidden="true"
                              />

                              <div
                                className={`relative ${
                                  isDark ? "bg-black" : "bg-white"
                                }`}
                              >
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div
                                            className={`aspect-w-1 aspect-h-1 rounded-lg hover:opacity-50 ${
                                              isDark ? "bg-black" : "bg-white"
                                            } overflow-hidden group-transition hover:opacity-50 `}
                                          >
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-center  rounded-2xl object-cover"
                                            />
                                          </div>
                                          <Link href={item.href}>
                                            <span className="mt-6 block cursor-pointer font-medium ">
                                              <span
                                                className="absolute my-3 z-10 inset-0"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </span>
                                          </Link>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <h5
                                            id={`${section.name}-heading`}
                                            className="font-large"
                                          >
                                            {section.name}
                                          </h5>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <Link href={item.href}>
                                                  <span className="transition cursor-pointer  hover:text-rose-600">
                                                    {item.name}
                                                  </span>
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link href={page.href} key={page.name}>
                      <span className="flex cursor-pointer items-center text-sm font-medium  transition    hover:text-rose-600">
                        {page.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  
                  <span
                    className="h-6 w-px cursor-pointer bg-gray-200"
                    aria-hidden="true"
                  />
                  <Link href={"../page/Login"}>
                    <span className="text-sm cursor-pointer font-medium  transition   hover:text-rose-800">
                      Create account
                    </span>
                  </Link>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <span className=" cursor-pointer transition   hover:text-rose-600 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </span>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <span
                    href="#"
                    className="p-2  transition   hover:text-rose-500"
                  >
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex lg:ml-6">
                  <span className="p-2  transition hover:text-rose-500 mb-2">
                    <span className="sr-only">Search</span>
                    <Switch
                      color="error"
                      className="my-10"
                      checked={isDark}
                      onChange={(e) =>
                        setTheme(e.target.checked ? "dark" : "light")
                      }
                    />
                  </span>
                </div>
                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <SideMenuCaret
                    isDark={isDark}
                    
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
