import profileImg from "@/assets/profile1.png";
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
          className="w-full md:w-2/3 flex flex-col space-y-6 leading-relaxed text-lg text-neutral-300"
          variants={containerVariants}
        >
          {/* Paragraph #1 */}
          <motion.p variants={itemVariants}>
            Hi! I’m a full-stack developer passionate about building efficient
            and user-friendly web applications. With expertise in React.js,
            Next.js, Django, and Express.js, I’ve built diverse projects like
            education consultancy, real estate, and ecommerce platforms...
          </motion.p>

          {/* Paragraph #2 */}
          <motion.p variants={itemVariants}>
            I love turning ideas into functional, visually appealing solutions
            and exploring emerging technologies like AI and machine learning.
            Outside of coding, I enjoy playing cricket, football, working out,
            and spending time with friends. Let’s connect and create something
            amazing together!
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
