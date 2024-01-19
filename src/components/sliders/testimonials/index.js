import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function TestimonialSlider() {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" flex justify-between items-center border p-4 h-36">
            <div>
              <p className="text-black text-sm uppercase font-semibold">
                {" "}
                April 15th,2023
              </p>

              <div className=" flex py-2">
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
              </div>

              <p className=" text-xs text-black">
                Great buyer! item came perfect and just like d...
              </p>
              <h6 className="h6 border-b pt-2">Supreme</h6>
              <p className=" text-xs text-black">
                Supreme Tee Shirt Throw Dog Shift
              </p>
            </div>
            <div>
              <img
                src={require("../../../assets/images/product1.avif")}
                className=" w-20 h-24"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-between items-center border p-4 h-36">
            <div>
              <p className="text-black text-sm uppercase font-semibold">
                {" "}
                April 15th,2023
              </p>

              <div className=" flex py-2">
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
              </div>

              <p className=" text-xs text-black">
                Great buyer! item came perfect and just like d...
              </p>
              <h6 className="h6 border-b pt-2">Supreme</h6>
              <p className=" text-xs text-black">
                Supreme Tee Shirt Throw Dog Shift
              </p>
            </div>
            <div>
              <img
                src={require("../../../assets/images/product1.avif")}
                className=" w-20 h-24"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-between items-center border p-4 h-36">
            <div>
              <p className="text-black text-sm uppercase font-semibold">
                {" "}
                April 15th,2023
              </p>

              <div className=" flex py-2">
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
              </div>

              <p className=" text-xs text-black">
                Great buyer! item came perfect and just like d...
              </p>
              <h6 className="h6 border-b pt-2">Supreme</h6>
              <p className=" text-xs text-black">
                Supreme Tee Shirt Throw Dog Shift
              </p>
            </div>
            <div>
              <img
                src={require("../../../assets/images/product1.avif")}
                className=" w-20 h-24"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-between items-center border p-4 h-36">
            <div>
              <p className="text-black text-sm uppercase font-semibold">
                {" "}
                April 15th,2023
              </p>

              <div className=" flex py-2">
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
                <MdOutlineStarPurple500 size={15} />
              </div>

              <p className=" text-xs text-black">
                Great buyer! item came perfect and just like d...
              </p>
              <h6 className="h6 border-b pt-2">Supreme</h6>
              <p className=" text-xs text-black">
                Supreme Tee Shirt Throw Dog Shift
              </p>
            </div>
            <div>
              <img
                src={require("../../../assets/images/product1.avif")}
                className=" w-20 h-24"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
