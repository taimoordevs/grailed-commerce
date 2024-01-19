import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" h-20 container mx-auto md:flex block  justify-between items-center">
      {/* left side  */}

      <div>
        <ul className=" flex flex-wrap items-center">
          <li className="p-4">
            <Link className=" text-xs  font-bold" to={""}>
              ABOUT
            </Link>
          </li>
          <li className="p-4">
            <Link className=" text-xs  font-bold" to={""}>
              HELP & FAQ
            </Link>
          </li>
          <li className="p-4">
            <Link className=" text-xs  font-bold" to={""}>
              TERMS
            </Link>
          </li>
          <li className="p-4">
            <Link className=" text-xs  font-bold" to={""}>
              PRIVACY
            </Link>
          </li>
          <li className="p-4">
            <Link className=" text-xs  font-bold" to={""}>
              TRUST
            </Link>
          </li>
          <li className="p-4">
            <Link className=" text-xs  font-bold" to={"/accessibility"}>
              ACCESSIBILITY
            </Link>
          </li>
          <li className="p-4">
            <Link className=" text-xs  font-bold" to={"/contact_us"}>
              CONTACT
            </Link>
          </li>
          <li className="p-4">
            <Link className=" text-xs  font-bold" to={""}>
              JOBS
            </Link>
          </li>
          <li className="p-4">
            <Link className=" text-xs  font-bold" to={""}>
              IOS APP
            </Link>
          </li>
        </ul>
      </div>

      {/* right side */}

      <div className=" flex gap-6 justify-center">
        {/* social media */}
        <div>
          <ul className=" flex gap-4 items-center">
            <li>
              <Link to={""}>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <FaFacebookSquare />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className=" text-black font-medium text-xs">Grailed © 2023 </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
