import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { Link,useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import ButtonNav from "../BottomNav";
import { IoIosCloseCircle } from "react-icons/io";
import NavLinks from "../BottomNav/NavLinks";
import Accordion from "../Accordion/Accordion";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "GM124343",
      data: "splashText2",
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };


  const storedUser = localStorage.getItem("user_ID") || undefined;

  const dispatch = useDispatch();

  const [allCategory, setAllCategory] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .post("http://34.84.41.203:4142/api/getAllSubcategories")
      .then((res) => {
        console.log(res);

        setAllCategory(res.data);
      })
      .catch((error) => {});

    axios
      .post(`http://34.84.41.203:4142/api/getSingleUser/${storedUser}`)
      .then((res) => {
        console.log(res);

        setUsers(res.data.user);
      })
      .catch((error) => {});
  }, []);

  const removeLocal = () => {
    localStorage.removeItem("user_ID");
    navigate("/");

    toast.success("user sign out successfuly!");
  };

  return (
    <>
      <header className=" bg-white border-b   z-40 sticky top-0   h-20 flex items-center   justify-between md:px-14 px-4">
        <div className="  flex gap-4">
          <h1 className=" md:text-4xl  text-2xl text-black font-semibold">
            {" "}
            GRAILED
          </h1>
          <div className="  xl:w-[500px]  relative lg:w-[350px] md:w-[400px] w-[200px]">
            <Input
              className={" border  pl-8  w-full border-black py-2"}
              placeholder={"Search"}
              Icon={
                <Button
                  label={"search"}
                  className={
                    "bg-white    border  md:block hidden py-2 border-gray-300 uppercase   text-xs"
                  }
                />
              }
            />
            <FiSearch className=" absolute top-3 left-3" />
          </div>
        </div>

        {/* desktop menu */}
        <div className={`lg:block hidden   bg-white `}>
          <ul className=" lg:flex block bg-white   gap-6 items-center">
            <li>
              <Link className=" text-xs  font-bold" to={"/sells"}>
                <Button
                  label={"SELL"}
                  className={" border border-black px-7 py-2 font-medium"}
                />
              </Link>
            </li>
            <li>
              <Link className=" text-xs  font-bold" to={"/shop"}>
                SHOP
              </Link>
            </li>
            <li>
              <Link className=" text-xs  font-bold" to={""}>
                READ
              </Link>
            </li>
            <li>
              <Link className=" text-xs  font-bold" to={"/for_you"}>
                FOR YOU
              </Link>
            </li>

            {!storedUser ? (
              <>
                <li>
                  <Button
                    label={"login"}
                    onClick={() => navigate("/login")}
                    className={"text-xs  font-bold uppercase  border py-2 w-16"}
                  />
                </li>
                <li>
                  <Button
                    label={"Sign up"}
                    onClick={() => navigate("/register")}
                    className={
                      "text-xs  bg-black text-white font-bold uppercase  border py-2"
                    }
                  />
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className=" text-xs  font-bold" to={"/favorites"}>
                    <FaHeart size={25} />
                  </Link>
                </li>
                <li>
                  <div class="group relative cursor-pointer py-2">
                    {users?.profile_image?(
 <img
 src={users?.profile_image}
 alt=""
 className=" w-8 rounded-full h-8"
/>

                    ):(
                      <img
                      src={require('../../assets/images/profile.png')}
                      alt=""
                      className=" w-8 rounded-full h-8"
                    />

                    )} 
                   
                    <div
                      class="invisible   w-36 absolute  top-12 right-0 z-50 flex  flex-col bg-white py-1  border text-gray-800 shadow-xl group-hover:visible"
                      onClick=""
                    >
                      <p className=" text-black  text-xs font-bold border-b p-2">
                        {users?.email}
                      </p>
                      <Link class="my-1 block  border-gray-100 py-1  text-black uppercase text-xs  font-semibold  md:mx-2 hover:text-[#0000FF]">
                        messages
                      </Link>

                      <Link class="my-1 block  border-gray-100 py-1  text-black uppercase text-xs font-semibold hover:text-[#0000FF] md:mx-2">
                        favorites
                      </Link>
                      <Link class="my-1 block  border-gray-100 py-1  text-black uppercase text-xs font-semibold hover:text-[#0000FF] md:mx-2">
                        purchases
                      </Link>
                      <hr />

                      <Link class="my-1 block  border-gray-100 py-1  text-black uppercase text-xs font-semibold hover:text-[#0000FF] md:mx-2">
                        sell
                      </Link>

                      <Link
                        to={"/sell/for_sale"}
                        class="my-1 block  border-gray-100 py-1  text-black uppercase text-xs font-semibold hover:text-[#0000FF] md:mx-2"
                      >
                        for sale
                      </Link>
                      <Link class="my-1 block  border-gray-100 py-1  text-black uppercase text-xs font-semibold hover:text-[#0000FF] md:mx-2">
                        sold
                      </Link>
                      <Link class="my-1 block  border-gray-100 py-1  text-black uppercase text-xs font-semibold hover:text-[#0000FF] md:mx-2">
                        default
                      </Link>

                      <Link
                        to={"/users/my_profile"}
                        class="my-1 block font-semibold  border-gray-100 py-1  text-black uppercase text-xs hover:text-[#0000FF] md:mx-2"
                      >
                        my account
                      </Link>

                      <Link
                        onClick={removeLocal}
                        class="my-1 block  border-gray-100 py-1  text-black uppercase text-xs hover:text-[#0000FF] md:mx-2"
                      >
                        sign out
                      </Link>
                    </div>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* mobile menu */}

        {isMenuOpen ? (
          <>
            <div className=" absolute w-full  h-screen bg-[rgba(0,0,0,0.3)] top-0 left-0  right-0">
              <div className=" w-[65%] h-screen overflow-y-auto bg-white">
                <div>
                  <ul className="    leading-10">
                    <li>
                      {accordions.map((accordion) => (
                        <Accordion
                          key={accordion.key}
                          title={accordion.title}
                          data={accordion.data}
                          isOpen={accordion.isOpen}
                          toggleAccordion={() => toggleAccordion(accordion.key)}
                        />
                      ))}
                    </li>
                    <NavLinks />
                    <li className="border-b p-3">
                      <Link to={""} className="   h4">
                        Designers
                      </Link>
                    </li>

                    <li className="border-b p-3">
                      <Link to={""} className="   h4">
                        Sneakers
                      </Link>
                    </li>

                    <li className="border-b p-3">
                      <Link to={""} className="   h4">
                        Sell
                      </Link>
                    </li>

                    <li className="border-b p-3">
                      <Link to={""} className="   h4">
                        For You
                      </Link>
                    </li>

                    <li className="border-b p-3">
                      <Link to={""} className="   h4">
                        Shop
                      </Link>
                    </li>

                    <li className="border-b p-3">
                      <Link to={""} className="   h4">
                        Staff Picks
                      </Link>
                    </li>

                    <li className="border-b p-3">
                      <Link to={""} className="   h4">
                        Collections
                      </Link>
                    </li>

                    <li className="border-b p-3">
                      <Link to={""} className="   h4">
                        Dry Clean Only
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul className=" p-2   leading-10">
                    <li>
                      <Link to={""} className=" uppercase">
                        help
                      </Link>
                    </li>
                    <li>
                      <Link to={""} className=" uppercase">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to={""} className=" uppercase">
                        ACCESSIBILITY
                      </Link>
                    </li>
                    <li>
                      <Link to={""} className=" uppercase">
                        TERMS
                      </Link>
                    </li>
                    <li>
                      <Link to={""} className=" uppercase">
                        PRIVACY
                      </Link>
                    </li>
                    <li>
                      <Link to={""} className=" uppercase">
                        SIGN OUT
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" absolute right-2 top-3">
                <IoIosCloseCircle
                  onClick={() => setMenuOpen(false)}
                  size={45}
                  color="white"
                />
              </div>
            </div>
          </>
        ) : null}

        <div className="lg:hidden   flex gap-3  px-2">
          <Link className=" text-xs  font-bold" to={""}>
            <FaHeart size={25} />
          </Link>

          <button
            onClick={toggleMenu}
            className="text-gray-600  focus:outline-none focus:text-gray-800"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      <ButtonNav />
    </>
  );
};

export default Navbar;
