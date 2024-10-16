import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import * as React from "react";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  const radius = 100; // adjust this to increase the radius of the hover effect
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${
              visible ? radius + "px" : "0px"
            } circle at ${mouseX}px ${mouseY}px,
            var(--blue-500),
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/textarea"
    >
      <textarea
        className={cn(
          `flex min-h-[80px] w-full rounded-md border-none bg-zinc-800 text-white shadow-input px-3 py-2 text-sm placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600 
          disabled:cursor-not-allowed disabled:opacity-50
          shadow-[0px_0px_1px_1px_var(--neutral-700)]
          group-hover/textarea:shadow-none transition duration-400`,
          className
        )}
        ref={ref}
        {...props}
      />
    </motion.div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
