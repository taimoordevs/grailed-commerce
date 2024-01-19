import React from "react";
import { Link } from "react-router-dom";

const BrandCard = ({item}) => {
  return (
    <Link  to={`/designers_details/${item._id}`} className=" text-center  w-44 h-44">
      <img
        src={item?.logo}
        className="  border rounded-full w-full"
        alt=""
      />
    </Link>
  );
};

export default BrandCard;
