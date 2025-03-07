import { GiHamburgerMenu } from "react-icons/gi";
import { NAV_DATA } from "./data/navData";
import { IoCloseSharp } from "react-icons/io5";

export const HamburgerBar = ({ isOpen, handleMenuToggle, setIsOpen }) => {
  return (
    <>
      <div>
        <button onClick={handleMenuToggle}>
          <GiHamburgerMenu className="h-10 w-10 text-white md:hidden flex" />
        </button>
      </div>
      <div
        className={`absolute bg-orange-500 top-0 left-0 w-screen h-screen ${
          isOpen ? "" : "hidden"
        }`}
        ref={menuRef}
      >
        <button onClick={handleMenuToggle}>
          <IoCloseSharp className="h-10 w-10 absolute right-4 top-6 text-white" />
        </button>
        <nav className="flex flex-col gap-8 justify-center items-center h-full">
          {NAV_DATA.map((item, index) => (
            <button
              onClick={handleMenuToggle}
              key={item.text + index + "hamburgerbar"}
            >
              <a className="text-white text-3xl" href={item.href}>
                {item.text}
              </a>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
