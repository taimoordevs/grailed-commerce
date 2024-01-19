import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Accordion from "../../components/Accordion/Accordion";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import Input from "../../components/Input";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Product from "../../components/cards/Product";
import { Base_url } from "../../utils/Base_url";
const Shop = () => {
  const [allProduct, setAllProduct] = useState([]);

  const [filter, setFilter] = useState(" ");

  const [allCategory, setAllCategory] = useState([]);
  useEffect(() => {
    axios
      .post("http://34.84.41.203:4142/api/getAllProducts")
      .then((res) => {
        console.log(res);

        setAllProduct(res.data, "all products");
      })
      .catch((error) => {});

    axios
      .post("http://34.84.41.203:4142/api/getAllDepartments")
      .then((res) => {
        console.log(res);

        setAllCategory(res.data);
      })
      .catch((error) => {});
  }, []);

  const [designer, setDesigner] = useState([]);

  useEffect(() => {
    axios
      .post(`${Base_url}/getAllBrands`)
      .then((res) => {
        setDesigner(res.data.brands);
      })
      .catch((error) => {});
  }, []);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [designerOpen, setDesignerOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [conditionOpen, setConditionOpen] = useState(false);
  const [bykeywordOpen, setByKeywordOpen] = useState(false);

  const toggleDepartment = () => {
    setDepartmentOpen(!departmentOpen);
  };

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  const toggleDesigner = () => {
    setDesignerOpen(!designerOpen);
  };

  const togglePrice = () => {
    setPriceOpen(!priceOpen);
  };

  const toggleCondition = () => {
    setConditionOpen(!conditionOpen);
  };

  const toggleByKeyword = () => {
    setByKeywordOpen(!bykeywordOpen);
  };

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedDesigners, setSelectedDesigners] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  console.log(selectedDepartment);
  const filteredProducts = allProduct.filter((item) => {
    console.log(item);
    const isNameMatch = item.name.toLowerCase().includes(filter.toLowerCase());
    const isDepartmentMatch = !selectedDepartment.includes(
      item?.departmentID?.name
    );
    const isDesignerMatch = !selectedDesigners.includes(item?.brandID?.name);

    const isConditionMatch = !selectedConditions.includes(item?.condition);

    const isPriceInRange =
      (minPrice === "" || parseFloat(item.salePrice) >= parseFloat(minPrice)) &&
      (maxPrice === "" || parseFloat(item.salePrice) <= parseFloat(maxPrice));

    return (
      isNameMatch &&
      isPriceInRange &&
      isDesignerMatch &&
      isDepartmentMatch &&
      isConditionMatch
    );
  });

  return (
    <>
      <Navbar />
      <div className=" container   mx-auto py-10">
        <div className=" bg-white py-3 z-40 sticky top-20 flex justify-between items-center">
          <div>
            <h6 className="h6">306,182 listings</h6>
          </div>

          <div className=" flex items-center gap-2">
            <Button
              label={"follow"}
              className={
                " bg-black uppercase text-xs py-1 font-bold  text-white"
              }
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
              <Accordion
                title="Department"
                isOpen={departmentOpen}
                toggleAccordion={toggleDepartment}
              >
                <div className=" text-center  px-4">
                  {allCategory?.map((item, index) => {
                    return (
                      <>
                        <div key={index} className=" flex gap-1 items-center">
                          <Input
                            checked={selectedDepartment.includes(item.name)}
                            onChange={() => setSelectedDepartment(item.name)}
                            type={"checkbox"}
                            className={""}
                          />
                          <span className=" text-sm">{item?.name}</span>
                          <span className=" bg-slate-50  text-xs">1m+</span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Accordion>
            </div>

            {/* Category Accordion */}
            <div className="mx-auto">
              <Accordion
                title="Category"
                isOpen={categoryOpen}
                toggleAccordion={toggleCategory}
              >
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
              </Accordion>
            </div>

            {/* Designer Accordion */}
            <div className="mx-auto">
              <Accordion
                title="Designer"
                isOpen={designerOpen}
                toggleAccordion={toggleDesigner}
              >
                <div className=" text-center">
                  <div className=" border  relative">
                    <input
                      placeholder="Search"
                      className="  bg-lightGray  pl-7 w-full  p-1.5 text-primary placeholder:text-primary "
                    />
                    <FiSearch className=" absolute top-2 left-1" />
                  </div>
                  <div className=" px-4 pt-3">
                    {designer?.map((item, index) => {
                      return (
                        <>
                          <div className=" flex gap-1 items-center">
                            <Input
                              checked={selectedDesigners.includes(item.name)}
                              type={"checkbox"}
                              className={""}
                              onChange={() => setSelectedDesigners(item.name)}
                            />
                            <span className=" text-sm">{item?.name}</span>
                            <span className=" bg-slate-50  text-xs">1m+</span>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </Accordion>
            </div>

            {/* Price Accordion */}
            <div className="mx-auto">
              <Accordion
                title="Price"
                isOpen={priceOpen}
                toggleAccordion={togglePrice}
              >
                <div className=" text-center justify-center  flex gap-2 px-4">
                  <div className=" flex gap-1 justify-center items-center">
                    <Input
                      type={""}
                      className={" w-20 border"}
                      placeholder={"$  Min"}
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                  </div>

                  <div className=" flex gap-1 items-center">
                    <Input
                      type={""}
                      className={" w-20 border"}
                      placeholder={"$  Max"}
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                </div>
              </Accordion>
            </div>

            {/* Conditon Accordion */}
            <div className="mx-auto">
              <Accordion
                title="Condition"
                isOpen={conditionOpen}
                toggleAccordion={toggleCondition}
              >
                <div className=" text-center  px-4">
                  <div className=" flex gap-1 items-center">
                    <Input
                      checked={selectedConditions.includes("New/Never Worn")}
                      onChange={() => setSelectedConditions("New/Never Worn")}
                      type={"checkbox"}
                      className={""}
                    />
                    <span className=" text-sm">New/Never Worn</span>
                    <span className=" bg-slate-50  text-xs">1m+</span>
                  </div>

                  <div className=" flex gap-1 items-center">
                    <Input
                      checked={selectedConditions.includes("Gently Used")}
                      onChange={() => setSelectedConditions("Gently Used")}
                      type={"checkbox"}
                      className={""}
                    />
                    <span className=" text-sm">Gently Used</span>
                    <span className=" bg-slate-50  text-xs">1m+</span>
                  </div>

                  <div className=" flex gap-1 items-center">
                    <Input
                      checked={selectedConditions.includes("Used")}
                      onChange={() => setSelectedConditions("Used")}
                      type={"checkbox"}
                      className={""}
                    />
                    <span className=" text-sm">Used</span>
                    <span className=" bg-slate-50  text-xs">1m+</span>
                  </div>

                  <div className=" flex gap-1 items-center">
                    <Input
                      checked={selectedDepartment.includes("Very Worn")}
                      onChange={() => setSelectedDepartment("Very Worn")}
                      type={"checkbox"}
                      className={""}
                    />
                    <span className=" text-sm">Very Worn</span>
                    <span className=" bg-slate-50  text-xs">1m+</span>
                  </div>

                  <div className=" flex gap-1 items-center">
                    <Input
                      checked={selectedDepartment.includes("Not Specified")}
                      onChange={() => setSelectedDepartment("Not Specified")}
                      type={"checkbox"}
                      className={""}
                    />
                    <span className=" text-sm">Not Specified</span>
                    <span className=" bg-slate-50  text-xs">1m+</span>
                  </div>
                </div>
              </Accordion>
            </div>

            {/* By keyword Accordion */}
            <div className="mx-auto">
              <Accordion
                title="Filter By Keyword"
                isOpen={bykeywordOpen}
                toggleAccordion={toggleByKeyword}
              >
                <div className=" text-center">
                  <div className=" border  relative">
                    <input
                      onChange={(e) => setFilter(e.target.value)}
                      value={filter}
                      placeholder="Search"
                      className="  bg-lightGray  pl-7 w-full  p-1.5 text-primary placeholder:text-primary "
                    />
                    <FiSearch className=" absolute top-2 left-1" />
                    <FiSearch className=" absolute top-2 left-1" />
                  </div>
                </div>
              </Accordion>
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
              {filteredProducts?.map((item, index) => {
                return (
                  <>
                    <Product item={item} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
