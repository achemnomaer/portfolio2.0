import { FiArrowRight } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { Block } from "./Block";

export const Intro = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    {/* Name and Designation */}
    <p className="text-2xl text-gray-300 leading-snug">
      Hi, I’m <span className="text-white font-bold">Achem Habib Nomaer</span>.
    </p>
    <h2 className="mt-4 text-3xl text-gray-300 leading-snug">
      A <span className="text-brand-500 font-bold">Full Stack Developer</span>{" "}
      building innovative digital solutions.
    </h2>

    {/* Animated Gradient Underline */}
    <div className="mt-4">
      <div className="w-24 h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400 animate-pulse"></div>
    </div>

    <div className="flex gap-4 mt-8">
      <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        className="px-4 py-2 border border-gray-700 text-gray-300 rounded-md hover:bg-gray-800 cursor-pointer"
      >
        View Projects
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        className="flex items-center gap-1 text-brand-400 hover:underline cursor-pointer"
      >
        Contact me <FiArrowRight />
      </ScrollLink>
    </div>
  </Block>
);
