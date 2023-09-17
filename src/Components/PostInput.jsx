import { useState } from "react";
import { Avatar } from "@chakra-ui/react";
import { GrGallery } from "react-icons/gr";

const PostInput = () => {
  const [isdisabled, setIsDisabled] = useState(true);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    if (value !== "") {
      setIsDisabled(false);
    } else if (value == "") {
      setIsDisabled(true);
    }
  };

  return (
    <>
      <div className="flex items-center mb-8">
        <div>
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        </div>
        <div className="flex flex-col item-start justify-start w-full ml-4 postInputDiv">
          <input
            type="text"
            placeholder="What's happening?"
            value={value}
            onChange={onChange}
            className="w-11/12 py-2 px-2 font-poppins focus:outline-0 focus:border-b"
          />
          <div className="flex justify-between items-center mt-4">
            <div>
              <label htmlFor="fileInput">
                <GrGallery className="text-lg hover:cursor-pointer" />
              </label>
              <input type="file" id="fileInput" className="hidden" />
            </div>
            <button
              disabled={isdisabled ? true : false}
              className={`bg-${isdisabled ? "lightBlue" : "blue"} text-${
                isdisabled ? "black" : "white"
              } font-poppins rounded-3xl py-2 px-4 font-semibold`}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostInput;
