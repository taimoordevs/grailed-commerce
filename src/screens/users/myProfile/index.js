import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import Option from "../../../components/Option";
import axios from "axios";
import { Base_url } from "../../../utils/Base_url";
import { toast } from "react-toastify";
import Button from "../../../components/Button";

const MyProfile = () => {
  const storedUser = localStorage.getItem("user_ID");
  const options = ["New/Never  Worn", "Gently Used", "Used", "Very Worn"];

  const handleSelect = (selectedOptions) => {
    console.log("Selected options:", selectedOptions);
  };
 const [users,setUsers] = useState([])

    useEffect(()=>{

      axios
      .post(`${Base_url}/getSingleUser/${storedUser}`)
      .then((res) => {
        console.log(res);

        setUsers(res.data.user);
      })
      .catch((error) => {});

    },[])
  const bannerSubmit = async (values) => {
    const params = {
      bio:values.bio.value,
      name:values.name.value,
      location:values.location.value,
    };
    await axios
      .post(`${Base_url}/users/${storedUser}/profile`, params)
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          toast.success("User Update Successfully!");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className=" w-[70%]">
      <h1 className=" h2">My Account</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          bannerSubmit(e.target);
        }}
        className=" pt-10"
      >
        <h4 className="h3">Edit Profile</h4>

        <div className=" flex gap-4 w-full">
          <div className=" w-[50%]">
            <Input
              placeholder={"Username"}
              name={'name'}
              label={"Username"}
              className={"border  w-full"}

              defaultValue={users?.name}
            />
          </div>
          <div className=" w-[50%]">
            <Input
              placeholder={"Gmail"}
              label={"Username"}
              className={"border  w-full"}
              
              defaultValue={users?.email}
            />
          </div>
        </div>
        <div className=" pt-2 w-[50%]">
          <label className=" text-sm font-medium">Location</label>
          <Option options={options} onSelect={handleSelect} />
        </div>
        <div className=" pt-2 ">
          <label className=" text-sm font-medium">Bio</label>
          <textarea rows={7} name="bio" defaultValue={users?.bio} className=" p-3 w-full border" />
        </div>

        <Button
          type={"submit"}
          label={"Update Profile"}
          className={"bg-black  text-white  py-3 w-full mt-4"}
        />
      </form>
    </div>
  );
};

export default MyProfile;
