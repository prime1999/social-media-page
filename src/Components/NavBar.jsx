import React from "react";
import { getAuth } from "firebase/auth";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";
import {
  AiOutlineYoutube,
  AiOutlineHome,
  AiOutlineLogout,
} from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import {
  BsPeopleFill,
  BsMessenger,
  BsFillBellFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import SearchModal from "./SearchModal";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { toast } from "react-toastify";

const NavBar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const logOut = () => {
    auth.signOut();
    toast.info("You have been logged out");
    navigate("/sign-in");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between">
        <div className="-mt-2">
          <Logo />
        </div>
        <div className="hidden relative ml-4 lg:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray rounded-xl w-[300px] h-8 p-2 focus:outline-0"
          />
          <RxMagnifyingGlass className="absolute top-1 text-2xl right-3" />
        </div>
        <SearchModal />
      </div>
      <div className="hidden md:flex items-center justify-between">
        <Tooltip label="Home">
          <span>
            <AiOutlineHome className="text-3xl hover:cursor-pointer" />
          </span>
        </Tooltip>
        <Tooltip label="Watch">
          <span>
            <AiOutlineYoutube className="text-3xl mx-8 hover:cursor-pointer" />
          </span>
        </Tooltip>
        <Tooltip label="Groups">
          <span>
            <BsPeopleFill className="text-3xl hover:cursor-pointer" />
          </span>
        </Tooltip>
      </div>
      <div className="flex justify-between items-center">
        <Tooltip label="Menu" className="">
          <span>
            <CiMenuKebab className="text-4xl bg-gray rounded-full text-black p-2 hover:bg-darkGray hover:cursor-pointer" />
          </span>
        </Tooltip>
        <Tooltip label="Messages" className="">
          <span>
            <BsMessenger className="text-4xl mx-2 bg-gray rounded-full text-black p-2 hover:bg-darkGray hover:cursor-pointer" />
          </span>
        </Tooltip>
        <Tooltip label="Notifications" className="">
          <span>
            <BsFillBellFill className="text-4xl mr-2 bg-gray rounded-full text-black p-2 hover:bg-darkGray hover:cursor-pointer" />
          </span>
        </Tooltip>
        <Popover>
          <PopoverTrigger>
            <button>
              <Tooltip label="Account" className="">
                <Avatar
                  size="md"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </Tooltip>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <div className="flex flex-col justify-center items-start text-blue">
                <Link className="flex items-center">
                  <BsFillPersonLinesFill className="mr-2" />{" "}
                  <p className="font-poppins font-bold">My Profile</p>
                </Link>
                <button className="flex items-center mt-2" onClick={logOut}>
                  {" "}
                  <AiOutlineLogout className="mr-2 font-bold" />{" "}
                  <p className="font-poppins font-bold">Log Out</p>
                </button>
              </div>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default NavBar;
