import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import accountLogo from "../assets/account_thin.svg";
import searchIcon from "../assets/search.svg";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="w-full px-4 h-[72px] flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
          </Link>
        </div>

        <div className="hidden md:flex gap-5">
          <NavLink className="no-underline text-black font-normal" to="/">
            Home
          </NavLink>
          <NavLink className="no-underline  text-black font-normal" to="/gift">
            Gift
          </NavLink>
          <NavLink className="no-underline  text-black font-normal" to="/order">
            Order
          </NavLink>
          <NavLink className="no-underline  text-black font-normal" to="/pay">
            Pay
          </NavLink>
          <NavLink className="no-underline  text-black font-normal" to="/store">
            Store
          </NavLink>
        </div>

        <div className="hidden lg:flex w-[274px] h-[36px] border shadow-sm rounded-full px-[12px] py-[6px]">
          <img className="w-6" src={searchIcon} alt="search" />
          <input
            className="w-full outline-none border-none "
            type="text"
            placeholder="Looking for something specfic?"
          />
        </div>

        <div className="hidden md:flex">
          <img src={accountLogo} alt="account logo" />
        </div>

        <div onClick={handleClick} className="md:hidden z-20">
          {!nav ? (
            <HiBars3CenterLeft size={40} />
          ) : (
            <AiOutlineClose size={40} className="text-white" />
          )}
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "md:hidden absolute z-10 top-0 left-0 w-full h-screen bg-[#1E3932] flex flex-col justify-center items-center"
        }
      >
        <NavLink
          className="py-6 text-4xl no-underline text-white"
          onClick={handleClick}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="py-6 text-4xl no-underline text-white"
          onClick={handleClick}
          to="/gift"
        >
          Gift
        </NavLink>
        <NavLink
          className="py-6 text-4xl no-underline text-white"
          onClick={handleClick}
          to="/order"
        >
          Order
        </NavLink>
        <NavLink
          className="py-6 text-4xl no-underline text-white"
          onClick={handleClick}
          to="/pay"
        >
          Pay
        </NavLink>
        <NavLink
          className="py-6 text-4xl no-underline text-white"
          onClick={handleClick}
          to="/store"
        >
          Store
        </NavLink>
      </div>
    </>
  );
};
export default Navbar;
