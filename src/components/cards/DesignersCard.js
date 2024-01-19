import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const DesignersCard = ({item}) => {
  return (
    <>
      <Link
        to={`/designers_details/${item?._id}`}
       
        className="scroll-item shadow-xl  overflow-hidden inline-block m-2 w-52 bg-white rounded-lg"
      >
        <div className=" flex items-center">
          <img
            src={item?.image}
            className=" w-full h-36 object-cover"
            alt=""
          />

         
        </div>

        <div className=" py-4 text-center">
          <h6 className="h5">{item?.name}</h6>

          <p className=" text-xs text-black pt-3">147 listings</p>
          <Button  label={'follow'}  className={' bg-black text-white mx-auto uppercase text-xs py-1 mt-2'} />
        </div>
      </Link>
    </>
  );
};

export default DesignersCard;
