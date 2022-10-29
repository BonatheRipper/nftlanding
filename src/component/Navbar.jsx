import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Link } from "react-scroll";
const Logo = ({ text1, text2 }) => {
  return (
    <div className="logo text-white md:text-base text-sm pr-3">
      <span className="font-bold">{text1}</span>
      {text2}
    </div>
  );
};
const SearchInput = ({ placeholderText }) => {
  return (
    <div className="search relative">
      <BiSearch className="text-gray-500 absolute right-0 mt-2 mr-4 hover:text-gray-400" />
      <input
        placeholder={placeholderText}
        style={{ paddingTop: "4px" }}
        className="bg-black text-white h-8 py-1	inline-block align-middle  border border-gray-500  outline-none	 rounded-full  px-4 md:px-8  placeholder-gray-500 placeholder:text-xs placeholder:"
      />
    </div>
  );
};
const Navbar = ({ click, menuBtns, sideBar }) => {
  return (
    <div className="px-4 py-4 flex justify-between items-center">
      {<Logo text1={`FIRE`} text2={`fly`} />}
      <div className="nav-items flex ">
        {<SearchInput placeholderText={`Search`} />}

        <ul className="nav-btns hidden text-gray-500 md:flex justify-center items-center ml-8 ">
          {menuBtns.map((btn) => (
            <li key={btn} className="px-4 hover:text-gray-400">
              <Link
                to={btn}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {btn}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row text-gray-500 items-center justify-center">
        <FaUserAlt className=" text-xl mx-2 md:mx-4 hover:text-gray-400" />
        <AiOutlineLogout className="mx-2 hidden md:inline md:mx-4 text-xl hover:text-gray-400" />
        {sideBar && (
          <HiOutlineMenuAlt3
            onClick={click}
            className="md:hidden text-gray-300 ml-2  md:mx-4 text-xl"
          />
        )}
        {!sideBar && (
          <MdOutlineCancelPresentation
            onClick={click}
            className="md:hidden text-gray-300 ml-2  md:mx-4 text-xl"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
