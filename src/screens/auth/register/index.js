import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
// import { auth, provider } from "../../../utils/config";
// import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { Base_url } from "../../../utils/Base_url";
import { useDispatch } from "react-redux";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
const Register = () => {
  const [withEmail, setWithEmail] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState();
  // const handleClick = () => {
  //   signInWithPopup(auth, provider).then((data) => {
  //     setValue(data.user);

  //     localStorage.setItem("email", data.user);
  //   });
  // };
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
        type: "user",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`${Base_url}/register`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          let data = JSON.parse(result);
          console.log("resposne from signup-----", data);

          if (data.success === true) {
            toast.success(data.message);

            navigate("/login");
          } else {
            toast.error(data.message);
          }
        })
        .catch((error) => {});
    }
  };

  return (
    <>
      <div>
        <Navbar />
        {withEmail === false ? (
          <>
            <div className=" rounded-lg max-w-md mx-auto my-8 shadow-xl text-center">
              <div className=" py-10 px-8">
                <h1 className="h2  font-medium">Create an Account</h1>
                <p className=" pt-4  pb-8 text-left">
                  By creating an account on Grailed you'll be able to buy, sell,
                  comment, and more.
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
                  label={"create account with email"}
                  className={
                    " uppercase  mx-auto w-full text-sm  bg-black  text-white py-3"
                  }
                />

                <div>
                  <p className=" text-left mt-3">
                    Already have an accouunt?{" "}
                    <Link to={"/login"} className=" border-b">
                      Log in
                    </Link>
                  </p>
                  <p className=" text-sm mt-7">
                    By creating an account, I accept Grailed's{" "}
                    <span className=" text-black font-semibold">
                      Terms of Service.
                    </span>{" "}
                    For Grailed's Privacy Policy,{" "}
                    <span className="text-black font-semibold">
                      click here.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="  text-center shadow-xl rounded-lg max-w-md my-8 mx-auto">
              <div className=" py-10 px-8">
                <h1 className="h2  font-medium">Create an Account</h1>
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
                    label={"sign up"}
                    type={"submit"}
                    className={
                      " uppercase border w-full py-2 mt-5  text-white text-sm bg-black"
                    }
                  />
                </form>
                <div>
                  <p className=" text-left mt-3">
                    Sign up for email to access sales, exclusive drops & more
                    from Grailed  <Link to={"/login"} className=" border-b">
                      Log in
                    </Link>
                    
                  </p>
                  <p className=" text-sm mt-7">
                    By creating an account, I accept Grailed's{" "}
                    <span className=" text-black font-semibold">
                      Terms of Service.
                    </span>{" "}
                    For Grailed's Privacy Policy,{" "}
                    <span className="text-black font-semibold">
                      click here.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Register;
