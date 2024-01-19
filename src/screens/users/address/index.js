import React, { useState } from "react";
import Modal from "../../../components/modal";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { MdClose } from "react-icons/md";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Base_url } from "../../../utils/Base_url";
const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Use the useForm hook to create a form instance
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const storedUser = localStorage.getItem("user_ID");

  console.log("Stored User:", storedUser);

  let id;
  try {
    // Attempt to parse the JSON string
    id = storedUser? JSON.parse(storedUser) : {};
    console.log("Parsed ID:", id);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  console.log(id);

  // Define a function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // data contains the form values

    const parms = {
      userId: storedUser,
      newAddress: {
        name: data.name,
        street: data.street,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        country: data.country,
      },
    };

    axios
      .post(`${Base_url}/getAllBrands`, parms)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {});
  };

  return (
    <div>
      <div className=" flex justify-between items-center">
        <div>
          <h3 className="h3">Address</h3>
          <p>
            You have no saved addresses.{" "}
            <Link to={""} className=" text-black ">
              Add a new address
            </Link>{" "}
          </p>
        </div>
        <div>
          <Button
            onClick={openModal}
            label={"+ Add  new address"}
            className={
              "border border-black py-2  font-extrabold uppercase text-xs text-black bg-white"
            }
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} className={" max-w-xl"}>
        {/* Modal Content */}
        <div className="">
          <div className=" p-3 flex justify-between items-center">
            <div></div>
            <h1 className="capitalize h4">Add address</h1>
            <MdClose size={25} />
          </div>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)} className=" p-5">
            <div className=" flex gap-5 flex-wrap">
              <div className=" w-full">
                <Input
                  label={"Name"}
                  placeholder={""}
                  className={`border  rounded-sm w-full  py-3 ${
                    errors.name ? " border-red-600" : ""
                  }`}
                  {...register("name", { required: "required" })}
                />
                {errors.name && (
                  <p className=" text-red-600 text-sm  font-semibold capitalize">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className=" w-[100%]">
                <Input
                  label={"Street address"}
                  placeholder={""}
                  className={`border  rounded-sm w-full  py-3 ${
                    errors.name ? " border-red-600" : ""
                  }`}
                  {...register("street", { required: "required" })}
                />
                {errors.street && (
                  <p className=" text-red-600 text-sm  font-semibold capitalize">
                    {errors.street.message}
                  </p>
                )}
              </div>
              {/* <div className=" w-[36%]">
                <Input
                  label={"Apt/Suite"}
                  placeholder={""}
                  className={"border  w-full  py-3"}
                />
              </div> */}
              <div className=" w-[60%]">
                <Input
                  label={"City"}
                  placeholder={""}
                  className={`border  rounded-sm w-full  py-3 ${
                    errors.name ? " border-red-600" : ""
                  }`}
                  {...register("city", { required: "required" })}
                />
                {errors.city && (
                  <p className=" text-red-600 text-sm  font-semibold capitalize">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div className=" w-[36%]">
                <Input
                  label={"State"}
                  placeholder={""}
                  className={`border  rounded-sm w-full  py-3 ${
                    errors.name ? " border-red-600" : ""
                  }`}
                  {...register("state", { required: "required" })}
                />
                {errors.state && (
                  <p className=" text-red-600 text-sm  font-semibold capitalize">
                    {errors.state.message}
                  </p>
                )}
              </div>
              <div className=" w-[60%]">
                <Input
                  label={"Country"}
                  placeholder={""}
                  className={`border  rounded-sm w-full  py-3 ${
                    errors.name ? " border-red-600" : ""
                  }`}
                  {...register("country", { required: "required" })}
                />
                {errors.country && (
                  <p className=" text-red-600 text-sm  font-semibold capitalize">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div className=" w-[36%]">
                <Input
                  label={"ZIP code"}
                  placeholder={""}
                  className={`border  rounded-sm w-full  py-3 ${
                    errors.name ? " border-red-600" : ""
                  }`}
                  {...register("zipCode", { required: "required" })}
                />
                {errors.zipCode && (
                  <p className=" text-red-600 text-sm  font-semibold capitalize">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>
            </div>

            <p className=" text-black text-xs py-4">
              This address will be set as your Default Return Address. You can
              always change this in Settings under Addresses.
            </p>
            <Button
              label={"save address"}
              className={" bg-black  uppercase text-white py-2 w-full"}
            />
          </form>
        </div>

        {/* Close button */}
        {/* <div className="bg-gray-100 p-4">
          <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded">
            Close Modal
          </button>
        </div> */}
      </Modal>
    </div>
  );
};

export default Address;
