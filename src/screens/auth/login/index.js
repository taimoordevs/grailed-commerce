import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { Base_url } from "../../../utils/Base_url";
import { useDispatch } from "react-redux";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
const Login = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const [withEmail, setWithEmail] = useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState();
 
  console.log(value);
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  const SubmitHandler = async (values) => {
    if (values.email.value.length === 0) {
      toast.error("Please enter your email Address!");
    } else if (values.password.value.length === 0) {
      toast.error("Please enter your password!");
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        email: values.email.value,
        password: values.password.value,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`${Base_url}/login`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          let data = JSON.parse(result);
          console.log("resposne from signup-----", data);

          var raw = JSON.stringify({
            storeName: data?.data?.email,
            storeDescription: "Description of my store",
            storeImage: "",
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          fetch(`${Base_url}/createStore/${data?.data?._id}`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
              console.log(result);
              let data = JSON.parse(result);
              console.log("resposne from signup-----", data);
              localStorage.setItem("userStore_ID", data?.store?._id);
              
            })
            .catch((error) => console.log("error", error));

          if (data.success === true) {
            localStorage.setItem("user_ID", data?.data?._id);
            toast.success(data.message);
            // dispatch(
            //   addUser({
            //     // type:LOGIN.success,
            //     payload: data.data,
            //   })
            // );
            navigate("/");
            setIsModalOpen(false);
          } else {
            toast.error(data.message);
          }
        })
        .catch((error) => {});
    }
  };

  return (
    <div>
      <Navbar />
      {withEmail === false ? (
        <>
          <div className=" rounded-lg max-w-md mx-auto my-8 shadow-xl text-center">
            <div className=" py-10 px-8">
              <h1 className="h2  font-medium  text-left">Log in</h1>
              <p className=" pt-4  pb-8 text-left">
                Log in to your Grailed account to buy, sell, comment, and more.
              </p>

              <Button
                Icons={<FaFacebookSquare size={20} className=" mr-2" />}
                label={"Continue with Facebook"}
                className={
                  "   mx-auto w-full text-md  bg-[#3B5998]  text-white py-2"
                }
              />
              <Button
                Icons={<FaApple size={20} className=" mr-2" />}
                label={"Continue with Apple"}
                className={
                  "   my-3 mx-auto w-full text-md   bg-black  text-white py-2"
                }
              />

              <Button
                Icons={<FcGoogle size={20} className="mr-2" />}
                label={"Continue with Google"}
                className={
                  " border    rounded-sm mx-auto w-full text-md    text-gray-400 py-2"
                }
              />
              <hr className=" my-5" />
              <Button
                onClick={() => setWithEmail(true)}
                label={"Log in with email"}
                className={
                  " uppercase  mx-auto w-full text-sm  bg-black  text-white py-3"
                }
              />

              <div>
                <p className=" text-left mt-3">
                  Don't have an account?{" "}
                  <Link to={"/register"} className=" border-b">
                    Sign Up
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="rounded-lg max-w-md mx-auto my-8 shadow-xl text-center">
            <div className=" py-10 pb-12 px-8">
              <h1 className="h2 text-left  font-medium">Log in</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  SubmitHandler(e.target);
                }}
              >
                <div className=" text-left mt-5">
                  <label className=" text-left font-semibold mb-3">
                    Email Address
                  </label>
                  <Input
                    name={"email"}
                    placeholder={""}
                    className={"border w-full rounded-sm py-2"}
                  />
                </div>

                <div className=" text-left mt-5">
                  <label className=" text-left font-semibold mb-3">
                    Password
                  </label>
                  <Input
                    name={"password"}
                    placeholder={""}
                    className={"border w-full rounded-sm py-2"}
                  />
                </div>

                <Button
                  label={"Log in"}
                  type={"submit"}
                  className={
                    " uppercase border w-full py-2 mt-5  text-white text-sm bg-black"
                  }
                />
              </form>
              <div className=" text-left pt-3">
                <Link className=" text-sm border-b border-black">
                  {" "}
                  Forget your password?{" "}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Login;
