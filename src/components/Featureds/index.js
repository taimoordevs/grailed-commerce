import React from "react";
import Button from "../Button";

const Featureds = () => {
  return (
    <div className=" container px-4 mx-auto">
      <div className=" flex items-center justify-between">
        <h4 className=" text-black font-medium text-xl">
          Featured Collections & Stories
        </h4>
      </div>

      <div className="grid mt-4 item1 col-span-2  xl:grid-cols-2  grid-cols-1 gap-5">
        <div className="">
          <img src={require("../../assets/images/featured1.jpg")} alt="" />

          <div className=" border p-3 flex  justify-between items-center">
            <p className=" text-md">COMMUNITY FEATURE</p>
            <Button
              label={"READ MORE"}
              className={
                " uppercase text-[#0000FF] text-sm font-bold py-2 hover:bg-[#0000FF] hover:text-white border-[#0000FF] border"
              }
            />
          </div>
        </div>

        <div className="">
          <img src={require("../../assets/images/featured2.jpg")} alt="" />

          <div className=" border p-3 flex  justify-between items-center">
            <p className=" text-md">COMMUNITY FEATURE</p>
            <Button
              label={"READ MORE"}
              className={
                " uppercase text-[#0000FF] text-sm  py-3 font-bold hover:bg-[#0000FF] hover:text-white border-[#0000FF] border"
              }
            />
          </div>
        </div>

        <div className="">
          <img src={require("../../assets/images/featured3.jpg")} alt="" />

          <div className=" border p-3 flex  justify-between items-center">
            <p className=" text-md">COMMUNITY FEATURE</p>
            <Button
              label={"READ MORE"}
              className={
                " uppercase text-[#0000FF] py-2 text-sm font-bold hover:bg-[#0000FF] hover:text-white border-[#0000FF] border"
              }
            />
          </div>
        </div>
        <div className="">
          <img src={require("../../assets/images/featured4.jpg")} alt="" />

          <div className=" border p-3 flex  justify-between items-center">
            <p className=" text-md">COMMUNITY FEATURE</p>
            <Button
              label={"READ MORE"}
              className={
                " uppercase text-[#0000FF] text-sm font-bold py-2 hover:bg-[#0000FF] hover:text-white border-[#0000FF] border"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featureds;
