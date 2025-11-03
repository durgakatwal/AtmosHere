import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="shadow">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-20 py-6">
        <a href="/">
          <h2 className="text-2xl lg:text-3xl text-purple-500 font-bold">
            AtmosHere
          </h2>
          <p className="text-sm text-gray-500">Because Every Moment Matters</p>
        </a>
        <nav className="flex gap-6">
          <div className="hidden lg:flex gap-4 items-center">
            <Link className="text-md text-gray-700" to="/features">
              Features
            </Link>
            <Link className="text-md text-gray-700" to="/about">
              About
            </Link>
            <Link className="text-md text-gray-700" to="/contact">
              Contact
            </Link>
          </div>

          <Link to="/weather">
            <Button text="Show weather" />
          </Link>
          {/* example of props */}
          {/* <Button text="Login" />  */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
