import React, { useEffect, useState } from "react";
import Tabs from "../../components/Tabs";
import Product from "../../components/cards/Product";
import Button from "../../components/Button";
import DesignersCard from "../../components/cards/DesignersCard";
import axios from "axios";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Base_url } from "../../utils/Base_url";

const Favorites = () => {
  const storedUser = localStorage.getItem("user_ID") || undefined;
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

  const TabContent1 = () => (
    <div>
      {allProduct
        .filter((item) => item?.likes?.includes(storedUser))
        .map((item, index) => (
          <Product key={index} item={item} />
        ))}
    </div>
  );
  const TabContent2 = () => (
    <div className=" text-center pt-3">
      <div>
        <div className=" w-28 h-28  mx-auto border-4 border-gray-300  rounded-full"></div>

        <p className=" pt-6">
          You haven't followed any searches yet. <br />
          Start following searches to view them here.
        </p>
        <Button
          label={"shop the feed"}
          className={
            " uppercase mt-4 text-xs mx-auto  border py-3 border-black text-black font-semibold "
          }
        />
      </div>
    </div>
  );
  const TabContent3 = () => (
    <div className=" text-center pt-3">
      <DesignersCard />
    </div>
  );

  const TabContent4 = () => (
    <div className=" text-center pt-3">
      <div>
        <div className=" w-28 h-28  mx-auto border-4 border-gray-300  rounded-full"></div>

        <p className=" pt-6">
          You haven't followed any searches yet. <br />
          Start following searches to view them here.
        </p>
        <Button
          label={"Browse the feed"}
          className={
            " uppercase mt-4 text-xs mx-auto  border py-3 border-black text-black font-semibold "
          }
        />
      </div>
    </div>
  );

  const TabContent5 = () => (
    <div className=" text-center pt-3">
      <div>
        <div className=" w-28 h-28  mx-auto border-4 border-gray-300  rounded-full"></div>

        <p className=" pt-6">
          You haven't followed any searches yet. <br />
          Start following searches to view them here.
        </p>
        <Button
          label={"Browse collections"}
          className={
            " uppercase mt-4 text-xs mx-auto  border py-3 border-black text-black font-semibold "
          }
        />
      </div>
    </div>
  );

  const tabData = [
    { title: "Listings", content: <TabContent1 /> },
    { title: "Searches", content: <TabContent2 /> },
    { title: "Designers", content: <TabContent3 /> },
    { title: "Sellers", content: <TabContent4 /> },
    { title: "Collections", content: <TabContent5 /> },
  ];
  const defaultTab = "Listings";
  return (
    <>
      <Navbar />
      <div className=" container mx-auto">
        <div className=" py-8 text-center">
          <h1 className="h2">Favorites</h1>
          <p className=" text-gray-400 pt-4">
            You will be notified when your favorite listings drop in price or
            are relisted.
          </p>
        </div>

        <div className="container mx-auto mt-8">
          <Tabs tabs={tabData} defaultTab={defaultTab} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
