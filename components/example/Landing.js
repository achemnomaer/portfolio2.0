"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
// If you want the typewriter effect:
import Typewriter from "typewriter-effect";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video Container */}
      <VideoBackground />

      {/* Dark overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated Shapes or Particles (Optional) */}
      <FloatingShapes />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="text-5xl font-extrabold leading-tight md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Innovating the Future of Web
        </motion.h1>

        {/* Dynamic subheading with Typewriter effect (optional) */}
        <motion.div
          className="mt-4 text-xl md:mt-6 md:text-2xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Typewriter
            options={{
              strings: [
                "Building immersive interfaces.",
                "Crafting smooth user experiences.",
                "Empowering scalable solutions.",
              ],
              autoStart: true,
              loop: true,
              cursor: "|",
              deleteSpeed: 30,
            }}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            size="lg"
            className="rounded-full bg-indigo-600 px-8 py-4 transition-colors hover:bg-indigo-500"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-indigo-600 text-indigo-400 transition-colors hover:bg-indigo-600 hover:text-white px-8 py-4"
          >
            Let’s Connect
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* 
  VideoBackground:
  A container that auto-plays a muted looped video. 
  Could be replaced with a static background image for performance or fallback on mobile.
*/
function VideoBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <video
        className="h-full w-full object-cover"
        src="/hero-video.mp4" /* Replace with your actual video path */
        autoPlay
        loop
        muted
        playsInline
      />
      {/*
        Alternatively, if you prefer a hosted video or YouTube, you'll need
        a different approach (iframe, etc.). 
        Or if you want a fallback image, you can nest a <img> behind or use
        the poster attribute on the <video>.
      */}
    </div>
  );
}

/* 
  FloatingShapes:
  Adds a layer of subtle floating shapes or particles. 
  You can also consider a library like TS Particles or a custom Framer Motion approach 
  to have more advanced swirl effects or 3D illusions.
*/
function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Example shape #1 */}
      <motion.div
        className="absolute top-[10%] left-[10%] h-96 w-96 rounded-full bg-indigo-700 opacity-30 blur-3xl mix-blend-screen"
        animate={{ y: [0, 50, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      {/* Example shape #2 */}
      <motion.div
        className="absolute bottom-[5%] right-[5%] h-80 w-80 rounded-full bg-pink-600 opacity-30 blur-3xl mix-blend-screen"
        animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
    </div>
  );
}
