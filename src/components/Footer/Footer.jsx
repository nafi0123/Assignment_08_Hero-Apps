import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <img className="h-12 w-12 rounded-lg" src={logo} alt="Logo" />
          <div>
            <h2 className="text-lg font-semibold">We Build Productive Apps</h2>
            <p className="text-sm opacity-80">
              Turning ideas into scalable digital products.
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="#" className="hover:scale-110 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.924 2.206-4.924 4.924 0 .386.044.762.127 1.124C7.691 8.832 4.066 6.882 1.64 3.905a4.902 4.902 0 0 0-.666 2.475c0 1.708.87 3.213 2.19 4.096a4.903 4.903 0 0 1-2.229-.616v.06c0 2.385 1.693 4.374 3.946 4.828a4.935 4.935 0 0 1-2.224.085 4.928 4.928 0 0 0 4.6 3.419A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.055 0 14.01-7.496 14.01-13.986 0-.213-.004-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-6 border-t border-white/20 pt-4 text-sm opacity-80">
        © {new Date().getFullYear()} We Build Productive Apps — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
