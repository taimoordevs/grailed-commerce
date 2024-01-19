import React, { useEffect, useState } from "react";
import CategoryCard from "../cards/CategoryCard";
import axios from "axios";

const Category = () => {
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    axios
      .post("http://34.84.41.203:4142/api/getAllDepartments")
      .then((res) => {
        console.log(res);

        setAllCategory(res.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className=" container px-4 mx-auto  py-10">

      {allCategory?.map((item,index)=>{
        return (
          <> 
          
          <h4 className="  pt-8 text-black font-medium text-xl capitalize">Shop {item?.name}</h4>

          <div className="grid item1 col-span-2  mt-3  xl:grid-cols-6  grid-cols-2 gap-5">
            {item?.categories?.map((item, index) => {
              return (
                <>
                  <CategoryCard url={`/categories/${item?._id}`} image={item?.image} name={item?.name}   />
                </>
              );
            })}
          </div>
          
          </>
        )
      })}
     
    </div>
  );
};

export default Category;
