/* eslint-disable @next/next/no-img-element */

import heroImg from "@/assets/illustrations/hero3.svg";
import logo from "@/assets/logo2.svg";
import Image from "next/image";

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="">
      <Header />
      <section className="mt-12 w-full mx-auto max-w-[1400px] py-12 px-4 items-center lg:flex justify-between md:px-8">
        <div className="space-y-4 flex-1  lg:text-left">
          <p className="text-white text-lg font-medium">Hi, I&apos;m,</p>

          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            Achem Habib Nomaer
          </h1>
          <h2 className="text-white text-xl text-medium">
            I&apos;m a{" "}
            <span className="text-brand-500">full stack developer</span>
          </h2>
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
        <div className="hidden lg:block flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
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
      <nav className="i pt-5 px-4 mx-auto max-w-[1400px] sm:px-8 sm:flex sm:space-x-6">
        <Link href="/" className="text-white font-medium text-xl">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
        <ul className=" text-gray-200 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
          <li className="p-1.5 rounded-lg flex items-center border border-gray-600 bg-gray-800 justify-center  hover:border-gray-400 hover:bg-gray-600">
            <IconBrandFacebook className="w-5 h-5 text-gray-300" />
          </li>
          <li className="p-1.5 rounded-lg flex items-center border border-gray-600 bg-gray-800 justify-center  hover:border-gray-400 hover:bg-gray-600">
            <IconBrandLinkedin className="w-5 h-5 text-gray-300" />
          </li>
          <li className="p-1.5 rounded-lg flex items-center border border-gray-600 bg-gray-800 justify-center  hover:border-gray-400 hover:bg-gray-600">
            <IconBrandGithub className="w-5 h-5 text-gray-300" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
