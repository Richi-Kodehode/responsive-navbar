import { NAV_DATA } from "./data/navData";

export const NavBar = () => {
  return (
    <nav className="flex w-full items-center justify-start">
      <div className="hidden md:flex flex-row jusify-end gap-8 items-center text-white">
        {NAV_DATA.map((item, index) => (
          <button key={item.text + index}>
            <a href={item.href}>{item.text}</a>
          </button>
        ))}
      </div>
    </nav>
  );
};
