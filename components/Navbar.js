"use client";

import {
  IconHome,
  IconMessageUser,
  IconTerminal2,
  IconUser,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  let mouseX = useMotionValue(Infinity);

  const navItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-gray-300" />,
      href: "home",
    },

    {
      title: "About",
      icon: <IconUser className="h-full w-full text-gray-300" />,
      href: "about",
    },
    {
      title: "Projects",
      icon: <IconTerminal2 className="h-full w-full text-gray-300" />,
      href: "projects",
    },

    {
      title: "Contact",
      icon: <IconMessageUser className="h-full w-full text-gray-300" />,
      href: "contact",
    },
  ];

  return (
    <div className="flex items-center justify-center  w-full fixed bottom-5 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "mx-auto flex h-16 gap-4 items-end  rounded-2xl bg-neutral-900 px-4 pb-3"
        )}
      >
        {navItems.map((item) => (
          <IconContainer mouseX={mouseX} key={item.title} {...item} />
        ))}
      </motion.div>
    </div>
  );
}

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <ScrollLink
      to={href}
      smooth={true}
      duration={500}
      className="cursor-pointer"
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-3 py-1 whitespace-pre rounded-md bg-gray-950 border border-neutral-900 text-white   absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-sm"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </ScrollLink>
  );
}
