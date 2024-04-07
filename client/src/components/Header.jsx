import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import flagVN from "../assets/flag_vietnam.png";
const Header = () => {
  return (
    <div className="text-[12x] flex items-center justify-center w-full h-[50px] ">
      <div className="flex items-center justify-center">
        <img src={flagVN} className="w-[20px] h-[20px]" />
        <p>Vietnamese</p>
        <IoMdArrowDropdown className="w-[25px] h-[25px]" />
      </div>

      <div className="ml-5">
        <p>Tải ứng dụng Loship</p>
      </div>

      <button className="hover:border-red-600 hover:text-red-600 ml-2 px-2 py-1/2 border-2 rounded-lg border-black">
        <p>IOS</p>
      </button>

      <button className="hover:border-red-600 hover:text-red-600 ml-2 px-2 py-1/2 border-2 rounded-lg border-black">
        <p>Android</p>
      </button>

      <div className="ml-2">
        <p>- hoặc -</p>
      </div>

      <div className="hover:cursor-pointer flex items-center justify-center ml-2">
        <p>+84</p>
        <IoMdArrowDropdown className="w-[25px] h-[25px]" />
      </div>
      <div>
        <input className="border-2 border-black rounded-md px-1" placeholder="Nhap so dien thoai" />
      </div>

      <div>
        <button className="border-2 border-black rounded-md ml-2">Gui link</button>
      </div>

      <div className="ml-5">
        <button>Trở thành đối tác Loship</button>
      </div>

      <div className="ml-5">
        <button>Đi chợ với Lomart</button>
      </div>

      <div className="ml-5">
        <button>Loship Hỏi đáp</button>
      </div>
    </div>
  );
};

export default Header;
