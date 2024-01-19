import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { links } from "./MyLinks";
import axios from "axios";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const iconSize = "12px";
  const [subHeading, setSubHeading] = useState("");

  const [allCategory, setAllCategory] = useState([]);

  const navigate = useNavigate();

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
    <>
      {allCategory &&
        allCategory?.map((mainCategory) => (
          <div key={mainCategory.id}>
            <div className="px-3 text-left md:cursor-pointer group">
              <h1
                className="py-7 lg:text-xs text-xl  font-bold lg:uppercase flex justify-between items-center md:pr-0 pr-5 group"
                onClick={() => {
                  heading !== mainCategory.name
                    ? setHeading(mainCategory.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
                {mainCategory.name}
                <span className="text-xl md:hidden inline">
                  <ion-icon
                    name={`${
                      heading === mainCategory?.name
                        ? "chevron-up"
                        : "chevron-down"
                    }`}
                  ></ion-icon>
                </span>
                {/* <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2"> */}
                <span className=" ml-1 mt-1">
                <ion-icon
                    name="caret-down-outline"
                    style={{ fontSize: iconSize}}
                  ></ion-icon>
                </span>
               
                {/* </span> */}
              </h1>
              {mainCategory.categories && (
                <div className="">
                  <div className="absolute z-50 border top-14 hidden group-hover:md:block hover:md:block">
                    <div className=""></div>
                    <div className="bg-white p-4 w-48 gap-10">
                      <h1 className="text-sm font-medium leading-8 uppercase">
                        All categories
                      </h1>
                      {mainCategory.categories.map((subCategory) => (
                        <div
                          key={subCategory.id}
                          className="flex justify-between group  items-center"
                        >
                          <Link
                            to={`/categories/${subCategory._id}`}
                            className="text-sm font-medium leading-9 uppercase"
                          >
                            {subCategory.name}
                          </Link>
                          <sapn className="">
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                          </sapn>
                          {subCategory.subcategories && (
                            <div className="absolute z-50 border top-0 -right-44 p-4 bg-white hidden w-44">
                              {subCategory.subcategories.map(
                                (subSubCategory) => (
                                  <li
                                    key={subSubCategory.id}
                                    className="text-sm text-gray-600 my-2.5"
                                  >
                                    <Link
                                      to={subSubCategory.link}
                                      className="hover:text-primary leading-8 text-sm uppercase font-medium text-black"
                                    >
                                      {subSubCategory.name}
                                    </Link>
                                  </li>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

      {/* Mobile menus
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            sublinks
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
    </>
  );
};

export default NavLinks;
