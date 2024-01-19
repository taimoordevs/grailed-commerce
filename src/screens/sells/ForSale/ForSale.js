import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../../../components/cards/Product";
import { Base_url } from "../../../utils/Base_url";

const ForSale = () => {
  const storedUser = localStorage.getItem("user_ID") || undefined;
  const userStore = localStorage.getItem("userStore_ID") || undefined;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .post(`${Base_url}/getAllProductsInStore/${storedUser}/${userStore}`)
      .then((res) => {
        console.log(res);

        setUsers(res.data.user);
      })
      .catch((error) => {});
  }, []);
  return (
    <div>
      {users ? (
        <>
          <div>
            {users?.store?.products?.map((item, index) => {
              return (
                <>
                  <Product item={item} />
                </>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h1 className="h2">For Sale</h1>
          <p className=" text-black  text-xl font-semibold mt-8">
            You have no items for sale.
          </p>
        </>
      )}
    </div>
  );
};

export default ForSale;
