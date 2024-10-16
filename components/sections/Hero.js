/* eslint-disable @next/next/no-img-element */

import heroImg from "@/assets/illustrations/hero2.svg";
import Image from "next/image";

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Hero() {
  return (
    <div className="">
      <Header />
      <section className="mt-24 w-full mx-auto max-w-screen-[1400px] pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            One page Template for
            <span className="text-indigo-400"> Digital agency</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Get started
            </a>
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
            >
              Try it out
            </a>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <Image
            src={heroImg}
            alt="hero illustrations"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
          />
        </div>
      </section>
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav className="i pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
        <a href="javascript:void(0)">
          <img
            src="https://www.floatui.com/images/logo.svg"
            width={120}
            height={50}
            alt="Float UI logo"
          />
        </a>
        <ul className=" text-gray-200 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
          <li className="p-2 rounded-lg flex items-center border border-gray-600 bg-gray-800 justify-center  hover:border-gray-400 hover:bg-gray-600">
            <IconBrandFacebook className="w-6 h-6" />
          </li>
          <li className="p-2 rounded-lg flex items-center border border-gray-600 bg-gray-800 justify-center  hover:border-gray-400 hover:bg-gray-600">
            <IconBrandLinkedin className="w-6 h-6" />
          </li>
          <li className="p-2 rounded-lg flex items-center border border-gray-600 bg-gray-800 justify-center  hover:border-gray-400 hover:bg-gray-600">
            <IconBrandGithub className="w-6 h-6" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
