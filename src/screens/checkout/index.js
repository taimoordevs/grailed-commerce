import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
    } else {
      // Send the token to your server for processing
      console.log(token);
    }
  };



  const [allProduct, setAllProduct] = useState([]);
  
  const {id} = useParams();

  useEffect(() => {
    axios
      .post(`http://34.84.41.203:4142/api/getSingleProduct/${id}`)
      .then((res) => {
        console.log(res);

        setAllProduct(res.data, "all products");
      })
      .catch((error) => {});
  }, []);
  return (
    <>
      <div className=" flex border-b justify-between items-center px-10 h-20">
        <div>
          <h1 className=" md:text-4xl  text-2xl text-black font-semibold">
            {" "}
            GRAILED
          </h1>
        </div>
        <div>
          <h3 className="h4">Item Checkout</h3>
        </div>
        <div></div>
      </div>
      <div className="  mx-auto">
      <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>

        <div className=" flex">
          <div className=" w-[50%]">
            <h5 className="h6  px-10 pt-12 pb-5">Shipping Address</h5>
            <div className=" px-10">
              <div className=" border  p-4">
                <div className="">
                  <p>ghulam mustafa</p>
                  <h6>2</h6>
                  <h6>state</h6>
                  <h6>lahore, state 412100</h6>
                  <span>india</span>
                </div>
                <div></div>
              </div>
            </div>
            <h5 className="h6  px-10 pt-10 pb-5">Select Your Payment Method</h5>
          </div>
          <div className=" w-[50%]  pt-10  h-[85vh] bg-gray-50">
            <div className=" p-10">
              <div className=" p-4 flex gap-3 border">
                <div className=" w-28">
                  <img
                    src={allProduct?.images?.[0]}
                    className="   w-full h-24 object-cover "
                    alt=""
                  />
                </div>
                <div className=" w-full flex justify-between items-center">
                  <div>
                    <span className="  text-black  text-sm font-bold">
                      Pleasures
                    </span>
                    <p className=" text-sm text-gray-500 pt-2">
                      Pleasures Vintage Hat Winter Streetwear Y2K
                    </p>
                    <p className="text-sm text-gray-500">Size: one size</p>
                    <p className="text-sm text-gray-600 font-semibold pt-1">
                      Seller:{" "}
                      <span className=" border-b border-black">Squad5150</span>
                    </p>
                  </div>
                  <div>
                    <span className=" text-black font-bold text-sm">$27</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h5 className="h6">Order Details</h5>

                <ul className=" pt-3">
                  <li className=" flex justify-between items-center">
                    <span className=" text-gray-600 text-sm">
                      Listing Price
                    </span>
                    <span className=" text-gray-600 text-sm  font-bold">
                      $27
                    </span>
                  </li>
                  <li className=" pt-2 flex justify-between items-center">
                    <span className=" text-gray-600 text-sm">Shipping</span>
                    <span className=" text-gray-600 text-sm  font-bold">
                      $20
                    </span>
                  </li>
                  <hr className=" my-3" />
                  <li className=" pt-2 flex justify-between items-center">
                    <span className=" text-black font-bold  uppercase">
                      order total
                    </span>
                    <span className=" text-black  font-bold">$47</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
