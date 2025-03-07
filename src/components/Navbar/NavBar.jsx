import { NAV_DATA } from "./data/navData";

export const NavBar = () => {
  return (
    <nav className="flex w-full items-center justify-end">
      <div className="hidden md:flex flex-row jusify-center gap-8 text-white">
        {NAV_DATA.map((item, index) => (
          <button key={item.text + index}>
            <a href={item.href}>{item.text}</a>
          </button>
        ))}
      </div>
    </nav>
  );
};
