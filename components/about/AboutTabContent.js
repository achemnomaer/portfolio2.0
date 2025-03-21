import profileImg from "@/assets/profile2.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SiFacebook, SiGithub, SiLinkedin, SiX } from "react-icons/si";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function AboutTabContent() {
  const socials = [
    {
      icon: <SiGithub className="w-6 h-6" />,
      href: "https://github.com/achemnomaer",
    },
    {
      icon: <SiLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/achem-habib-nomaer-62865b17a/",
    },
    {
      icon: <SiX className="w-5 h-5" />,
      href: "https://x.com/achemnomaer",
    },
    {
      icon: <SiFacebook className="w-5 h-5" />,
      href: "https://www.facebook.com/achem.habibnomaer",
    },
  ];

  return (
    <motion.section
      className=""
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className="flex flex-col md:flex-row gap-8">
        {/* Text Content Section */}
        <motion.div
          className="w-full md:w-2/3 flex flex-col space-y-6 leading-relaxed  text-neutral-300"
          variants={containerVariants}
        >
          {/* Paragraph #1 */}
          <motion.p variants={itemVariants}>
            Hey there! I’m a full-stack developer who loves turning ideas into
            slick, user-friendly web apps (and occasionally making my computer
            question its existence). With expertise in React.js, Next.js,
            Django, and Express.js, I’ve built apps for education platforms to
            real estate and e-commerce sites—basically, if it involves code, I’m
            in.
          </motion.p>

          {/* Paragraph #2 */}
          <motion.p variants={itemVariants}>
            When I’m not wrestling with my code, you’ll find me chasing cricket
            balls, kicking around a football, or pretending I’m the Hulk at the
            gym. And if there’s still time, I’m usually laughing it up with
            friends.
          </motion.p>

          {/* Personal Info */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold uppercase text-neutral-400 mb-1">
                Email
              </p>
              <p className="font-medium text-lg">achemnomaer@gmail.com</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold uppercase text-neutral-400 mb-1">
                Phone
              </p>
              <p className="font-medium text-lg">+8801889197863</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold uppercase text-neutral-400 mb-1">
                Location
              </p>
              <p className="font-medium text-lg">Chittagong, Bangladesh</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold uppercase text-neutral-400 mb-1">
                Socials
              </p>
              <ul className="flex items-center gap-x-5 text-lg">
                {socials.map((social, index) => (
                  <Link key={index} href={social.href} passHref legacyBehavior>
                    <a
                      target="_blank"
                      className="text-neutral-400 hover:text-brand-400 transition-colors"
                    >
                      {/* We can also animate each icon individually */}
                      <motion.span whileHover={{ scale: 1.2 }}>
                        {social.icon}
                      </motion.span>
                    </a>
                  </Link>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          className="w-full md:w-1/3"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={profileImg}
              alt="Achem Habib Nomaer"
              className="object-cover rounded-lg"
              priority={true}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default AboutTabContent;
