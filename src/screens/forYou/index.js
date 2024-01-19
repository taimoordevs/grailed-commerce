import React, { useEffect, useState } from "react";
import ProductSlider from "../../components/sliders/productSlider";
import Product from "../../components/cards/Product";
import DesignersCard from "../../components/cards/DesignersCard";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";

const ForYou = () => {
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

  const [designer, setDesigner] = useState([]);

  useEffect(() => {
    axios
      .post(`${Base_url}/getAllBrands`)
      .then((res) => {
        console.log(res);

        setDesigner(res.data.brands, "all products");
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <Navbar />
      <div className=" container mx-auto py-5">
        <h1 className="h1">For You</h1>

        {/* recommended for you */}

        <div className=" py-10">
          <h4 className="h4">Recommended For You</h4>
          <div className=" pt-3">
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
        </div>

        {/* Discover Daily */}

        <div className=" py-10">
          <h4 className="h4">Discover Daily</h4>
          <div className=" pt-3">
            <ProductSlider
              items={allProduct?.map((item, index) => {
                if (item?.discount > 10) {
                }
                return (
                  <>
                    <Product item={item} />
                  </>
                );
              })}
            />
          </div>
        </div>

        {/* Designers For You */}

        <div className=" py-10">
          <h4 className="h4">Designers For You</h4>
          <div className=" pt-3">
            <ProductSlider
              items={designer?.map((item, index) => {
                return (
                  <>
                    <DesignersCard item={item} />
                  </>
                );
              })}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForYou;
