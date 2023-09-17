import React, { useState } from "react";
import SignIcon from "../assets/jpg/signIcon.png";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { AiFillEye, AiFillEyeInvisible, AiFillLock } from "react-icons/ai";
import {
  BsPersonLinesFill,
  BsFillPersonFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { toast } from "react-toastify";
import Logo from "../Components/Logo";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const auth = getAuth();
  const navigate = useNavigate();
  const { name, phone, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredentials.user;
      updateProfile(auth.currentUser, {
        displayName: name,
        phoneNumber: phone,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timeStamp === serverTimestamp;

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("DevUp account created");
      navigate("/");
    } catch (error) {
      toast.error("Wrong credentials");
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
            <h1 className="font-lato font-bold text-3xl">Sign Up</h1>
            <form onSubmit={onSubmit} className="w-full mt-8">
              <div className="relative mt-12">
                <input
                  type="text"
                  className="w-full p-2 pl-6 focus:outline-0"
                  placeholder="User Name"
                  id="name"
                  value={name}
                  onChange={onChange}
                />
                <BsFillPersonFill className="absolute top-3" />
              </div>
              <div className="relative mt-12">
                <input
                  type="number"
                  className="w-full p-2 pl-6 focus:outline-0"
                  placeholder="Telphone"
                  id="phone"
                  value={phone}
                  onChange={onChange}
                />
                <BsFillTelephoneFill className="absolute top-3" />
              </div>
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
                Sign Up
              </button>
            </form>
            <h3 className="text-lg mt-4 font-semibold">
              Already have an Account?
              <br />
              <Link className="text-blue font-bold text-lg" to="/">
                Sign-In
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
