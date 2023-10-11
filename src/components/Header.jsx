import React, { useState } from "react";

import main from '../main.png;'
// import Logo from "../assets/img/flowerLogo.png";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

import { FaBars } from "react-icons/fa";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0">
      <div className=" container mx-auto">
        <div className="relative flex items-center justify-between">
          <div
            className="flex items-center gap-x-[110px]"
            data-aos="zoom-in"
            data-aos-delay="1200"
            data-aos-duration="1000"
          >
            <a href="#">
              <img src={Logo} alt="" className="w-10" />
            </a>

            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>

          <div
            className={` ${
              navMobile ? "max-h-52" : "max-h-0"
            } mobile bg-accent-tertiary lg:hidden absolute top-24 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>

          <div
            onClick={() => setNavMobile(!navMobile)}
            className="lg:hidden text-2xl text-primary cursor-pointer"
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
