import { useState } from "react";
import Link from "./Link";
import logo from "../assets/icons/logo.svg";
import close from "../assets/icons/icon-close.svg";
import hamburger from "../assets/icons/icon-hamburger.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const menus = [
    { id: 0, name: "HOME", path: "/" },
    { id: 1, name: "DESTINATION", path: "/destination" },
    { id: 2, name: "CREW", path: "/crew" },
    { id: 3, name: "TECHNOLOGY", path: "/technology" },
  ];

  function updateIsOpening() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="font-medium tracking-widest text-white font-Barlow">
      <div className="px-8 pt-8">
        <img src={logo} className="p-2 mt-4 rounded-lg" />
        <div className="fixed top-20 left-36 bg-zinc-600 desktop:w-full desktop:h-[1.5px]"></div>
        <img
          src={!isOpen ? hamburger : close}
          onClick={updateIsOpening}
          className="absolute z-20 p-5 mt-5 cursor-pointer top-7 right-6 desktop:hidden"
        />

        <ul
          className={`fixed top-0  bg-clr-menu backdrop-blur-xl pl-7 pt-24 h-screen w-[70vw] duration-700 ease-in-out desktop:max-w-3xl desktop:min-w-[600px] desktop:text-center desktop:grid desktop:grid-cols-4 desktop:grid-rows-1 desktop:gap-4 desktop:h-auto desktop:top-8 desktop:pt-1 desktop:text-lg
           ${isOpen ? "right-0" : "right-[-100%]"}`}
        >
          {menus.map((menu, i) => (
            <Link key={i} to={menu.path} activeClassName="border-b-2 w-32">
              <li className="pt-8 mr-5 cursor-pointer desktop:pb-8">
                <a className="duration-100 pb-8">
                  <span className="mr-2 font-bold">0{i}</span>
                  {menu.name}
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
