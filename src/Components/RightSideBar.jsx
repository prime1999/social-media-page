import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RightSideBar = () => {
  return (
    <div>
      <div className="p-4">
        {/* <Link>
          <div className="shadow-sm rounded-md p-4">
            <h1 className="font-poppins text-lg font-semibold mb-4">
              Complete your Profile
            </h1>
            <div className="flex justify-center">
              <CircularProgress value={40} color="blue.300" size="100px">
                <CircularProgressLabel>
                  <p className="font-poppins font-semibold text-darkBlue">
                    40%
                  </p>
                </CircularProgressLabel>
              </CircularProgress>
            </div>
          </div>
        </Link> */}
        <Link className="mt-8">
          <div className="shadow-sm rounded-md p-4">
            <h1 className="font-poppins text-lg font-semibold mb-4">
              Latest Updates
            </h1>
            <div>
              <p className="mb-2 text-darkGray font-lato">
                Technology. <span>Trending</span>
              </p>
              <div className="flex items-center">
                <Avatar
                  className="avatar"
                  size="md"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <div>
                  <h3 className="font-poppins text-sm font-semibold">
                    Eminence at new heights
                  </h3>
                  <p className="font-lato text-darkGray mt-2">2500 tweets</p>
                </div>
              </div>
            </div>
            <div className="my-4">
              <p className="mb-2 text-darkGray font-lato">
                Sports. <span>Trending</span>
              </p>
              <div className="flex items-center">
                <Avatar
                  className="avatar"
                  size="md"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <div>
                  <h3 className="font-poppins text-sm font-semibold">
                    Alex the elite division player
                  </h3>
                  <p className="font-lato text-darkGray">3000 tweets</p>
                </div>
              </div>
            </div>
            <div className="my-4">
              <p className="mb-2 text-darkGray font-lato">
                Sports. <span>Trending</span>
              </p>
              <div className="flex items-center">
                <Avatar
                  className="avatar"
                  size="md"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <div>
                  <h3 className="font-poppins text-sm font-semibold">
                    Alex the elite division player
                  </h3>
                  <p className="font-lato text-darkGray">3000 tweets</p>
                </div>
              </div>
            </div>
            <div className="my-4">
              <p className="mb-2 text-darkGray font-lato">
                Sports. <span>Trending</span>
              </p>
              <div className="flex items-center">
                <Avatar
                  className="avatar"
                  size="md"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <div>
                  <h3 className="font-poppins text-sm font-semibold">
                    Alex the elite division player
                  </h3>
                  <p className="font-lato text-darkGray">3000 tweets</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* people to folllow starts*/}
        <div className="mt-8 shadow-sm rounded-md p-8 font-poppins">
          <div>
            <h1 className="text-xl font-semibold font-poppins text-darkGray">
              People to follow
            </h1>
            <hr className="my-4" />
          </div>
          <div className="flex justify-center">
            <Avatar
              className="avatar"
              size="md"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />

            <Avatar
              className="avatar"
              size="md"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
            <Avatar
              className="avatar"
              size="md"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
            <Avatar
              className="avatar"
              size="md"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
          </div>
          <div className="flex justify-center mt-4">
            <Avatar
              className="avatar"
              size="md"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />

            <Avatar
              className="avatar"
              size="md"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
            <Avatar
              className="avatar"
              size="md"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
            <Avatar
              className="avatar"
              size="md"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
          </div>
        </div>
        {/* people to folllow ends*/}
      </div>
    </div>
  );
};

export default RightSideBar;
