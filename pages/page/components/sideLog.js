import React from "react";
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  MdFastfood,
  MdMovie,
  MdOutlineFoodBank,
  MdSports,
  MdVerified,
} from "react-icons/md";
import { Button, Text, Tooltip } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { ChevronRightIcon, ColorSwatchIcon } from "@heroicons/react/solid";
import { ArrowRight, Camera, Heart2 } from "react-iconly";
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusSmIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from "@heroicons/react/solid";
import {
  FireIcon,
  HomeIcon,
  TrendingUpIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Aos from "aos";

const navigation = [
  { name: "Home", href: "./", icon: HomeIcon, current: true },
  {
    name: "Popular",
    href: "./pageNavigations/popular",
    icon: FireIcon,
    current: false,
  },
  { name: "Communities", href: "#", icon: UserGroupIcon, current: false },
  { name: "Trending", href: "#", icon: TrendingUpIcon, current: false },
  { name: "Fashion Ideas", href: "#", icon: ColorSwatchIcon, current: false },
];

const communities = [
  { name: "Movies", href: "#", icon: <MdMovie /> },
  { name: "Food", href: "#", icon: <MdFastfood /> },
  { name: "Sports", href: "#", icon: <MdSports /> },
];

const SideLog = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="pb-8 space-y-4">
        <br />
        <div className="py-10 my-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-4 lg:grid lg:grid-cols-1 lg:gap-4">
          <div className="mt-10">
            <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
              <nav
                aria-label="Sidebar"
                className="sticky top-4 divide-y w-40 divide-rose-500"
              >
                <div className="pb-8 space-y-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <span
                        className={classNames(
                          item.current
                            ? "bg-rose-500 text-white transition ease-in-out duration-300 cursor-pointer"
                            : " hover:bg-rose-500 transition-all cursor-pointer",
                          "group flex items-center px-4 py-2 transition-all text-sm cursor-pointer font-medium rounded-xl"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-white"
                              : "group-hover:text-white text-rose-600",
                            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="pt-8">
                  <h4
                    className="px-1 text-xl font-semibold uppercase tracking-wider"
                    id="communities-headline"
                  >
                    My interests
                  </h4>
                  <div
                    className="mt-2"
                    aria-labelledby="communities-headline"
                  >
                    {communities.map((community) => (
                      <Link key={community.name} href={community.href}>
                        <ul className="">
                          <li>
                            <span className="group flex items-center px-2 py-2 text-sm font-medium  rounded-md transition duration-200 cursor-pointer hover:text-gray-50 hover:bg-rose-500">
                              <ArrowRight
                                style={{
                                  display: "flex",
                                  marginRight: 6,
                                }}
                              />
                              <span className="float-right flex mx-1 bg-rose-500 p-1 rounded-xl">
                                {community.icon}
                              </span>
                              <span className="truncate">{community.name}</span>
                            </span>
                          </li>
                        </ul>
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideLog;
