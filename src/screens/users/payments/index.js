import React from "react";
import Tabs from "../../../components/Tabs";
import Product from "../../../components/cards/Product";
import Button from "../../../components/Button";
import DesignersCard from "../../../components/cards/DesignersCard";

const Payments = () => {
  const TabContent1 = () => (
    <div>
      <Product />
      <Product />
      <Product />
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

  const tabData = [
    { title: "saved cards", content: <TabContent1 /> },
    { title: "payment methods", content: <TabContent2 /> },
    { title: "Business registration", content: <TabContent3 /> },
  ];
  const defaultTab = "Listings";
  return (
    <div className=" container mx-auto">
      <div className="">
        <h1 className="h3">Payments</h1>
      </div>

      <div className=" mt-8">
        <Tabs tabs={tabData} className={" w-auto"} defaultTab={defaultTab} />
      </div>
    </div>
  );
};

export default Payments;
