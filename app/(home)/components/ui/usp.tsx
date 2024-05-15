import React from "react";
import { uspItemsType } from "../../types/home";
import { FaCode } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";

interface Props {}

const uspItems: uspItemsType[] = [
  {
    icon: <FaCode />,
    name: "Code Snippets",
    description:
      "Discover and copy code snippets across a wide range of programming languages",
  },

  {
    icon: <IoMdSearch />,
    name: "Powerful Search",
    description:
      "Quickly find the code snippets you need with our advanced search functionality",
  },
  {
    icon: <IoShareOutline />,
    name: "Share",
    description: "Easily share your code snippets with others and collaborate",
  },
];

function isolateChosenWords(words: string) {
  const chosenWords = ["Discover", "Quickly", "Easily"];
  return words.split(" ").filter((word) => chosenWords.includes(word));
}

function Usp(props: Props) {
  return (
    <div className=" gap-2 flex  md:grid-cols-1  grid-cols-3">
      {uspItems.map((item) => (
        <div
          key={item.name}
          className="flex flex-col cursor-default p-2 usp-item w-full  border-r border-gradient items-center gap-4"
        >
          <div className="flex text-4xl  items-center gap-2">
            {item.icon}
            <span className="text-primary">{item.name}</span>
          </div>
          <p className="text-secondary text-center">
            {isolateChosenWords(item.description).map((word, index) => (
              <span key={index} className="text-brand">
                {word}{" "}
              </span>
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
