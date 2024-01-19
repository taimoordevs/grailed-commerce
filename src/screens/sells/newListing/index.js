import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import Option from "../../../components/Option";
import { IoCameraOutline } from "react-icons/io5";
import Button from "../../../components/Button";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import axios from "axios";
import { Base_url } from "../../../utils/Base_url";
import { toast } from "react-toastify";
const NewListing = () => {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user_ID") || undefined;
  const [sizeItem, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [designerItem, setDesignerItem] = useState(" ");
  const [colorItem, setColorItem] = useState(" ");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState(null);
  const [productPrice, setProductPrice] = useState(null);

  const [inputValue, setInputValue] = useState("");
  console.log(tags);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };
  const handleSubSubcategoryChange = (subcategory) => {
    setSelectedSubSubcategory(subcategory);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  console.log(selectedImage);

  const [imagesUpload, setImagesUpload] = useState([]);
  console.log(imagesUpload);
  const [allCategory, setAllCategory] = useState([]);

  const [designer, setDesigner] = useState([]);

  useEffect(() => {
    axios
      .post(`${Base_url}/getAllDepartments`)
      .then((res) => {
        console.log(res);

        setAllCategory(res.data);
      })
      .catch((error) => {});

    axios
      .post(`${Base_url}/getAllBrands`)
      .then((res) => {
        // Sort the designer array based on designer names
        const sortedDesigners = res.data.brands.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setDesigner(sortedDesigners);
      })
      .catch((error) => {});
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImagesUpload(e.target.files[0]);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [itemname, setItemName] = useState("");

  const HandleSubmit = async (values) => {
    if (!itemname) {
      toast.error("Please Enter product name!");
    } else if (!description) {
      toast.error("Please Enter product description!");
    } else if (!productPrice) {
      toast.error("Please Enter Product price!");
    } else if (!sizeItem) {
      toast.error("Please Enter sizeItem!");
    } else if (!colorItem) {
      toast.error("Please Enter product color!");
    } else if (!imagesUpload) {
      toast.error("Please Enter product image!");
    } else {
      let profilephoto = " ";

      try {
        let param = new FormData();

        param.append("avatars", imagesUpload);

        profilephoto = await axios.post(`${Base_url}/uploadImage`, param);

        console.log(profilephoto, "=====profile photo===");
        // console.log(profilephoto?.data?.response,'=====profile photo2===');
      } catch (error) {
        console.log(error);
      }

      const params = {
        departmentID: selectedCategory,
        categoryID: selectedSubcategory,
        subcategoryID: selectedSubSubcategory,
        brandID: designerItem,
        name: itemname,
        regularPrice: "",
        salePrice: productPrice,
        discount: "",
        userID:storedUser,
        color:colorItem,
        size:sizeItem,
        condition:condition,
        description:description,
        tags:tags,
        images: profilephoto?.data[0].url,
      };
      await axios
        .post(`${Base_url}/createProduct`, params)
        .then((res) => {
          console.log(res);

            navigate("/sell/for_sale");
            toast.success("Product Created Successfully!");
         
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className=" w-[60%] mx-auto py-14">
        <div className=" flex items-center justify-between">
          <h3 className="h3">Add a new listing</h3>
          <Link to={""} className="text-[#0000FF]  font-bold text-sm">
            HOW TO SELL GUIDE
          </Link>
        </div>

        <div>
          <h3 className="h4 my-5">Details</h3>

          <div className="flex space-x-4">
            <div className="relative w-60">
              <select
                id="department"
                name="department"
                onChange={(e) => handleCategoryChange(e.target.value)}
                value={selectedCategory || ""}
                className="block w-full py-2 px-1 border mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled>
                  Select department
                </option>
                {allCategory.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedCategory && (
              <div className="relative w-64 ">
                <select
                  id="subcategory"
                  name="subcategory"
                  onChange={(e) => handleSubcategoryChange(e.target.value)}
                  value={selectedSubcategory || ""}
                  className="block w-full mt-1 border px-1 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled>
                    Select subcategory
                  </option>
                  {allCategory
                    .find((category) => category._id === selectedCategory)
                    .categories.map((subcategory) => (
                      <option key={subcategory.id} value={subcategory._id}>
                        {subcategory.name}
                      </option>
                    ))}
                </select>
              </div>
            )}

            {selectedSubcategory && (
              <div className="relative w-64 ">
                <select
                  id="subsubcategory"
                  name="subsubcategory"
                  onChange={(e) => handleSubSubcategoryChange(e.target.value)}
                  value={selectedSubSubcategory || ""}
                  className="block  border py-2 px-1 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled>
                    Select sub-subcategory
                  </option>
                  {allCategory
                    .find((category) => category._id === selectedCategory)
                    .categories.find(
                      (subcategory) => subcategory._id === selectedSubcategory
                    )
                    .subcategories.map((subsubcategory) => (
                      <option key={subsubcategory} value={subsubcategory._id}>
                        {subsubcategory.name}
                      </option>
                    ))}
                </select>
              </div>
            )}
          </div>
          <div className=" pt-6 flex gap-3">
            <div className="w-[48%]">
              <select
                className="mt-1 p-2 border rounded-md w-full"
                value={designerItem}
                onChange={(e) => setDesignerItem(e.target.value)}
              >
                <option>Designer</option>
                {designer?.map((item, index) => {
                  return (
                    <>
                      <option value={item._id}>{item?.name}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className=" w-[48%]">
              {/* <label className="block text-sm font-bold text-gray-700"></label> */}
              <select
                className="mt-1 p-2 border rounded-md w-full"
                value={sizeItem}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value={"XXS"}>XXS</option>
                <option value={"XS"}>XS</option>
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL</option>
                <option value={"XXL"}>XXL</option>
              </select>
            </div>
          </div>

          {/* item name */}

          <div className=" pb-5 my-5">
            <label className=" text-black font-bold text-xl">Item Name</label>

            <Input
              onChange={(e) => setItemName(e.target.value)}
              value={itemname}
              placeholder={"item name"}
              className={"border    w-96 mt-4"}
            />
          </div>
          <div className=" pb-5 my-5">
            <label className=" text-black font-bold text-xl">Price</label>

            <Input
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
              placeholder={"item Price"}
              className={"border    w-96 mt-4"}
            />
          </div>

          {/* color */}

          <div className=" pb-5">
            <label className=" text-black font-bold text-xl">Color</label>

            <select
              className="mt-1 p-2 border rounded-md w-full"
              value={colorItem}
              onChange={(e) => setColorItem(e.target.value)}
            >
              <option>Designer color name, i.e. "Frozen Yellow"</option>

              <option value={"Black"}>Black</option>
              <option value={"Blue"}>Blue</option>
              <option value={"Yellow"}>Yellow </option>
              <option value={"Orange"}>Orange</option>
            </select>
          </div>

          {/* conditions */}

          <div className=" pb-5 my-5">
            <label className=" text-black font-bold text-xl">Condition</label>

            {/* <label className="block text-sm font-bold text-gray-700"></label> */}
            <select
              className="mt-1 p-2 border rounded-md w-full"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value={"New/Never"}>New/Never</option>
              <option value={"Worn"}>Worn</option>
            </select>
          </div>

          {/* description */}

          <div className=" pb-5 my-5">
            <label className=" text-black font-bold text-xl">Description</label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={7}
              name="description"
              className=" w-full border p-3"
              placeholder=""
            ></textarea>
          </div>

          <label className=" text-black font-bold text-xl">Tags</label>

          <div className=" flex  mt-5 flex-wrap border border-black p-5">
            <div className=" flex flex-wrap items-center gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="tag border items-center  uppercase text-sm font-bold flex gap-1  py-1 border-black px-4"
                >
                  {tag}
                  <button
                    className=" bg-black  text-white w-4 flex justify-center items-center h-4 rounded-full"
                    onClick={() => handleTagRemove(tag)}
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <input
              className=""
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              placeholder="Add tags"
            />
          </div>
          {/* Photos */}

          <div className=" pb-5 my-10">
            <label className=" text-black font-bold text-xl">Photos</label>

            {/* <Link to={''} className='text-[#0000FF]  font-bold text-sm'>HOW TO SELL GUIDE</Link> */}

            <div className=" w-full  md:flex block gap-5">
              <div className="">
              {selectedImage ? (
                    <label
                      htmlFor="fileInput"
                      className="flex justify-center items-center   w-60 h-80 bg-slate-50 cursor-pointer"
                    >
                      <img
                        src={selectedImage}
                        className=" w-full h-full"
                        alt=""
                      />
                      <input
                        accept="image/*"
                        onChange={handleFileChange}
                        name="images"
                        type="file"
                        id="fileInput"
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <label
                      htmlFor="fileInput"
                      className="flex justify-center items-center   w-60 h-80 bg-slate-50  cursor-pointer"
                    >
                       <IoCameraOutline size={40} />
                      <input
                        accept="image/*"
                        onChange={handleFileChange}
                        name="images"
                        type="file"
                        id="fileInput"
                        className="hidden"
                      />
                    </label>
                  )}
             
              </div>
              <div>
                <div className=" grid item1 col-span-2  w-full  md:grid-cols-4  grid-cols-3 bg-white gap-2">
                  {selectedImage ? (
                    <label
                      htmlFor="fileInput"
                      className="flex justify-center items-center w-32 h-40 bg-slate-50 cursor-pointer"
                    >
                      <img
                        src={selectedImage}
                        className=" w-full h-full"
                        alt=""
                      />
                      <input
                        accept="image/*"
                        onChange={handleFileChange}
                        name="images"
                        type="file"
                        id="fileInput"
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <label
                      htmlFor="fileInput"
                      className="flex justify-center items-center w-32 h-40 bg-slate-50 cursor-pointer"
                    >
                      <IoCameraOutline size={30} />
                      <input
                        accept="image/*"
                        onChange={handleFileChange}
                        name="images"
                        type="file"
                        id="fileInput"
                        className="hidden"
                      />
                    </label>
                  )}

                  <div className=" flex justify-center items-center   w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center   w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center    w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center    w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center    w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center    w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center    w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  flex   justify-between items-center container  fixed  w-full z-50  bottom-0 h-16 bg-white shadow-xl">
        <div></div>
        <div className=" flex gap-2">
          <div>
            <Button
              label={"save as draft"}
              className={" bg-white border py-2 text-black uppercase"}
            />
          </div>
          <div>
            <Button
              onClick={HandleSubmit}
              label={"publish"}
              type={"submit"}
              className={" bg-black py-2 text-white uppercase"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewListing;
