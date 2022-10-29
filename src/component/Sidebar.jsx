import React from "react";
import { Link } from "react-scroll";

const Sidebar = ({ sideBar, menuBtns }) => {
  return (
    <div
      className={`absolute z-30 ${
        sideBar ? "-left-full" : "left-0"
      }  h-screen bg-black py-8 text-gray-500 md:-left-full flex flex-col justify-start  items-start px-6 w-6/12 md:w-3/12`}
    >
      {menuBtns.map((btn) => (
        <ul key={btn}>
          <li className="py-2 hover:text-gray-400">
            {" "}
            <Link to={btn} spy={true} smooth={true} offset={50} duration={500}>
              {btn}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Sidebar;
