import React, { useState } from "react";
import Button from "../../components/Button";
import { TiUpload } from "react-icons/ti";
import { SlLocationPin } from "react-icons/sl";
import { Link, Outlet } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import { toast } from "react-toastify";
const Sells = () => {
  const storedUser = localStorage.getItem("user_ID") || undefined;
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = async () => {
        setSelectedImage(reader.result);

        // Call bannerSubmit function automatically after setting the image
        await bannerSubmit({ profileImage: { files: [file] } });
      };

      reader.readAsDataURL(file);
    }
  };

  const bannerSubmit = async (values) => {
    try {
      if (!values.profileImage) {
        toast.error("Please choose your profile!");
        return;
      }
      setLoading(true);
      let profilephoto = "";

      const param = new FormData();
      param.append("avatars", values.profileImage.files[0]);

      const response = await axios.post(`${Base_url}/uploadImage`, param);

      console.log(response, "=====profile photo===");

      const imageUrl = response.data[0].url;

      const params = {
        profile_image: imageUrl,
      };

      const updateResponse = await axios.post(
        `${Base_url}/users/${storedUser}/profile`,
        params
      );

      console.log(updateResponse);

      if (updateResponse.status === 200) {
        toast.success("User Update Successfully!");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
      toast.error(error.message || "Error updating user profile");
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <>
      <Navbar />

      <div className=" container mx-auto py-4">
        <div className=" flex justify-between ">
          <div className=" w-[70%]">
            <div className=" flex gap-2">
              {loading ? (
                <></>
              ) : (
                <div className=" overflow-hidden relative w-20 h-20">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      className=" w-20 rounded-full h-20"
                      alt=""
                    />
                  ) : (
                    <img
                      src={require("../../assets/images/profile.png")}
                      className=" w-20 rounded-full h-20"
                      alt=""
                    />
                  )}

                  <div className=" absolute flex justify-center items-end top-0 left-0 right-0 w-20 h-20 rounded-full bg-[rgba(0,0,0,0.2)]">
                    <div className=" text-center relative">
                      <label
                        htmlFor="fileInput"
                        className=" text-white text-xs"
                      >
                        Add Photo
                      </label>
                      <IoMdAddCircle
                        className=" mx-auto"
                        size={20}
                        color="white"
                      />
                      <input
                        accept="image/*"
                        onChange={handleFileChange}
                        name="profileImage"
                        type="file"
                        id="fileInput"
                        className="hidden  absolute bottom-0"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h1 className="h2">gm6681464</h1>
                <p className=" text-black text-lg">Joined in 2023</p>
                <div className=" flex  w-full gap-3 mt-2 items-center  justify-between">
                  <div className="">
                    <div className=" flex items-center pt-5  gap-1">
                      <SlLocationPin size={12} className=" text-gray-500" />
                      <span className=" text-gray-500  text-sm font-medium">
                        Other
                      </span>
                    </div>
                  </div>
                  <div className=" flex  items-center gap-3">
                    <div>
                      <span className=" text-black font-bold"></span>
                      <p className=" text-gray-500  text-sm pt-5">
                        No feedback yet
                      </p>
                    </div>
                    <div>
                      <span className=" text-black font-bold">0</span>
                      <p className=" text-gray-500  text-sm">Transactions</p>
                    </div>
                    <div>
                      <span className=" text-black font-bold">0</span>
                      <p className=" text-gray-500  text-sm">Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <Link to={"/new_listing"}>
              <Button
                label={"+ new listing"}
                className={" uppercase bg-black  py-3  text-xs text-white"}
              />
            </Link>

            <button className=" border p-3">
              <TiUpload />
            </button>
          </div>
        </div>

        <div className=" mt-12 flex">
          <div className=" w-[15%]">
            <p className=" uppercase text-black text-sm   font-semibold">
              my items
            </p>
            <ul>
              <li>
                <Link
                  to={"/sell/for_sale"}
                  className=" uppercase text-gray-400 text-sm  font-normal"
                >
                  for sale
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className=" uppercase text-gray-400 text-sm  font-normal"
                >
                  sold
                </Link>
              </li>
              {/* <li>
              <Link
                to={""}
                className=" uppercase text-gray-400 text-sm  font-normal"
              >
                drafts
              </Link>
            </li> */}
            </ul>

            <p className=" uppercase  mt-8 text-black text-sm   font-semibold">
              MY PROFILE
            </p>
            <ul className="">
              <li>
                <Link
                  to={"/sell/feed_back"}
                  className=" uppercase text-gray-400 text-sm  font-normal"
                >
                  FEEDBACK
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className=" uppercase text-gray-400 text-sm  font-normal"
                >
                  VACATION MODE
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className=" uppercase text-gray-400 text-sm  font-normal"
                >
                  PAYMENTS
                </Link>
              </li>
              {/* <li>
              <Link
                to={""}
                className=" uppercase text-gray-400 text-sm  font-normal"
              >
                SETTINGS
              </Link>
            </li> */}
              <li className=" mt-4">
                <Link
                  to={""}
                  className=" uppercase text-gray-400 text-sm  font-normal"
                >
                  HELP
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Sells;
