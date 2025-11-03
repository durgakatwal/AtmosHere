import React from "react";
import Button from "./Button";

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
            <a className="text-md text-gray-700" href="/features">
              Features
            </a>
            <a className="text-md text-gray-700" href="/about">
              About
            </a>
            <a className="text-md text-gray-700" href="/contact">
              Contact
            </a>
          </div>

          <a href="/weather">
            <Button text="Show weather" />
          </a>
          {/* example of props */}
          {/* <Button text="Login" />  */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
