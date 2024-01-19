import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";

const Product = ({ item, setupdate }) => {
  const { productData, favoriteData, userInfo } = useSelector(
    (state) => state.next
  );

  console.log(userInfo);

  const storedUser = localStorage.getItem("user_ID") || undefined;

  const [isLiked, setIsLiked] = useState(item?.likes?.includes(storedUser));

  const handleLikeDislike = async () => {
    try {
      setIsLiked(!isLiked);

      const response = await axios.post(
        `http://34.84.41.203:4142/api/toggleLikeDislike/${item._id}/${storedUser}`
      );

      if (response.data && response.data.likesCount !== undefined) {
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="scroll-item inline-block m-2 w-56 bg-white rounded">
        <Link to={`/product_details/${item?._id}`} className="  ">
          <div className="relative w-56    h-64">
            <img src={item?.images?.[0]} className="   w-full h-full" alt="" />
            <span className=" uppercase  font-bold  text-xs absolute top-2  left-2 bg-black text-white px-2 py-1">
              Staff pick
            </span>
          </div>
        </Link>
        <div>
          <div className=" flex p-2 justify-between">
            <span className=" text-xs">about 4 hours age</span>
            <span className=" text-xs  line-through">(about 1 month)</span>
          </div>
          <hr />
          <div className=" p-2">
            <div className=" flex justify-between items-center">
              <h6 className=" text-black font-semibold text-sm">
                {`${item?.name?.slice(0, 20)}...`}
              </h6>
              <p className=" font-semibold">S</p>
            </div>
            <p className=" text-xs text-black">
              {" "}
              {`${item?.name?.slice(0, 20)}...`}
            </p>
            <div className=" flex justify-between items-center">
              <h6 className="">
                <span className=" text-red-700  font-bold text-sm">
                  ${item?.salePrice}
                </span>{" "}
                <span className=" text-gray-400  line-through text-sm  font-extrabold">
                  ${item?.regularPrice}
                </span>{" "}
                <span className=" text-xs">{`${item?.discount}% off`}</span>{" "}
              </h6>

              {isLiked ? (
                <FaHeart
                  onClick={() => {
                    handleLikeDislike(item._id);
                  }}
                />
              ) : (
                <FaRegHeart
                  onClick={() => {
                    handleLikeDislike(item._id);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
