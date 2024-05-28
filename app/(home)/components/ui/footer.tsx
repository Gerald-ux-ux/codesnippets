import Link from "next/link";
import React from "react";
import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface Props {}
const footerItems = [
  { icon: <FaDiscord />, href: "https://discord.gg/tqm4eKy2" },
  { icon: <FaGithub />, href: "https://github.com/Gerald-ux-ux/code-snippets" },
  {
    icon: <FaSquareXTwitter />,
    href: "https://www.youtube.com/channel/UCAszclBzNqvwJpM4F1OdhXQ",
  },
  {
    icon: <FaYoutube />,
    href: "https://www.youtube.com/channel/UCAszclBzNqvwJpM4F1OdhXQ",
  },
];
function Footer(props: Props) {
  return (
    <div className="w-full items-center border-t mb-4 border-gradient justify-between flex py-4 ">
      <div className="w-full">
        <p className="text-secondary">Based in 🇰🇪 (Kenya) </p>
      </div>
      <ul className="animated-list   flex w-full items-center justify-end gap-10 ">
        {footerItems.map((link) => (
          <li key={link.href} className="  ">
            <Link
              target="blank"
              href={link.href}
              className=""
            >
              <span className="flex items-center justify-between hover:text-primary text-secondary no-underline ">
                {link.icon}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
