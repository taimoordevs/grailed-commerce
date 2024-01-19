import React, { useState } from "react";
import { motion } from "framer-motion";

const NavigationDesktop = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const navLinksData = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
      children: [
        {
          id: 21,
          name: "Company",
        },
        {
          id: 22,
          name: "Team",
        },
      ],
    },
    {
      id: 3,
      name: "Services",
      children: [
        {
          id: 31,
          name: "Service 1",
        },
        {
          id: 32,
          name: "Service 2",
        },
      ],
    },
    {
      id: 4,
      name: "Contact",
    },
  ];

  const subMenuOnMouseEnterHandler = (subMenuId) => {
    setActiveSubMenu(subMenuId);
  };

  const subMenuOnMouseLeaveHandler = () => {
    setActiveSubMenu(null);
  };

  return (
    <nav>
      <ul className="main-nav">
        {navLinksData.map((el) => (
          <li
            key={el.id}
            onMouseEnter={() => subMenuOnMouseEnterHandler(el.id)}
            onMouseLeave={subMenuOnMouseLeaveHandler}
            className={`header-nav-options options-hover ${
              activeSubMenu === el.id ? "active" : ""
            }`}
          >
            <div className="header-nav-div">
              <span>{el.name}</span>
            </div>
            <motion.ul
              variants={variants}
              animate={activeSubMenu === el.id ? "open" : "closed"}
              className="header-nav-ul"
            >
              {el.children &&
                el.children.map((ele) => (
                  <li
                    key={ele.id}
                    className={`sub-menu-options sub-menu-hover ${
                      activeSubMenu === ele.id ? "active" : ""
                    }`}
                  >
                    <div className="sub-menu-div">
                      <span>{ele.name}</span>
                      <span className="arrow">{"-->"}</span>
                    </div>
                    <motion.ul
                      variants={variants}
                      animate={activeSubMenu === ele.id ? "open" : "closed"}
                      className="sub-menu-ul"
                    >
                      {ele.children &&
                        ele.children.map((elem) => (
                          <li key={elem.id} className="grand-child-link">
                            <a href="#">
                              <span>{elem.name}</span>
                            </a>
                          </li>
                        ))}
                    </motion.ul>
                  </li>
                ))}
            </motion.ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationDesktop;