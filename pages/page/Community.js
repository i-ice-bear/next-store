import React from "react";
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MdVerified } from "react-icons/md";
import { Button, Text } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import {  ChevronRightIcon, } from "@heroicons/react/solid";
import { Heart2 } from "react-iconly";

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


const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Popular", href: "#", icon: FireIcon, current: false },
  { name: "Communities", href: "#", icon: UserGroupIcon, current: false },
  { name: "Trending", href: "#", icon: TrendingUpIcon, current: false },
];

const communities = [
  { name: "Movies", href: "#" },
  { name: "Food", href: "#" },
  { name: "Sports", href: "#" },
  { name: "Animals", href: "#" },
  { name: "Science", href: "#" },
  { name: "Dinosaurs", href: "#" },
  { name: "Talents", href: "#" },
  { name: "Gaming", href: "#" },
];

const tabs = [
  { name: "From officials", href: "#", current: true },
  { name: "New Fashion ideas", href: "./components/Ideas", current: false },
  { name: "Most Liked", href: "./components/MostLiked", current: false },
];

//+ updates connector
const updates = [
  {
    id: "81614",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    href: "#",
    title: "What would you have done differently if you ran Jurassic Park?",
    body: `
      <h6 className="font-medium">Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</h6>
      <h6>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</h6>
    `,
  },
  {
    id: "81614",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Mink Down",
      imageUrl: "/images/util/card.jpg",
      href: "/",
    },
    date: "February 1 at 11:43 PM",
    datetime: "2022-8-09T11:43:00",
    href: "#",
    title:
      "We're heading towards to accomplish an innovative idea for connecting AI and Fashion designing.",
    body: `
      <h6 className="font-medium">During old days, we all know that clothes are prepared by hands which is such a very big amount of timewaste because, to connecting the various grids by thread with a very thin needle. But, now time is changed and now clothes are manufacturing by machines quickly.</h6>
      <h6>But, now we decided to do something new from others and innovative also. We're going to use Artificial intelligence and machine learning for our fashion designs;</h6>
      <h6>Just wait and watch</h6>
    `,
  },
];
const whoToFollow = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    aboutHim: "Lorem ipsum dolar sit amet colorado amet, ",
  },
  // More people...
];
const trendingPosts = [
  {
    id: 1,
    user: {
      name: "Floyd Miles",
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    body: "What books do you have on your bookshelf just to look smarter than you actually are?",
    comments: 291,
  },
  // More posts...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CommunityPageComponent() {
  const { isDark, type } = useTheme();

  return (
    <>
      <div className="min-h-full">
        <br />
        <div className="py-10 my-10">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
              <nav
                aria-label="Sidebar"
                className="sticky top-4 divide-y divide-gray-300"
              >
                <div className="pb-8 space-y-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <span
                        className={classNames(
                          item.current
                            ? "bg-rose-500 text-white transition ease-in-out duration-300 cursor-pointer"
                            : " hover:bg-rose-500 transition-all cursor-pointer",
                          "group flex items-center px-4 py-2 transition-all text-sm cursor-pointer font-medium rounded-md"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-white"
                              : "group-hover:text-rose-200",
                            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="pt-10">
                  <h4
                    className="px-3 text-xl font-semibold uppercase tracking-wider"
                    id="communities-headline"
                  >
                    My interests
                  </h4>
                  <div
                    className="mt-3 space-y-1 px-3"
                    aria-labelledby="communities-headline"
                  >
                    {communities.map((community) => (
                      <Link key={community.name} href={community.href}>
                        <ul className="list-disc">
                          <li>
                            <span className="group flex items-center px-4 py-2 text-sm font-medium  rounded-md transition duration-200 cursor-pointer hover:text-gray-50 hover:bg-rose-500">
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
            <main className="lg:col-span-9 xl:col-span-6">
              <div className="px-4 sm:px-0">
                <div className="sm:hidden">
                  <nav className="flex" aria-label="Breadcrumb">
                    <ul role="list" className="flex items-center space-x-4">
                      <li>
                        <div>
                          <Link href="/">
                            <span className=" hover:text-rose-500">
                              <HomeIcon
                                className="flex-shrink-0 cursor-pointer h-5 w-5"
                                aria-hidden="true"
                              />
                              <span className="sr-only">Home</span>
                            </span>
                          </Link>
                        </div>
                      </li>

                      {tabs.map((page) => (
                        <li key={page.name}>
                          <div className="flex items-center">
                            <ChevronRightIcon
                              className="flex-shrink-0 h-5 w-5 text-rose-400"
                              aria-hidden="true"
                            />

                            <Link href={page.href}>
                              <span
                                className="ml-4 text-sm cursor-pointer font-medium text-rose-500 hover:text-rose-700"
                                aria-current={page.current ? "page" : undefined}
                              >
                                {page.name}
                              </span>
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="hidden sm:block">
                  <nav
                    className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
                    aria-label="Tabs"
                  >
                    {tabs.map((tab, tabIdx) => (
                      <Link key={tab.name} href={tab.href}>
                        <span
                          aria-current={tab.current ? "page" : undefined}
                          className={classNames(
                            tab.current
                              ? " hover:text-white cursor-pointer bg-rose-500"
                              : " hover:text-white cursor-pointer ",
                            tabIdx === 0 ? "rounded-l-lg" : "",
                            tabIdx === tabs.length - 1
                              ? "hover:text-white rounded-r-lg"
                              : " hover:text-white",
                            "group relative min-w-0 flex-1 overflow-hidden py-4 px-6 text-sm font-medium text-center cursor-pointer transition duration-300 hover:bg-rose-500 hover:text-white focus:z-10"
                          )}
                        >
                          <span>
                            <p className="font-quicksand">{tab.name}</p>
                          </span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              tab.current ? "bg-rose-500" : "bg-transparent",
                              "absolute inset-x-0 bottom-0 h-0.5"
                            )}
                          />
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="mt-8">
                <h1 className="sr-only">Recent updates</h1>
                <ul role="list" className="space-y-4">
                  {updates.map((update) => (
                    <Card shadow variant="bordered" isHoverable>
                      <li
                        key={update.id}
                        className="px-4 py-6 sm:p-6 sm:rounded-lg"
                      >
                        <article aria-labelledby={"update-title-" + update.id}>
                          <div>
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full object-cover justify-center"
                                  src={update.author.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium ">
                                  <Link href={update.author.href}>
                                    <span className="hover:underline">
                                      {update.author.name}
                                      <span className="inline-block mx-1">
                                        <MdVerified />
                                      </span>
                                    </span>
                                  </Link>
                                </p>
                                <p className="text-sm text-rose-200">
                                  <Link href={update.href}>
                                    <span className="hover:underline">
                                      <time dateTime={update.datetime}>
                                        {update.date}
                                      </time>
                                    </span>
                                  </Link>
                                </p>
                              </div>
                              <div className="flex-shrink-0 self-center flex">
                                <Menu
                                  as="div"
                                  className="relative inline-block text-left"
                                >
                                  <div>
                                    <Menu.Button className="-m-2 p-2 rounded-full flex items-center  hover:text-rose-600 transition duration-200">
                                      <span className="sr-only">
                                        Open options
                                      </span>
                                      <DotsVerticalIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
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
                                    <Menu.Items
                                      className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-${
                                        isDark ? "rose-500" : "white"
                                      } ring-1 ring-black ring-opacity-5 focus:outline-none`}
                                    >
                                      <div className="py-1">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <Link href="/">
                                              <span
                                                className={classNames(
                                                  active
                                                    ? "bg-gray-100 "
                                                    : "text-gray-700",
                                                  "flex px-4 py-2 text-sm"
                                                )}
                                              >
                                                <StarIcon
                                                  className="mr-3 h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                                <span>Add to favorites</span>
                                              </span>
                                            </Link>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <Link href="/">
                                              <span
                                                className={classNames(
                                                  active
                                                    ? "bg-gray-100 text-gray-300"
                                                    : "text-gray-700",
                                                  "flex px-4 py-2 text-sm"
                                                )}
                                              >
                                                <CodeIcon
                                                  className="mr-3 h-5 w-5 "
                                                  aria-hidden="true"
                                                />
                                                <span>Embed</span>
                                              </span>
                                            </Link>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <Link href="/">
                                              <span
                                                className={classNames(
                                                  active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                  "flex px-4 py-2 text-sm"
                                                )}
                                              >
                                                <FlagIcon
                                                  className="mr-3 h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                                <span>Report content</span>
                                              </span>
                                            </Link>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </Menu>
                              </div>
                            </div>
                            <h2
                              id={"update-title-" + update.id}
                              className="mt-4 text-base font-medium"
                            >
                              {update.title}
                            </h2>
                          </div>
                          <div
                            className="mt-2 text-sm space-y-4"
                            dangerouslySetInnerHTML={{ __html: update.body }}
                          />
                          <div className="mt-6 flex justify-between space-x-8">
                            <div className="flex space-x-6">
                              <span className="inline-flex items-center text-sm">
                                <button
                                  type="button"
                                  className="inline-flex space-x-2 text-rose-400 hover:text-rose-500"
                                >
                                  <ThumbUpIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  <span className="font-medium">
                                    {update.likes}
                                  </span>
                                  <span className="sr-only">likes</span>
                                </button>
                              </span>
                              <span className="inline-flex items-center text-sm">
                                <button
                                  type="button"
                                  className="inline-flex space-x-2  hover:text-rose-500"
                                >
                                  <ChatAltIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  <span className="font-medium">
                                    {update.replies}
                                  </span>
                                  <span className="sr-only">replies</span>
                                </button>
                              </span>
                              <span className="inline-flex items-center text-sm">
                                <button
                                  type="button"
                                  className="inline-flex space-x-2  hover:text-rose-500"
                                >
                                  <EyeIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  <span className="font-medium ">
                                    {update.views}
                                  </span>
                                  <span className="sr-only">views</span>
                                </button>
                              </span>
                            </div>
                            <div className="flex text-sm">
                              <span className="inline-flex items-center text-sm">
                                <button
                                  type="button"
                                  className="inline-flex space-x-2 hover:text-rose-500"
                                >
                                  <ShareIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  <span className="font-medium ">Share</span>
                                </button>
                              </span>
                            </div>
                          </div>
                        </article>
                      </li>
                    </Card>
                  ))}
                </ul>
              </div>
            </main>
            <aside className="hidden xl:block xl:col-span-4">
              <div className="sticky top-4 space-y-4">
                <section aria-labelledby="who-to-follow-heading">
                  <Card isHoverable variant="bordered">
                    <Card.Body>
                      <div className="rounded-lg">
                        <div className="p-6">
                          <h2
                            id="who-to-follow-heading"
                            className="text-base font-medium"
                          >
                            Who to follow
                          </h2>
                          <div className="mt-6 flow-root">
                            <ul role="list" className="-my-4 divide-y">
                              {whoToFollow.map((user) => (
                                <li
                                  key={user.handle}
                                  className="flex items-center py-4 space-x-4"
                                >
                                  <div className="flex-shrink-2">
                                    <img
                                      className="h-8 w-8 rounded-full"
                                      src={user.imageUrl}
                                      alt=""
                                    />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium ">
                                      <Link href="/">
                                        <span href={user.href}>
                                          {user.name}
                                        </span>
                                      </Link>
                                    </p>
                                    <p className="text-sm">
                                      <Link href="/">
                                        <span
                                          href={user.href}
                                          className="cursor-pointer"
                                        >
                                          {"@" + user.handle}
                                        </span>
                                      </Link>
                                    </p>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <button
                                      type="button"
                                      className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 hover:bg-rose-300 hover:text-rose-50 text-sm font-medium transition text-rose-700"
                                    >
                                      <PlusSmIcon
                                        className="-ml-1 mr-0.5 h-5 w-5 text-rose-400 hover:text-rose-50 transition"
                                        aria-hidden="true"
                                      />
                                      <span>Follow</span>
                                    </button>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-6">
                            <Link href="/">
                              <Button
                                color="error"
                                shadow
                                icon={<Heart2 set="bold" primaryColor="white"/>}                                
                                css={{ margin: "auto", w: "100%" }}
                              >
                                Wanna Follow them ?
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </section>
                <section aria-labelledby="trending-heading">
                  <div className="rounded-lg shadow">
                    <Card isHoverable variant="bordered">
                      <div className="p-6">
                        <h2
                          id="trending-heading"
                          className="text-base font-medium"
                        >
                          Trending
                        </h2>
                        <div className="mt-6 flow-root">
                          <ul
                            role="list"
                            className="-my-4 divide-y divide-gray-200"
                          >
                            {trendingPosts.map((post) => (
                              <li key={post.id} className="flex py-4 space-x-3">
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src={post.user.imageUrl}
                                    alt={post.user.name}
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm">{post.body}</p>
                                  <div className="mt-2 flex">
                                    <span className="inline-flex items-center text-sm">
                                      <button
                                        type="button"
                                        className="inline-flex space-x-2  hover:text-rose-500"
                                      >
                                        <ChatAltIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                        <span className="font-medium">
                                          {post.comments}
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-4">
                          <Link href="/">
                            <Button
                              bordered
                              color="error"
                              shadow
                              ghost
                              css={{ margin: "auto", w: "100%" }}
                            >
                              View all
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
