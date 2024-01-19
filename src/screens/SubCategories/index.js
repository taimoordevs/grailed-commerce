import React, { useEffect, useState } from "react";
import { FaAngleRight, FaHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ProductSlider from "../../components/sliders/productSlider";
import Product from "../../components/cards/Product";
import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import axios from "axios";
import CategoryCard from "../../components/cards/CategoryCard";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const SubCategories = () => {

    const {id} = useParams();

  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    axios
      .post(`http://34.84.41.203:4142/api/getSingleSubCategories/${id}`)
      .then((res) => {
        console.log(res,'==============>>>>>>>>>sub');

        setAllCategory(res.data);
      })
      .catch((error) => {});
  }, []);


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
    
  const data = [
    {
      id: 1,
      title: "",
      image: require("../../assets/images/product1.avif"),
    },
    {
      id: 2,
      title: "",
      image: require("../../assets/images/product2.avif"),
    },
    {
      id: 3,
      title: "",
      image: require("../../assets/images/product3.avif"),
    },
    {
      id: 4,
      title: "",
      image: require("../../assets/images/product4.avif"),
    },
    {
      id: 5,
      title: "",
      image: require("../../assets/images/product1.avif"),
    },
    {
      id: 6,
      title: "",
      image: require("../../assets/images/product3.avif"),
    },
    {
      id: 7,
      title: "",
      image: require("../../assets/images/product4.avif"),
    },
  ];

  return (
    <>
      <Navbar/>
      <div className=" container mx-auto py-2">
      <div>
        <ul className=" flex  gap-1 items-center">
          <li>
            <Link
              to={""}
              className=" text-black font-semibold text-xs border-b  border-black"
            >
              Menswear
            </Link>
          </li>

          <li className=" pt-1">
            <FaAngleRight size={12} className=" text-gray-400" />
          </li>

          <li>
            <a href="" className=" text-gray-500 font-semibold text-xs ">Bottoms</a>
          </li>
        </ul>
      </div>

      <h2 className=" h2  pt-10">{allCategory?.name}</h2>

      {/* <div className="  py-10">
        <div className=" flex  px-4 items-center justify-between">
          <h4 className=" h4">Staff Picks</h4>
        </div>
        <ProductSlider
          items={allCategory?.products?.map((item, index) => {
            return (
              <>
                <Product item={item} image={item?.image?.[0]} />
              </>
            );
          })}
        />
      </div> */}


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
            {allCategory?.products?.map((item)=>{
              
              return (
               <Product item={item} />
                 
              )
            
            })}
   
            
           
          </div>
        </div>
      </div>
    </div>
    </div>
      <Footer/>
    </>
   
  );
};

export default SubCategories;
