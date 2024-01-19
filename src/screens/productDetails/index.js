import React, { useEffect, useState } from "react";
import { FaAngleRight, FaHeart, FaRegHeart } from "react-icons/fa";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import Button from "../../components/Button";
import { MdClose, MdOutlineStarPurple500 } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import TestimonialSlider from "../../components/sliders/testimonials";
import Modal from "../../components/modal";
import axios from "axios";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Base_url } from "../../utils/Base_url";
const ProductDetails = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const storedUser = localStorage.getItem("user_ID") || undefined;

  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? allProduct?.images.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === allProduct?.images?.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurr(index);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isModalSlider, setIsModalSlider] = useState(false);

  const openSlider = () => {
    setIsModalSlider(true);
  };

  const closeSlider = () => {
    setIsModalSlider(false);
  };

  const { id } = useParams();
  const [allProduct, setAllProduct] = useState({});
  const [singleStore, setSignleStore] = useState({});

  console.log(allProduct, "==================>>>>>>>>>>>");

  useEffect(() => {
    axios
      .post(`${Base_url}/getSingleProduct/${id}`)
      .then((res) => {
        console.log(res);

        setAllProduct(res.data, "all products");

    axios
    .post(`${Base_url}/getSingleStore/${res.data?.createdBy?.store}`)
    .then((res) => {
      console.log(res);

      setSignleStore(res.data.store, "all products");
    })
    .catch((error) => {});
      })
      .catch((error) => {});

  }, []);

  const [isLiked, setIsLiked] = useState(
    allProduct?.likes?.includes(storedUser)
  );
  const [likesCount, setLikesCount] = useState(allProduct?.likes?.length);
  console.log(isLiked);

  const handleLikeDislike = async () => {
    try {
      setIsLiked(!isLiked);

      const response = await axios.post(
        `${Base_url}/toggleLikeDislike/${allProduct._id}/${storedUser}`
      );

      if (response.data && response.data.likesCount !== undefined) {
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" md:flex block container md:px-10 px-0 mx-auto py-4 justify-between">
        <div className=" md:w-[70%] w-[100%]">
          <div>
            <ul className=" flex mb-4  gap-1 items-center">
              <li>
                <Link
                  to={""}
                  className=" text-black font-semibold text-xs border-b  border-black"
                >
                  {allProduct?.brandID?.name}
                </Link>
              </li>

              <li className=" pt-1">
                <FaAngleRight size={12} className=" text-gray-400" />
              </li>
              <li>
                <Link
                  to={""}
                  className=" text-black font-semibold text-xs border-b  border-black"
                >
                  {`${allProduct?.brandID?.name} ${allProduct?.departmentID?.name}`}
                </Link>
              </li>
              <li className=" pt-1">
                <FaAngleRight size={12} className=" text-gray-400" />
              </li>
              <li>
                <Link
                  to={""}
                  className=" text-black font-semibold text-xs border-b  border-black"
                >
                  {`${allProduct?.brandID?.name} ${allProduct?.categoryID?.name}`}
                </Link>
              </li>
              <li className=" pt-1">
                <FaAngleRight size={12} className=" text-gray-400" />
              </li>
              <li>
                <Link
                  to={""}
                  className=" text-black font-semibold text-xs border-b  border-black"
                >
                  {`${allProduct?.brandID?.name} ${allProduct?.subcategoryID?.name}`}
                </Link>
              </li>

              <li className=" pt-1">
                <FaAngleRight size={12} className=" text-gray-400" />
              </li>

              <li>
                <a className=" text-gray-500 font-semibold text-xs ">
                  {`${allProduct?.name?.slice(0, 30)}...`}
                </a>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden relative md:w-[90%] w-[100%]">
            <div
              className="flex  transition-transform ease-out duration-500 h-screen	"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              {allProduct?.images?.map((image, i) => {
                console.log(image, "slider image============>>>>>>>>>>>>>>");
                return (
                  <div key={i} className="flex-none w-full h-full">
                    <img
                      onClick={openSlider}
                      src={image}
                      alt=""
                      className="w-full cursor-pointer h-full object-contain"
                    />
                  </div>
                );
              })}
            </div>
            {/* <div className="absolute inset-0 flex items-center justify-between"> */}
            <button
              onClick={prev}
              className=" w-12 h-16 shadow  absolute left-12 top-56 flex  justify-center items-center bg-white/80 text-gray-800 hover:bg-white"
            >
              <TfiAngleLeft size={20} className="" />
            </button>
            <button
              onClick={next}
              className=" w-12 h-16  absolute right-14 top-56 flex justify-center items-center shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <TfiAngleRight size={20} />
            </button>
            {/* </div> */}
          </div>
          <div className=" mt-2 md:block hidden">
            <div className="flex items-center justify-center gap-2">
              {allProduct?.images?.map((_, i) => (
                <div
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`
              transition-all w-16 h-16 overflow-hidden bg-white 
              ${curr ===i?" w-14 h-14" : "bg-opacity-50"}
            `}
                >
                  <img
                    src={_}
                    alt=""
                    className=" w-full h-full   object-center  "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" md:w-[35%] w-[100%] p-4">
          <span className=" uppercase  font-bold  text-xs  bg-black text-white px-2 py-1">
            Staff pick
          </span>
          <div className=" flex justify-between items-center">
            <Link
              to={`/designers_details/${allProduct?.brandID?._id}`}
              className=" text-lg font-bold border-b border-black mb-0  leading-5"
            >
              {allProduct?.brandID?.name}
            </Link>
            <div>
              {isLiked ? (
                <FaHeart
                  size={25}
                  onClick={() => {
                    handleLikeDislike(allProduct._id);
                  }}
                />
              ) : (
                <FaRegHeart
                  size={25}
                  onClick={() => {
                    handleLikeDislike(allProduct._id);
                  }}
                />
                // <FaHeart/>
              )}

              <span className=" text-sm   ml-2 font-medium">
                {allProduct?.likes?.length}
              </span>
            </div>
          </div>
          <p className=" pb-2">{`${allProduct?.name?.slice(0, 40)}...`}</p>
          <p className="pb-2">
            Size{" "}
            <span className=" uppercase text-gray-500">{allProduct?.size}</span>
          </p>
          <p className="pb-2">
            Color{" "}
            <span className=" uppercase text-gray-500">
              {allProduct?.color}
            </span>
          </p>
          <p className="pb-2">
            Condition{" "}
            <span className=" uppercase text-gray-500">
              {allProduct?.condition}
            </span>
          </p>

          <h6 className="pb-2">
            <span className=" text-red-700  font-bold text-xl">$324</span>{" "}
            <span className=" text-gray-400  line-through text-xl  font-extrabold">
              $380
            </span>{" "}
            <span className=" text-xs">10% off</span>{" "}
          </h6>
          <p className="pb-2">
            <span className=" uppercase text-gray-500">
              + $25 Shipping — US to
            </span>
          </p>
          <Button
            onClick={() => navigate(`/checkout/${allProduct._id}`)}
            label={"purchase"}
            className={" uppercase text-white bg-black w-full py-3"}
          />
          <Button
            label={"Offer"}
            className={" uppercase my-2 text-black bg-white border w-full py-3"}
          />
          <Button
            label={"message"}
            onClick={openModal}
            className={" uppercase text-black bg-white border  w-full py-3"}
          />

          <div className=" py-4 mt-5 md:flex block gap-4 border-b">
            {allProduct?.createdBy?.type==="user"?(
              <div>
              <img
                src={allProduct?.createdBy?.profile_image}
                className="  w-14 h-14 rounded-full"
                alt=""
              />
            </div>
            ):(
<div>
              <img
                src={allProduct?.createdBy?.profile_image}
                className="  w-14 h-14 rounded-full"
                alt=""
              />
            </div>
            )}
            
            <div className=" mt-2">
              <h3 className=" text-black font-semibold pb-2">{singleStore?.name}</h3>

              <div className=" flex gap-2">
                <div className=" flex">
                  <MdOutlineStarPurple500 size={20} color="green" />
                  <MdOutlineStarPurple500 size={20} color="green" />
                  <MdOutlineStarPurple500 size={20} color="green" />
                  <MdOutlineStarPurple500 size={20} color="green" />
                </div>
                <p className=" text-sm">115 Reviews</p>
              </div>

              <div className=" flex gap-2">
                <p className=" text-sm"> 245 Transactions . </p>

                <Link to={""} className=" border-b text-sm">
                  {" "}
                  49 items for sale
                </Link>
              </div>

              <div className=" items-center my-4 flex justify-between gap-5 flex-wrap">
                <div className=" flex gap-2  items-center">
                  <svg
                    width="17px"
                    height="17px"
                    viewBox="0 0 18 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="--trusted-seller-flair"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.85852 13.4604C2.4065 12.0926 1.5 10.1522 1.5 8C1.5 3.85786 4.85786 0.5 9 0.5C13.1421 0.5 16.5 3.85786 16.5 8C16.5 10.1522 15.5935 12.0926 14.1415 13.4603L17.9951 20.3969L13.8309 19.3558L11.8681 22.2999L9.00001 15.8467L6.1319 22.2999L4.16916 19.3558L0.00489807 20.3969L3.85852 13.4604ZM15 8C15 11.3137 12.3137 14 9 14C5.68629 14 3 11.3137 3 8C3 4.68629 5.68629 2 9 2C12.3137 2 15 4.68629 15 8ZM7.57288 15.3644C6.66715 15.1899 5.81943 14.8525 5.06142 14.3838L2.99513 18.1031L4.83087 17.6442L5.86812 19.2001L7.57288 15.3644ZM12.9386 14.3838C12.1806 14.8525 11.3329 15.1899 10.4271 15.3644L12.1319 19.2001L13.1691 17.6442L15.0049 18.1031L12.9386 14.3838Z"
                      fill="#0000FF"
                    ></path>
                  </svg>
                  <p className=" text-sm ">Trusted Seller</p>
                </div>
                <div className=" flex gap-2  items-center">
                  <svg
                    width="17px"
                    height="17px"
                    viewBox="0 0 16 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="--quick-responder-flair"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.23395 9.5L9.85959 4.08121L2.49315 12.5H7.76605L6.14041 17.9188L13.5068 9.5H8.23395ZM15.5 9.49995L5 21.5H3.5L5.75 14H1.25L0.5 12.5L11 0.5H12.5L10.25 8H14.75L15.5 9.49995Z"
                      fill="#0000FF"
                    ></path>
                  </svg>
                  <p className=" text-sm ">Quick Responder</p>
                </div>
                <div className=" flex gap-2  items-center">
                  <svg
                    width="17px"
                    height="17px"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="--speedy-shipper-flair"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.5 2H4.5V0.5H18V3.5H19.5L22.5 8V14H20.122C19.8131 14.8739 18.9797 15.5 18 15.5C17.0203 15.5 16.1869 14.8739 15.878 14H11.122C10.8131 14.8739 9.97966 15.5 9 15.5C8.02034 15.5 7.18691 14.8739 6.87803 14H4.5V12.5H6.87803C7.18691 11.6261 8.02034 11 9 11C9.97966 11 10.8131 11.6261 11.122 12.5H15.878C16.0052 12.1402 16.2213 11.8223 16.5 11.5729V2ZM18.75 13.25C18.75 13.6642 18.4142 14 18 14C17.5858 14 17.25 13.6642 17.25 13.25C17.25 12.8358 17.5858 12.5 18 12.5C18.4142 12.5 18.75 12.8358 18.75 13.25ZM20.122 12.5C19.8131 11.6261 18.9797 11 18 11V9.5H21V12.5H20.122ZM9.75 13.25C9.75 13.6642 9.41421 14 9 14C8.58579 14 8.25 13.6642 8.25 13.25C8.25 12.8358 8.58579 12.5 9 12.5C9.41421 12.5 9.75 12.8358 9.75 13.25ZM18 8H20.6972L18.6972 5H18V8Z"
                      fill="#0000FF"
                    ></path>
                    <path d="M10.5 3.5H0V5H10.5V3.5Z" fill="#0000FF"></path>
                    <path d="M13.5 6.5H4.5V8H13.5V6.5Z" fill="#0000FF"></path>
                    <path d="M1.5 9.5H6V11H1.5V9.5Z" fill="#0000FF"></path>
                  </svg>
                  <p className=" text-sm ">Speedy Shipper</p>
                </div>
              </div>

              <Button
                label={"follow"}
                className={" bg-black  text-white py-1"}
              />
            </div>
          </div>

          {/* seller feedback */}

          <div className=" mt-7">
            <div className=" flex justify-between items-center">
              <h5 className=" text-black text-lg font-bold">Seller Feedback</h5>
              <span className=" text-[#0000FF] font-bold text-sm">
                SEE MORE →
              </span>
            </div>

            <div className=" pt-4">
              <TestimonialSlider />
            </div>
          </div>


          
          {/* tags */}

          <h4 className="h4 mt-3">Description</h4>

          <p>{allProduct?.description}</p>

          <h2 className="h4 mt-3">Tags</h2>
          <div className=" pt-2 flex  flex-wrap gap-2">
            {allProduct?.tags?.map((item, index) => (
              <Button
                label={`# ${item}`}
                className={
                  " bg-white py-1 uppercase  text-xs   font-black border border-black"
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className=" container mx-auto py-10">
        {/* <div className=" flex items-center justify-between">
          <div>
            <h4 className=" text-black font-medium text-xl">
              Deals On Similar Listings
            </h4>
          </div>
          <div>
            <p className=" text-xs flex items-center gap-1 text-[#0000FF]   font-extrabold">
              {" "}
              <span>SEE ALL </span> <FaLongArrowAltRight color="#0000FF" />{" "}
            </p>
          </div>
        </div> */}
        {/* <ProductSlider */}

        {/* items={data.map((item, index) => {
            return (
              <>
                <Product item={item.image} />
              </>
            );
          })}
        /> */}

        <Modal
          className={"sm:max-w-lg"}
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          {/* Modal Content */}
          <div className="">
            <div className=" p-3 flex justify-between items-center">
              <div></div>
              <h1 className="capitalize h4">Ask a question</h1>
              <MdClose onClick={() => setIsModalOpen(false)} size={25} />
            </div>
            <hr />

            <div className=" py-7  pb-10  max-w-sm  mx-auto">
              <div className="">
                <label className=" text-sm  font-medium">Send a message</label>
                <div>
                  <textarea
                    rows={6}
                    className="border bg-white w-full"
                  ></textarea>
                </div>
              </div>

              <div className=" text-center py-5">
                <p className=" text-xs">
                  We ensure that the items we review are authentic. All
                  purchases made on Grailed are eligible for protection
                </p>
                <span className=" text-black text-sm font-medium">
                  Learn more
                </span>
              </div>

              <Button
                label={"send message"}
                className={
                  " uppercase font-medium text-sm bg-black w-full py-3 text-white"
                }
              />
            </div>
          </div>

          {/* Close button */}
          {/* <div className="bg-gray-100 p-4">
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close Modal
            </button>
          </div> */}
        </Modal>

        {/* slider modal */}

        <Modal
          className={"sm:max-w-7xl  h-[90vh]"}
          isOpen={isModalSlider}
          onClose={closeSlider}
        >
          {/* Modal Content */}
          <div className="">
            <div className=" p-3 flex justify-between items-center">
              <div></div>

              <MdClose onClick={() => setIsModalSlider(false)} size={25} />
            </div>

            <div className=" mx-auto">
              <div className="overflow-hidden w-full  h-[75vh] relative">
                <div
                  className="flex  transition-transform ease-out duration-500 h-screen	"
                  style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                  {allProduct?.images?.map((image, i) => {
                    console.log(
                      image,
                      "slider image============>>>>>>>>>>>>>>"
                    );
                    return (
                      <div key={i} className="flex-none w-full h-full">
                        <img
                          onClick={openSlider}
                          src={image}
                          alt=""
                          className="w-full cursor-pointer h-full object-contain"
                        />
                      </div>
                    );
                  })}
                </div>
                {/* <div className="absolute inset-0 flex items-center justify-between"> */}
                <button
                  onClick={prev}
                  className=" w-12 h-16 shadow  absolute left-0 top-56 flex  justify-center items-center bg-white/80 text-gray-800 hover:bg-white"
                >
                  <TfiAngleLeft size={20} className="" />
                </button>
                <button
                  onClick={next}
                  className=" w-12 h-16  absolute right-0 top-56 flex justify-center items-center shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                  <TfiAngleRight size={20} />
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* Close button */}
          {/* <div className="bg-gray-100 p-4">
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close Modal
            </button>
          </div> */}
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
