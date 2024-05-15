import React from "react";
import { uspItemsType } from "../../types/home";
import { BiCode } from "react-icons/bi";
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
      "Discover and copy code snippets across a wide range of programming languages",
  },
  {
    icon: <IoShareOutline />,
    name: "Share",
    description:
      "Discover and copy code snippets across a wide range of programming languages",
  },
];
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
          <p className="text-secondary text-center">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Usp;
