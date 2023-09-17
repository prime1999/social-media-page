import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Components/Logo";
import { BsPersonLinesFill } from "react-icons/bs";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success(`A link as been sent to ${email}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-1/2 mx-auto">
        <div className="w-full">
          <div className="flex justify-center mt-24 mb-12">
            <Logo />
          </div>
          <h4 className="text-[100%] font-poppins font-semibold ml-8">
            Enter a valid email and we will send a link to reset your password
          </h4>
          <form onSubmit={onSubmit} className="w-full">
            <div className="relative w-11/12 mx-auto mt-12">
              <label className="font-semibold font-poppins">Email</label>
              <input
                type="email"
                className="w-full p-2 pl-6 focus:outline-0 border-b-2 border-gray"
                placeholder="Email"
                value={email}
                onChange={onChange}
              />
              <BsPersonLinesFill className="absolute top-9" />
            </div>
            <button className="bg-blue mt-4 rounded-lg text-white font-semibold p-2 w-full">
              Reset Password
            </button>
            <div className="flex justify-center font-poppins mt-16">
              <h5>
                Don't have an Account?{" "}
                <Link to="/sign-up" className="text-blue">
                  Sign Up
                </Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
