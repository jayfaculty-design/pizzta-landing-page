import { Menu, Search, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";
import { motion } from "motion/react";

const NavBar = () => {
  const [searchShown, setSearchShown] = useState(false);
  const [navShown, setNavShown] = useState(false);
  return (
    <div>
      <nav className="flex fixed top-0 z-10 w-full bg-background justify-between p-5 items-center">
        <NavLink to="/">
          <img className="w-32" src="/logo.svg" alt="logo" />
        </NavLink>
        <div className="flex gap-5 transition-all duration-[0.3s] ease-in-out">
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
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Our Store</NavLink>
        <NavLink>Menu</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
