import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center  text-white ">
      <div className=" w-80 h-11 mt-0 p-0">
        <img
          src="https://media.discordapp.net/attachments/1164497786964803585/1213171873886773318/Group_2.png?ex=65f4815a&is=65e20c5a&hm=8656bfcb0f35ab59bb06f94a9f42a6367b240d744e00395b5298a16c3d9bf0a2&=&format=webp&quality=lossless&width=792&height=496"
          alt="Company Logo"
          className=" mt-0 w-80"
        />
      </div>

      <div className="mr-11 mt-9 ">
        <button className="mr-12 font-normal text-white text-xl px-4 py-2 rounded ">
          Login
        </button>
        <button className="border-2 border-[#F46A5F] text-white px-1  rounded-full w-32 text-xl h-10 font-normal ">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
export default Navbar;