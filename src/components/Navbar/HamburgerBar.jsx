import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { NAV_DATA } from "./data/navData";

export const HamburgerBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <button onClick={handleMenuToggle} className="md:hidden">
        <GiHamburgerMenu className="h-10 w-10 text-white" />
      </button>

      <div
        className={`fixed top-0 right-0 w-3/4 h-screen bg-gray-900 bg-opacity-90 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={handleMenuToggle} className="absolute top-6 right-6">
          <IoCloseSharp className="h-10 w-10 text-white" />
        </button>

        <nav className="flex flex-col gap-8 justify-center items-center h-full">
          {NAV_DATA.map((item, index) => (
            <button key={item.text + index} onClick={handleMenuToggle}>
              <a
                href={item.href}
                className="relative group text-white text-3xl"
              >
                {item.text}
                <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};
