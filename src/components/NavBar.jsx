import { Menu, Search, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";
import { motion } from "motion/react";

const NavBar = () => {
  const [searchShown, setSearchShown] = useState(false);
  const [navShown, setNavShown] = useState(false);
  return (
    <div>
      <nav className="flex fixed laptop:relative top-0 z-10 w-full bg-background justify-between p-5 laptop:p-10 items-center">
        <NavLink to="/">
          <img className="w-32 laptop:w-40" src="/logo.svg" alt="logo" />
        </NavLink>
        <div className="lap-navs hidden text-white laptop:flex items-center gap-5 text-[20px]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About Us</NavLink>
          <NavLink to="our-store">Our Store</NavLink>
          <NavLink to="menu">Menu</NavLink>
          <input
            className="border-yellows placeholder:text-white pl-5 border-2 h-11 w-48"
            placeholder="Search"
            type="search"
          />
        </div>
        <div className="flex laptop:hidden gap-5 transition-all duration-[0.3s] ease-in-out">
          <input
            type="search"
            className={`${
              searchShown ? "block" : "hidden"
            } border text-white placeholder:text-white pl-2 rounded-md border-yellows w-36`}
            placeholder="Search..."
          />
          <motion.div
            whileTap={{
              scale: 1.1,
            }}
          >
            <Search
              size={28}
              onClick={() => {
                setSearchShown(!searchShown);
              }}
              className="cursor-pointer"
              color="#f2b90c"
            />
          </motion.div>

          <motion.div
            whileTap={{
              scale: 1.1,
            }}
          >
            {!navShown ? (
              <Menu
                size={28}
                onClick={() => {
                  setNavShown(!navShown);
                }}
                className="cursor-pointer"
                color="#f2b90c"
              />
            ) : (
              <X
                size={28}
                onClick={() => {
                  setNavShown(!navShown);
                }}
                className="cursor-pointer"
                color="#f2b90c"
              />
            )}
          </motion.div>
        </div>
      </nav>
      <div
        className={`${
          navShown ? "block" : "hidden"
        } flex flex-col gap-3 items-center bg-white h-42 fixed top-16 w-full p-5 justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`}
      >
        <NavLink
          onClick={() => {
            setNavShown(!navShown);
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            setNavShown(!navShown);
          }}
          to="about"
        >
          About Us
        </NavLink>
        <NavLink
          onClick={() => {
            setNavShown(!navShown);
          }}
          to="our-store"
        >
          Our Store
        </NavLink>
        <NavLink
          onClick={() => {
            setNavShown(!navShown);
          }}
          to="menu"
        >
          Menu
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
