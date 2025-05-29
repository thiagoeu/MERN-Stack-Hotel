import React from "react";
import { FaHotel } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <header className="shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">
        <div className="flex items-center">
          <FaHotel color="#121063" size={40} />
          <p className="text-primary text-2xl font-bold">Hotels</p>
        </div>
        <div className="flex items-center rounded-full border border-gray-300 px-6 py-2 shadow-md">
          <p className="border-r border-r-gray-300 pr-4">Qualquer lugar</p>
          <p className="border-r border-r-gray-300 px-4">Qualquer semana</p>
          <p className="px-4">Hospedes</p>
          <div className="bg-primary bold rounded-full p-2 text-white">
            <BsSearch size={10} />
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-2 shadow-md">
          <div className="">
            <FaCircleUser color="lightgray" size={20} />
          </div>
          <p className="">Usuario</p>
          <div className="">
            <LuMenu color="lightgray" size={20} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
