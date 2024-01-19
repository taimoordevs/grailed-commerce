import React, { useEffect, useState } from "react";
import HomeBanner from "../../components/HomeBanner";
import Category from "../../components/category";
import ShopBanner from "../../components/shopbanner";
import PopularBrands from "../../components/popularBrands";
import ProductSlider from "../../components/sliders/productSlider";
import { FaLongArrowAltRight } from "react-icons/fa";
import Featureds from "../../components/Featureds";
import Product from "../../components/cards/Product";
import axios from "axios";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Base_url } from "../../utils/Base_url";

const Home = () => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    axios
      .post(`${Base_url}/getAllProducts`)
      .then((res) => {
        console.log(res);

        setAllProduct(res.data, "all products");
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <Navbar />
      <HomeBanner />
      <div className=" container mx-auto pb-10">
        <Category />
        <div className=" flex  px-4 items-center justify-between">
          <h4 className=" h4">Recently Viewed</h4>
        </div>
        <ProductSlider
          items={allProduct.map((item, index) => {
            return (
              <>
                <Product item={item} />
              </>
            );
          })}
        />
      </div>

      <Featureds />
      <PopularBrands />

      <div className=" container mx-auto py-10">
        <div className=" flex items-center px-4  justify-between">
          <div>
            <h4 className=" text-black font-medium text-xl">Staff Picks</h4>
          </div>
          <div>
            <p className=" text-xs flex items-center gap-1 text-[#0000FF]   font-extrabold">
              {" "}
              <span>SEE ALL </span> <FaLongArrowAltRight color="#0000FF" />{" "}
            </p>
          </div>
        </div>
        <ProductSlider
          items={allProduct.map((item, index) => {
            return (
              <>
                <Product item={item} />
              </>
            );
          })}
        />
      </div>
      <ShopBanner />
      <Footer />
    </div>
  );
};

export default Home;
