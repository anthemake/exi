import React from "react";

const Navbar = () => {
  return (
    <nav className="border-solid border-b-2 border-b-slate-500 flex items-center max-sm:bg-slate-700 shadow-xl max-sm:rounded">
      <img
        src="/img/coins.svg"
        alt="coins"
        className="cursor-pointer top-182 bottom-0 right--410 fixed h-full w-full opacity-10 pointer-events-none"
      />
      <img src="/img/exchange512.png" alt="exchange" className="w-10 h-10" />
      <ul>
        <li className="list-none inline-block px-5">
          <a href="/" className="no-underline text-white hover:text-slate-400">
            Home
          </a>
        </li>
        <li className="list-none inline-block px-5">
          <a
            href="/about"
            className="no-underline text-white hover:text-slate-400"
          >
            About
          </a>
        </li>
        <li className="list-none inline-block px-5">
          <a
            href="/news"
            className="no-underline text-white hover:text-slate-400"
          >
            News
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
