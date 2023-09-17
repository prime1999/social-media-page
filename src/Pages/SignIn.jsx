import React, { useState } from "react";
import SignIcon from "../assets/jpg/signIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { AiFillEye, AiFillEyeInvisible, AiFillLock } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import Logo from "../Components/Logo";
import { toast } from "react-toastify";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        toast.success("Welcome back");
        navigate("/");
      }
    } catch (error) {
      toast.error("Wrong user credentials");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center signInPage">
        <div className="flex flex-col justify-between p-8 mx-auto my-auto bg-white w-10/12 h-10/12 rounded-lg lg:flex-row signInPageDiv">
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="flex justify-center">
              <Logo />
            </div>
            <img src={SignIcon} alt="" />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="font-lato font-bold text-3xl">Sign In</h1>
            <form onSubmit={onSubmit} className="w-full mt-8">
              <div className="relative mt-12">
                <input
                  type="email"
                  className="w-full p-2 pl-6 focus:outline-0"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
                <BsPersonLinesFill className="absolute top-3" />
              </div>
              <div className="relative mt-12">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 pl-6  focus:outline-0"
                  placeholder="password"
                  id="password"
                  value={password}
                  onChange={onChange}
                />
                <AiFillLock className="absolute top-4" />
                {showPassword ? (
                  <AiFillEyeInvisible
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    className="absolute top-4 right-0 hover:cursor-pointer"
                  />
                ) : (
                  <AiFillEye
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    className="absolute top-4 right-0 hover:cursor-pointer"
                  />
                )}
              </div>
              <button className="bg-blue mt-4 rounded-lg text-white font-semibold p-2 w-full">
                Sign In
              </button>
            </form>
            <Link
              to="/forgot-password"
              className="flex justify-end font-bold text-darkBlue mt-4 hover:cursor-pointer"
            >
              Forgot-Password
            </Link>
            <h3 className="text-lg font-semibold">
              Don't have an Account?
              <br />
              <Link className="text-blue font-bold text-lg" to="/sign-up">
                Sign-Up
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
