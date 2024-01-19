import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

const ContactUs = () => {
  return (
    <div className=" py-12 ">
      <div className="  w-[70%]  mx-auto">
        <h1 className=" font-bold  text-4xl text-black">Contact Us</h1>
        <div className=" py-4">
          <h5 className=" font-bold text-xl text-black">How can we help?</h5>
          <p className="">
            Check out our <Link to={""}>help center</Link> for quick solutions.
          </p>
        </div>

        <form>
          <div className=" flex flex-col gap-4">
            <Input
              placeholder={"email@example.com"}
              label={"Email Address"}
              className={" w-full border"}
            />
            <Input
              placeholder={"email@example.com"}
              label={"Listing URL"}
              className={" w-full border"}
            />
            <div>
              <label className="  font-medium  text-sm">
                I need help with...
              </label>
              <select className=" w-full border py-2  bg-lightGray  p-1.5 text-primary placeholder:text-primary ">
                <option>Select a request category...</option>
                <option>Select a request category...</option>
                <option>Select a request category...</option>
                <option>Select a request category...</option>
                <option>Select a request category...</option>
              </select>
            </div>
            <div>
            <label className="  font-medium  text-sm">
                screenshot
              </label>
              <Button
                label={"upload Photo"}
                className={"  w-96 border py-2 border-black"}
              />
            </div>

            <div>
              <label className="  font-medium  text-sm">
                Describe you issue in a few words
              </label>
              <textarea
                rows={3}
                placeholder={
                  "If this is about an item you have purchased or sold, please include a link or screenshot  to the listing."
                }
                label={"Message:"}
                className={"   p-2 rounded-md border w-full"}
              />
            </div>
            <Button
              label={"SEND"}
              className={" bg-black text-white w-52 py-3"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
