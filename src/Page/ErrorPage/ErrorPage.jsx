import React from "react";
import Error from "../../assets/error-404.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="bg-gray-50">
      <Header></Header>
      <div className="flex flex-col justify-center items-center my-2 text-center p-5 md:p-0">
        <div>
          <img src={Error} alt="" />
        </div>
        <h4 className="text-[25px] md:text-[48px] font-bold">Oops, page not found!</h4>
        <p className="text=[17px] md:text-[20px]">
          The page you are looking for is not available.
        </p>
        <Link to="/">
          <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            Home
          </a>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
