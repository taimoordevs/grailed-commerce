import React,{useState} from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { TiUpload } from 'react-icons/ti'
import { SlLocationPin } from 'react-icons/sl'
import Tabs from '../../components/Tabs'
import Accordion from "../../components/Accordion/Accordion";
import { FaHeart } from "react-icons/fa";
import { MdClose, MdOutlineStarPurple500 } from "react-icons/md";
import Input from "../../components/Input";
import { FiSearch } from "react-icons/fi";
const Stores = () => {

    const Department = () => (
        <div className=" text-center  px-4">
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Menswear</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
    
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Womenswear</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
        </div>
      );
    
      const Category = () => (
        <div className=" text-center  px-4">
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Menswear</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
    
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Womenswear</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
        </div>
      );
    
      const Price = () => (
        <div className=" text-center  flex gap-2 px-4">
          <div className=" flex gap-1 justify-center items-center">
            <Input type={""} className={" w-20 border"} placeholder={"$  Min"} />
          </div>
    
          <div className=" flex gap-1 items-center">
            <Input type={""} className={" w-20 border"} placeholder={"$  Max"} />
          </div>
        </div>
      );
    
      const Conditions = () => (
        <div className=" text-center  px-4">
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">New/Never Worn</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
    
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Gently Used</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
    
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Used</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
    
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Very Worn</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
    
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Not Specified</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
        </div>
      );
    
      const Designer = () => (
        <div className=" text-center">
          <div className=" border  relative">
            <input
              placeholder="Search"
              className="  bg-lightGray  pl-7 w-full  p-1.5 text-primary placeholder:text-primary "
            />
            <FiSearch className=" absolute top-2 left-1" />
          </div>
          <div className=" px-4 pt-3">
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">Vintage</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
    
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">Streetwear</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
    
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">Japanese Brand</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
    
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">Nike</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
    
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">Band Tees</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
    
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">Designer</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
    
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">Avant Grade</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
    
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">Levl's</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
    
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">Adidas</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
          </div>
        </div>
      );
    
      const FilterBykeyword = () => (
        <div className=" text-center">
          <div className=" border  relative">
            <input
              placeholder="Search"
              className="  bg-lightGray  pl-7 w-full  p-1.5 text-primary placeholder:text-primary "
            />
            <FiSearch className=" absolute top-2 left-1" />
            <FiSearch className=" absolute top-2 left-1" />
          </div>
        </div>
      );
    
      const Location = () => (
        <div className=" text-center">
          <div className=" px-4">
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">United States</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
    
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">Europe</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
    
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">Asia</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
    
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">Pakistan</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
    
            <div className=" flex gap-1 items-center">
              <Input type={"checkbox"} className={""} />
              <span className=" text-sm">India</span>
              <span className=" bg-slate-50  text-xs">1m+</span>
            </div>
          </div>
        </div>
      );
    
      const Market = () => (
        <div className=" text-center  px-4">
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Core</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
    
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Grails</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
    
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Hype</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
    
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Sartorial</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
        </div>
      );
    
      const ShowOnly = () => (
        <div className=" text-center  px-4">
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Staff Picks</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
    
          <div className=" flex gap-1 items-center">
            <Input type={"checkbox"} className={""} />
            <span className=" text-sm">Sold</span>
            <span className=" bg-slate-50  text-xs">1m+</span>
          </div>
        </div>
      );
    
      const [accordions, setAccordion] = useState([
        {
          key: 1,
          title: "Department",
          data: <Department />,
          isOpen: false,
        },
        {
          key: 2,
          title: "Category",
          data: "splashText3",
          isOpen: false,
        },
        {
          key: 3,
          title: "Size",
          data: "splashText3",
          isOpen: false,
        },
        {
          key: 4,
          title: "Designer",
          data: <Designer />,
          isOpen: false,
        },
        {
          key: 5,
          title: "Price",
          data: <Price />,
          isOpen: false,
        },
        {
          key: 6,
          title: "Condition",
          data: <Conditions />,
          isOpen: false,
        },
        {
          key: 7,
          title: "Filter By Keyword",
          data: <FilterBykeyword />,
          isOpen: false,
        },
        {
          key: 8,
          title: "Location",
          data: <Location />,
          isOpen: false,
        },
        {
          key: 9,
          title: "Show Only",
          data: <ShowOnly />,
          isOpen: false,
        },
        {
          key: 10,
          title: "Market",
          data: <Market />,
          isOpen: false,
        },
        {
          key: 11,
          title: "Followed Searches",
          data: "Designer",
          isOpen: false,
        },
      ]);
    
      const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => {
          if (accord.key === accordionkey) {
            return { ...accord, isOpen: !accord.isOpen };
          } else {
            return { ...accord, isOpen: false };
          }
        });
    
        setAccordion(updatedAccordions);
      };
    
      const [isMenuOpen, setMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };

    const TabContent1 = () => (
        <div>
           <div className=" container   mx-auto py-10">
      <div className=" bg-white py-3 z-40 sticky top-20 flex justify-between items-center">
        <div>
          <h6 className="h6">306,182 listings</h6>
        </div>

        <div className=" flex items-center gap-2">
          <Button
            label={"follow"}
            className={" bg-black uppercase text-xs py-1 font-bold  text-white"}
          />
          <div className=" md:block hidden ">
            <select className="  border py-1  bg-lightGray  uppercase  text-primary placeholder:text-primary ">
              <option className="">Sort by: default</option>
              <option>Sort by: trending</option>
              <option>Sort by: low price</option>
              <option>Sort by: high price</option>
              <option>Sort by: new</option>
              <option>Sort by: popular</option>
            </select>
          </div>

          <Button
            label={"filter"}
            onClick={toggleMenu}
            className={
              "bg-black  block md:hidden uppercase text-xs py-1 font-bold  text-white"
            }
          />
        </div>
      </div>

      <div className=" flex  pt-4 gap-12">
        <div
          className={`lg:w-[20%] w-[100%]   bg-white ${
            isMenuOpen
              ? "block absolute  text-center lg:p-5 p-0 top-0 right-0  z-50 left-0 w-[100%] h-full bg-white"
              : "w-[20%] hidden lg:block  bg-white"
          }`}
        >
          <div className=" p-2 border-t lg:hidden block border-b flex justify-between  items-center">
            <MdClose
              size={20}
              className=" cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
            <p className="h5">filter</p>
            <span className=" text-gray-500 border-b">Clear All</span>
          </div>
          <div className="bg-[#f7f7ff] p-4 pb-10">
            <p className=" text-xs text-gray-600 font-semibold">
              Set up to filter out listings that are not in your size.
            </p>
            <Button
              label={"add my sizes"}
              className={
                " bg-white border w-full uppercase text-xs py-2 mt-3 font-bold"
              }
            />
          </div>


      

          {/*   department */}

          <div className=" mx-auto ">
            {accordions.map((accordion) => (
              <Accordion
                key={accordion.key}
                title={accordion.title}
                data={accordion.data}
                isOpen={accordion.isOpen}
                toggleAccordion={() => toggleAccordion(accordion.key)}
              />
            ))}
          </div>

          <Button
            label={"Follow this search"}
            className={
              " uppercase border bg-white text-black  font-bold py-2 w-full text-xs"
            }
          />

          <p className=" text-xs text-gray-400 font-semibold pt-2">
            Get updates when new listings matching your filters are added.
            MANAGE FOLLOWED SEARCHES
          </p>
        </div>
        <div className="">
          <div className="grid item1 mx-auto col-span-2  mt-3  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">
            <Link
              to={"/product_details"}
              className="scroll-item inline-block m-2 w-52 bg-white rounded"
            >
              <div className="  relative">
                <img
                  src={require("../../assets/images/product1.avif")}
                  className="   w-52"
                  alt=""
                />
                {/* <span className=" uppercase  font-bold  text-xs absolute top-2  left-2 bg-black text-white px-2 py-1">
                Staff pick
              </span> */}
              </div>
              <div>
                <div className=" flex p-2 justify-between">
                  <span className=" text-xs">about 4 hours age</span>
                  <span className=" text-xs  line-through">
                    (about 1 month)
                  </span>
                </div>
                <hr />
                <div className=" p-2">
                  <div className=" flex justify-between items-center">
                    <h6 className=" text-black font-semibold text-sm">
                      KIKO KOSTADINOV
                    </h6>
                    <p className=" font-semibold">S</p>
                  </div>
                  <p className=" text-xs text-black">Derby oval zip up shirt</p>
                  <div className=" flex justify-between items-center">
                    <h6 className="">
                      <span className=" text-red-700  font-bold text-sm">
                        $324
                      </span>{" "}
                      <span className=" text-gray-400  line-through text-sm  font-extrabold">
                        $380
                      </span>{" "}
                      <span className=" text-xs">10% off</span>{" "}
                    </h6>
                    <FaHeart />
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"/product_details"}
              className="scroll-item inline-block m-2 w-52 bg-white rounded"
            >
              <div className="  relative">
                <img
                  src={require("../../assets/images/product1.avif")}
                  className="   w-52"
                  alt=""
                />
                {/* <span className=" uppercase  font-bold  text-xs absolute top-2  left-2 bg-black text-white px-2 py-1">
                Staff pick
              </span> */}
              </div>
              <div>
                <div className=" flex p-2 justify-between">
                  <span className=" text-xs">about 4 hours age</span>
                  <span className=" text-xs  line-through">
                    (about 1 month)
                  </span>
                </div>
                <hr />
                <div className=" p-2">
                  <div className=" flex justify-between items-center">
                    <h6 className=" text-black font-semibold text-sm">
                      KIKO KOSTADINOV
                    </h6>
                    <p className=" font-semibold">S</p>
                  </div>
                  <p className=" text-xs text-black">Derby oval zip up shirt</p>
                  <div className=" flex justify-between items-center">
                    <h6 className="">
                      <span className=" text-red-700  font-bold text-sm">
                        $324
                      </span>{" "}
                      <span className=" text-gray-400  line-through text-sm  font-extrabold">
                        $380
                      </span>{" "}
                      <span className=" text-xs">10% off</span>{" "}
                    </h6>
                    <FaHeart />
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"/product_details"}
              className="scroll-item inline-block m-2 w-52 bg-white rounded"
            >
              <div className="  relative">
                <img
                  src={require("../../assets/images/product1.avif")}
                  className="   w-52"
                  alt=""
                />
                {/* <span className=" uppercase  font-bold  text-xs absolute top-2  left-2 bg-black text-white px-2 py-1">
                Staff pick
              </span> */}
              </div>
              <div>
                <div className=" flex p-2 justify-between">
                  <span className=" text-xs">about 4 hours age</span>
                  <span className=" text-xs  line-through">
                    (about 1 month)
                  </span>
                </div>
                <hr />
                <div className=" p-2">
                  <div className=" flex justify-between items-center">
                    <h6 className=" text-black font-semibold text-sm">
                      KIKO KOSTADINOV
                    </h6>
                    <p className=" font-semibold">S</p>
                  </div>
                  <p className=" text-xs text-black">Derby oval zip up shirt</p>
                  <div className=" flex justify-between items-center">
                    <h6 className="">
                      <span className=" text-red-700  font-bold text-sm">
                        $324
                      </span>{" "}
                      <span className=" text-gray-400  line-through text-sm  font-extrabold">
                        $380
                      </span>{" "}
                      <span className=" text-xs">10% off</span>{" "}
                    </h6>
                    <FaHeart />
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"/product_details"}
              className="scroll-item inline-block m-2 w-52 bg-white rounded"
            >
              <div className="  relative">
                <img
                  src={require("../../assets/images/product1.avif")}
                  className="   w-52"
                  alt=""
                />
                {/* <span className=" uppercase  font-bold  text-xs absolute top-2  left-2 bg-black text-white px-2 py-1">
                Staff pick
              </span> */}
              </div>
              <div>
                <div className=" flex p-2 justify-between">
                  <span className=" text-xs">about 4 hours age</span>
                  <span className=" text-xs  line-through">
                    (about 1 month)
                  </span>
                </div>
                <hr />
                <div className=" p-2">
                  <div className=" flex justify-between items-center">
                    <h6 className=" text-black font-semibold text-sm">
                      KIKO KOSTADINOV
                    </h6>
                    <p className=" font-semibold">S</p>
                  </div>
                  <p className=" text-xs text-black">Derby oval zip up shirt</p>
                  <div className=" flex justify-between items-center">
                    <h6 className="">
                      <span className=" text-red-700  font-bold text-sm">
                        $324
                      </span>{" "}
                      <span className=" text-gray-400  line-through text-sm  font-extrabold">
                        $380
                      </span>{" "}
                      <span className=" text-xs">10% off</span>{" "}
                    </h6>
                    <FaHeart />
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"/product_details"}
              className="scroll-item inline-block m-2 w-52 bg-white rounded"
            >
              <div className="  relative">
                <img
                  src={require("../../assets/images/product1.avif")}
                  className="   w-52"
                  alt=""
                />
                {/* <span className=" uppercase  font-bold  text-xs absolute top-2  left-2 bg-black text-white px-2 py-1">
                Staff pick
              </span> */}
              </div>
              <div>
                <div className=" flex p-2 justify-between">
                  <span className=" text-xs">about 4 hours age</span>
                  <span className=" text-xs  line-through">
                    (about 1 month)
                  </span>
                </div>
                <hr />
                <div className=" p-2">
                  <div className=" flex justify-between items-center">
                    <h6 className=" text-black font-semibold text-sm">
                      KIKO KOSTADINOV
                    </h6>
                    <p className=" font-semibold">S</p>
                  </div>
                  <p className=" text-xs text-black">Derby oval zip up shirt</p>
                  <div className=" flex justify-between items-center">
                    <h6 className="">
                      <span className=" text-red-700  font-bold text-sm">
                        $324
                      </span>{" "}
                      <span className=" text-gray-400  line-through text-sm  font-extrabold">
                        $380
                      </span>{" "}
                      <span className=" text-xs">10% off</span>{" "}
                    </h6>
                    <FaHeart />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
        </div>
      );
      const TabContent2 = () => (
        <div className="    pt-3">

         <div className=' text-center'>
         <h3 className='h3'>Seller Score</h3>
            <div className=" flex justify-center py-3">
                  <MdOutlineStarPurple500 size={25} color='green' />
                  <MdOutlineStarPurple500 size={25} color='green' />
                  <MdOutlineStarPurple500 size={25} color='green' />
                  <MdOutlineStarPurple500 size={25} color='green' />
                  <MdOutlineStarPurple500 size={25} color='green' />
                </div>
            <span className=' text-sm font-medium  '>111 Feedback</span>
          <div className=' flex  gap-2 items-center justify-center'>
          
    
            <Button
              label={"fast shipper"}
              className={
                " uppercase mt-4 text-xs   border py-1.5 text-black font-semibold "
              }
            />
               <Button
              label={"item as  described"}
              className={
                " uppercase mt-4 text-xs border py-1.5 text-black font-semibold "
              }
            />
                <Button
              label={"quick replies"}
              className={
                " uppercase mt-4 text-xs  border py-1.5 text-black font-semibold "
              }
            />
          </div>
         </div>


<div className=' w-[50%] mx-auto  py-3'>
    
<div className=" flex justify-between items-center border-b  p-4  h-56">
            <div>
              <p className="text-black text-sm  font-bold">
                {" "}
                November 21, 2023
              </p>

              <div className=" flex py-2">
                <MdOutlineStarPurple500 size={20} />
                <MdOutlineStarPurple500 size={20} />
                <MdOutlineStarPurple500 size={20} />
                <MdOutlineStarPurple500 size={20} />
                <MdOutlineStarPurple500 size={20} />
              </div>

              <p className=" text-sm text-black">
                Great buyer! item came perfect and just like d...
              </p>

              <div className=' flex gap-2 items-center py-4'>
                <Button label={'Fast Shipper'} className={' text-black bg-slate-50 py-1 text-xs font-semibold'} />
                <Button label={'Item As Described'} className={' text-black bg-slate-50 py-1 text-xs font-semibold'} />
                <Button label={'Quick Replies'} className={' text-black bg-slate-50 py-1 text-xs font-semibold'} />
              </div>
              <h6 className="h6 border-b pt-2">GUCCI</h6>
              <p className=" text-xs text-black">
                Supreme Tee Shirt Throw Dog Shift
              </p>
            </div>
            <div>
              <img
                src={require("../../assets/images/product1.avif")}
                className="  w-32 h-40"
                alt=""
              />
            </div>
          </div>
</div>
        </div>
      );
    
      const tabData = [
        { title: "Listings", content: <TabContent1 /> },
        { title: "feedback", content: <TabContent2 /> },
        
      ];
      const defaultTab = "Listings";

  return (
    <div className=' container mx-auto py-5'>
       <div className=" flex justify-between ">
        <div className=" w-[55%]">
          <div className=" flex gap-2">
            <div>
              <img
                src={require("../../assets/images/product1.avif")}
                className=" w-16 rounded-full h-16"
                alt=""
              />
            </div>
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
                    <p className=" text-gray-500  text-sm pt-5">No feedback yet</p>
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

          <div className=' flex items-center'>
   <p>On Vacation. 😎 See you in 2024!!
Thank you for all the support
-LSVRSTORE</p>
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
                  <p className=" text-sm text-[#0000FF] font-bold  ">Trusted Seller</p>
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
                  <p className=" text-sm  text-[#0000FF] font-bold  ">Quick Responder</p>
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
                  <p className="  text-[#0000FF] font-bold  text-sm">Speedy Shipper</p>
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
  


      <div className=" mt-8">
        <Tabs tabs={tabData} className={" w-auto"} defaultTab={defaultTab} />
      </div>


    </div>
  )
}

export default Stores