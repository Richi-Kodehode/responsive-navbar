import { useState } from "react";
import { HamburgerBar } from "./HamburgerBar";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-500 fixed w-full z-50 flex flex-col justify-center">
      <div className="flex items-center justify-between px-4 h-24">
        <div className="w-26 h-auto">
          <img src="/182logo.webp" alt="LOGO" />
        </div>
        <NavBar />
        <HamburgerBar
          handleMenuToggle={handleMenuToggle}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </header>
  );
};
