import axios from "axios";
import React, { useEffect, useState } from "react";
import { Base_url } from "../../utils/Base_url";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Designers = () => {
  const [designer, setDesigner] = useState([]);

  useEffect(() => {
    axios
      .post(`${Base_url}/getAllBrands`)
      .then((res) => {
        const sortedDesigners = res.data.brands.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setDesigner(sortedDesigners);
      })
      .catch((error) => {});
  }, []);

  const groupByLetter = () => {
    return designer.reduce((acc, item) => {
      const letter = item.name.charAt(0).toUpperCase();
      if (!acc[letter]) {
        acc[letter] = [];
      }
      acc[letter].push(item);
      return acc;
    }, {});
  };

  const groupedDesigners = groupByLetter();

  // Function to scroll to the corresponding section when clicking on a letter
  const scrollToLetter = (letter) => {
    const element = document.getElementById(letter);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className=" container mx-auto">
        <div>
          <h2 className=" text-black font-semibold py-6 text-center text-2xl">
            Designers
          </h2>

          <div className=" scroll-container mt-3  flex gap-5 items-center productOverflow  overflow-x-auto whitespace-nowrap">
            {designer?.map((item, index) => {
              return (
                <>
                  <Link
                    to={`/designers_details/${item._id}`}
                    className=" text-center"
                  >
                    <div className=" border  w-28 h-28">
                      <img
                        src={item?.logo}
                        className=" w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <p className=" text-sm pt-3">
                      {item?.products?.length} Items
                    </p>
                  </Link>
                </>
              );
            })}
          </div>

          <div className=" flex gap-5 justify-between items-center mt-10 mb-3">
            {/* Add your alphabetical order headers here */}
            {Array.from({ length: 26 }, (_, i) =>
              String.fromCharCode(65 + i)
            ).map((letter) => (
              <p
                onClick={() => scrollToLetter(letter)}
                key={letter}
                className="text-2xl text-black font-semibold"
              >
                {letter}
              </p>
            ))}
          </div>

          <hr />

          <div className=" my-8 flex items-center justify-between">
            <div className=" flex gap-8">
              <p className=" text-black font-bold text-sm uppercase">
                Featured
              </p>
              <p className=" text-gray-500 font-bold uppercase text-sm">
                popular
              </p>
              <p className=" text-gray-500 font-bold uppercase text-sm">All</p>
            </div>

            <div className=" w-[70%]">
              <Input
                placeholder={"Search"}
                className={" border  w-full py-2.5"}
              />
            </div>
          </div>

          {/* Display designers under each letter */}
          <div className="flex flex-col gap-5 justify-between items-center mt-10 mb-3">
            {Array.from({ length: 26 }, (_, i) =>
              String.fromCharCode(65 + i)
            ).map((letter) => (
              <div
                key={letter}
                className="flex gap-16 mt-10  w-full"
                id={letter}
              >
                <p
                  className=" text-5xl  text-black cursor-pointer"
                  onClick={() => scrollToLetter(letter)}
                >
                  {letter}
                </p>
                {groupedDesigners[letter]?.map((brand, index) => (
                  <Link
                    to={`/designers_details/${brand._id}`}
                    className="text-center"
                    key={index}
                  >
                    <p className="text-md  hover:font-bold pt-3 text-black">
                      {brand?.name}
                    </p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Designers;
