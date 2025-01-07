"use client";
import logo from "@/assets/logo.svg";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Block } from "../landing/Block";
import { Intro } from "../landing/Intro";
import { Socials } from "../landing/Socials";

export default function Landing() {
  return (
    <div>
      <HeroHighlight>
        <div className="w-full mx-auto max-w-6xl px-4 pt-4 pb-16">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{
              staggerChildren: 0.05,
            }}
          >
            <Block className="border-none p-0">
              <nav className="flex justify-between">
                <Link href="/" className="text-white font-medium text-xl">
                  <Image
                    src={logo}
                    alt="Achem Habib Nomaer Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </Link>

                <Link
                  href="/Resume-Achem Habib Nomaer.pdf"
                  passHref
                  legacyBehavior
                >
                  <a
                    target="_blank"
                    className="px-4 py-2 border border-gray-700 text-gray-300 rounded-md hover:bg-gray-800 cursor-pointer"
                  >
                    Resume
                  </a>
                </Link>
              </nav>
            </Block>

            <div className="mx-auto grid max-w-6xl grid-flow-dense grid-cols-12 gap-4 py-12">
              <Intro />
              <Socials />
              <Block className="col-span-12 text-2xl md:text-5xl leading-snug font-semibold">
                <p className="text-zinc-400 mt-4">
                  I’m a Full-Stack Web Developer creating seamless,
                  user-friendly web applications. Explore my work to see
                  innovation in action!
                </p>
              </Block>
            </div>
          </motion.div>
        </div>
      </HeroHighlight>
    </div>
  );
}
