import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Users = () => {
  return (
    <>
      <Navbar/>
      <div className=" flex container mx-auto py-10">
      <div className=" w-[20%]">
        <ul className=" leading-8">
          <li>
            <Link
              to={""}
              className=" text-xs uppercase text-gray-400   font-medium"
            >
              messages
            </Link>
          </li>

          <li>
            <Link
              to={"/users/purchases"}
              className=" text-xs uppercase text-gray-400   font-medium"
            >
              purchases
            </Link>
          </li>
        </ul>

        <p className=" uppercase text-black text-xs mt-3   font-bold">
          my account
        </p>

        <ul className=" leading-8">
          <li>
            <Link
              to={"/users/my_profile"}
              className=" text-xs uppercase text-gray-400   font-medium"
            >
              Profile
            </Link>
          </li>

          <li>
            <Link
              to={"/users/address"}
              className=" text-xs uppercase text-gray-400   font-medium"
            >
              addresses
            </Link>
          </li>

          <li>
            <Link
              to={""}
              className=" text-xs uppercase text-gray-400   font-medium"
            >
              my sizes
            </Link>
          </li>

          <li>
            <Link
              to={"/users/payments"}
              className=" text-xs uppercase text-gray-400   font-medium"
            >
              PAYMENTS
            </Link>
          </li>

          {/* <li>
            <Link
              to={""}
              className=" text-sm uppercase text-gray-500   font-medium"
            >
              notifications
            </Link>
          </li> */}

          {/* <li>
            <Link
              to={""}
              className=" text-sm uppercase text-gray-500   font-medium"
            >
              devices
            </Link>
          </li> */}

          {/* <li>
            <Link
              to={""}
              className=" text-sm uppercase text-gray-500   font-medium"
            >
              help
            </Link>
          </li> */}
        </ul>
      </div>
      <div className=" w-full">
        <Outlet />
      </div>
    </div>
      <Footer/>
    </>
   
  );
};

export default Users;
