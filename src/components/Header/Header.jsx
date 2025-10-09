import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaHome, FaAppStoreIos, FaDownload } from "react-icons/fa";

const Header = () => {
  const navItemStyle = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition duration-300 ${
      isActive
        ? "text-[#632EE3] "
        : "text-gray-700 hover:text-[#632EE3] hover:bg-gray-100"
    }`;

  const links = (
<>
  <NavLink
    to="/"
    className={`${navItemStyle} flex justify-center items-center md:mr-2`}
  >
    <FaHome className="text-lg md:mr-2" /> Home
  </NavLink>

  <NavLink
    to="/app"
    className={`${navItemStyle} flex justify-center items-center md:mr-2`}
  >
    <FaAppStoreIos className="text-lg md:mr-2" /> Apps
  </NavLink>

  <NavLink
    to="/installation"
    className={`${navItemStyle} flex justify-center items-center md:mr-2`}
  >
    <FaDownload className="text-lg md:mr-2" /> Installation
  </NavLink>
</>


  );

  return (
    <div className="bg-[#E9E9E9]">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <div className="flex items-center">
              <img className="h-[40px] w-[40px]" src={logo} alt="" />
              <h2>HERO.IO</h2>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/nafi0123"
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
          >
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
