import { uspItemsType } from "../../types/home";
import { bodyText, primaryText, secondaryText } from "@/app/styles/styles";
import { firaMono } from "@/lib/fonts";
import { CodeSquareIcon, Search02Icon, Share01Icon } from "@/lib/icons/icons";
import { cn } from "@/lib/utils";
import React from "react";
import { FaCode } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";

interface Props {}

const uspItems: uspItemsType[] = [
  {
    icon: <CodeSquareIcon />,
    name: "Code Snippets",
    description:
      "Discover and copy code snippets across a wide range of programming languages",
  },

  {
    icon: <Search02Icon />,
    name: "Powerful Search",
    description:
      "Quickly find the code snippets you need with our advanced search functionality",
  },
  {
    name: "Share",
    icon: <Share01Icon />,
    description: "Easily share your code snippets with others and collaborate",
  },
];

function isolateChosenWords(words: string) {
  const chosenWords = ["Discover", "Quickly", "Easily"];
  return words.split(" ").filter((word) => chosenWords.includes(word));
}

function Usp(props: Props) {
  return (
    <div className=" gap-2 flex flex-col md:flex-row ">
      {uspItems.map((item) => (
        <div
          key={item.name}
          className="flex flex-col cursor-default p-2 usp-item w-full   md:border-r md:border-t-0 border-t  border-gradient items-center md:gap-4 gap-6"
        >
          <div
            className={cn(
              primaryText,
              "flex  mt-4  items-center gap-2",
              firaMono.className
            )}
          >
            {item.icon}
            <span className="text-primary ">{item.name}</span>
          </div>
          <p className={cn(bodyText, "text-secondary text-center")}>
            {isolateChosenWords(item.description).map((word, index) => (
              <strong key={index} className="text-brand">
                {word}{" "}
              </strong>
            ))}
            {item.description
              .split(" ")
              .filter(
                (word) => !isolateChosenWords(item.description).includes(word)
              )
              .join(" ")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Usp;
