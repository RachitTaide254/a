import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";

import './sideNav.css'

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const [isActive, setIsActive] = useState("")
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const history = useHistory();
  const sidenavTypes = {
    dark: "bg-[#0E0E23]",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };

  const handleClick = (e, layout, path, name) => {
    history.push(`/${layout}${path}`)
    setIsActive(name)
  }
  const handleNestedClick = (e, layout, path, name) => {
    e.stopPropagation();
    history.push(`/${layout}/${path}`)
  }

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 h-[calc(100vh-32px)] w-72 transition-transform duration-300 xl:translate-x-0`}
    >
      <div
        className={`relative ${sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
          }`}
      >
        <Link to="/" className="flex items-center gap-4 py-6 px-8">
          <img
            src="../../../public/img/aslLogo.png"
            className="width-221 height-28 py-4"
          />
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>
      <div className="">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1 sideNavCustom">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path, nestedRoutes = [] }) => (
              <li key={name} onClick={(e) => handleClick(e, layout, path, name, )} className={`flex flex-col ${isActive === name ? "active" : ""}`} >
                <span
                  className={`flex cursor-pointer hover:bg-[#E9ECF6] gap-4 text-white py-2 px-2 pl-8 ${isActive === name ? "bg-[#E9ECF6] text-[#6259CA]" : ""}`}
                  fullwidth
                >
                  {icon}
                  <span className="text-[17px] font-[500] leading-17.5"> {name}</span>

                </span>
                {
                  nestedRoutes.length > 0 &&
                  <ul key={key} className="mb-4 flex flex-col gap-1 sideNavCustom" style={{ display: isActive === name ? "block" : "none" }}>
                    {title}
                    {nestedRoutes.map(({ icon, name, path, nestedRoutes = [] }) => (
                      <li key={name}  onClick={(e) => handleNestedClick(e, layout, path, name)}>
                        <span
                          className={`flex gap-4 text-white py-2 px-2 pl-16 cursor-pointer`}
                          fullwidth
                        >
                          {icon}
                          <span className="text-[17px] font-[500] leading-17.5"> {name}</span>

                        </span>
                      </li>
                    ))}
                  </ul>
                }
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Material Tailwind React",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
