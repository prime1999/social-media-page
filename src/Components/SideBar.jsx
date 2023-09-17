import React from "react";
import { getAuth } from "firebase/auth";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import {
  BsFillPersonPlusFill,
  BsFillPeopleFill,
  BsFillCalendarFill,
  BsFillBookmarkFill,
  BsFlagFill,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import avatar from "../assets/jpg/laptop 7.jpg";
import image from "../assets/jpg/background.jpg";
import phone from "../assets/jpg/phone 2.jpg";
import watch from "../assets/jpg/watch 3.jpg";
import phone2 from "../assets/jpg/phone 8.jpg";

const SideBar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const signOut = () => {
    try {
      auth.signOut();
      navigate("/sign-in");
      toast.info("user logged out");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[45%]">
      <div className="p-4  rounded-md shadow-md">
        <div className="flex items-center">
          <img src={avatar} className="w-16 h-16 rounded-full" alt="" />
          <div>
            <h1 className="text-xl font-bold text-darkBlue ml-2">
              {auth.currentUser.displayName}
            </h1>
          </div>
          {/* popover starts */}
          <Popover>
            <PopoverTrigger>
              <span className="ml-32 font-bold text-2xl hover:cursor-pointer">
                <CiMenuKebab />
              </span>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <div>
                  <div className="flex items-center">
                    <BsFillPersonPlusFill className="font-bold mr-2" />
                    <Link to="/sign-up" className="font-bold text-lg">
                      Create a new Account
                    </Link>{" "}
                  </div>
                  <br />
                  <div className="flex items-center">
                    <AiOutlineLogout className="font-bold text-lg text-red-500 mr-2" />
                    <Link onClick={signOut} className="font-bold text-md">
                      Log out of current Account
                    </Link>
                  </div>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* popover ends */}
        </div>
        <div className="flex justify-evenly items-center mt-2">
          <p className="text-md font-poppins">
            <span className="font-semibold">20</span> Following
          </p>
          <p className="text-md font-poppins">
            <span className="font-semibold">3000</span> Followers
          </p>
        </div>
      </div>
      <div className="mt-8 shadow-md rounded-md p-4 font-poppins">
        <div>
          <ul>
            <li className="mt-4 hover:ml-2">
              <Link className="flex items-cente">
                <BsFillPeopleFill className="mr-2" />
                <p className="font-bold">Communities</p>
              </Link>
            </li>
            <li className="mt-4 hover:ml-2">
              <Link className="flex items-center">
                <BsFillCalendarFill className="mr-2" />
                <p className="font-bold">Events</p>
              </Link>
            </li>
            <li className="mt-4 hover:ml-2">
              <Link className="flex items-center">
                <BsFillBookmarkFill className="mr-2" />
                <p className="font-bold">Bookmarks</p>
              </Link>
            </li>
            <li className="mt-4 hover:ml-2">
              <Link className="flex items-center">
                <BsFlagFill className="mr-2" />
                <p className="font-bold">Pages</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Blog section starts */}
      <div className="mt-8 shadow-md rounded-md p-4 font-poppins">
        <h1 className="text-xl font-bold font-poppins text-darkGray">Blogs</h1>
        <hr className="my-2" />
        <div>
          <Link>
            <div className="flex items-center mt-4">
              <div className="w-48">
                <img className="w-full" src={image} alt="" />
              </div>
              <div className="ml-2">
                <h4 className="font-semibold text-sm">
                  Top 10 places to visit in Nigeria for tourists
                </h4>
                <p className="text-sm text-darkGray">23rd May, 2021</p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="flex items-center mt-4">
              <div className="w-48">
                <img className="w-full" src={phone} alt="" />
              </div>
              <div className="ml-2">
                <h4 className="font-semibold text-sm">
                  Review on the specs of New SamSung Series
                </h4>
                <p className="text-sm text-darkGray">4th June, 2022</p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="flex items-center mt-4">
              <div className="w-48">
                <img className="w-full" src={watch} alt="" />
              </div>
              <div className="ml-2">
                <h4 className="font-semibold text-sm">
                  Smart watches are taking it to another level
                </h4>
                <p className="text-sm text-darkGray">19th August, 2022</p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="flex items-center mt-4">
              <div className="w-48">
                <img className="w-full" src={phone2} alt="" />
              </div>
              <div className="ml-2">
                <h4 className="font-semibold text-sm">
                  What makes the Samsung camera so special
                </h4>
                <p className="text-sm text-darkGray">21st Febuary, 2023</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Blog section ends */}
    </div>
  );
};

export default SideBar;
