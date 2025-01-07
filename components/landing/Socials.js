import Link from "next/link";
import { SiFacebook, SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Block } from "./Block";

const socialLinks = [
  {
    href: "https://github.com/achemnomaer",
    label: "GitHub",
    icon: <SiGithub />,
  },
  {
    href: "https://www.linkedin.com/in/achem-habib-nomaer-62865b17a/",
    label: "LinkedIn",
    icon: <SiLinkedin />,
  },
  {
    href: "https://www.facebook.com/achem.habibnomaer",
    label: "Facebook",
    icon: <SiFacebook />,
  },
  {
    href: "https://x.com/achemnomaer",
    label: "X (Twitter)",
    icon: <SiX />,
  },
];

export const Socials = () => (
  <>
    {socialLinks.map((social, index) => (
      <Block
        key={index}
        whileHover={{
          translateY: -10,
          scale: 1.05,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="col-span-6 bg-gray-700 md:col-span-3"
      >
        <Link href={social.href} passHref legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${social.label}`}
            className="grid h-full place-content-center text-3xl text-white"
          >
            {social.icon}
          </a>
        </Link>
      </Block>
    ))}
  </>
);
