/* eslint-disable @next/next/no-img-element */
import logo from "@/assets/logo2.svg";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SiGithub, SiTiktok, SiX, SiYoutube } from "react-icons/si";
import { twMerge } from "tailwind-merge";

export const RevealBento = () => {
  return (
    <div className="w-full mx-auto max-w-5xl px-4 pt-4 pb-12 ">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-6xl grid-flow-dense grid-cols-12 gap-4"
      >
        <Header />
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-gray-700 p-6 text-white",
        className
      )}
      {...rest}
    />
  );
};

function Header() {
  return (
    <Block className="col-span-12 p-2 border-none">
      <nav className="sm:flex sm:space-x-6">
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
    </Block>
  );
}

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <span className="mb-12 text-5xl font-medium leading-tight">Hi,</span>
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      I&apos;m Achem Habib Nomaer.{" "}
      <span className="text-zinc-400">I&apos;m a Full Stack Developer</span>
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-700 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-700 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-700 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-700 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiX />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-xl md:text-3xl leading-snug">
    <p className="text-zinc-400">
      I am a Full Stack Web Developer with a passion for building dynamic and
      responsive web applications. I love working with both frontend and backend
      technologies to create seamless and engaging user experiences.
    </p>
  </Block>
);
