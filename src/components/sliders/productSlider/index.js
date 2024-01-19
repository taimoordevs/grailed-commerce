// ProductSlider.js
import React, { useRef } from "react";
import "./ProductSlider.css";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
const ProductSlider = ({ items }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="relative container md:px-4 px-0 mx-auto">
      <div
        ref={scrollContainerRef}
        className="scroll-container  productOverflow  overflow-x-auto whitespace-nowrap"
      >
        {items}
      </div>

     <div className=" md:block hidden">
     <button
        className="arrow arrow-left absolute -left-4  flex  pr-1  justify-end  items-center  top-28 rounded-full  bg-white w-14 h-14"
        onClick={scrollLeft}
      >
        <LiaAngleLeftSolid  />
      </button>
      <button
        className="arrow arrow-right absolute -right-4  flex justify-start pl-1 items-center  top-28 rounded-full  bg-white w-14 h-14"
        onClick={scrollRight}
      >
           <LiaAngleRightSolid />
      </button>
     </div>
    </div>
  );
};

export default ProductSlider;
