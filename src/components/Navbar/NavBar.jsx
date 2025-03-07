import { NAV_DATA } from "./data/navData";

export const NavBar = () => {
  return (
    <nav className="flex w-full items-center justify-end">
      <div className="hidden md:flex flex-row justify-center gap-8 text-white">
        {NAV_DATA.map((item, index) => (
          <a
            key={item.text + index}
            href={item.href}
            className="relative group text-white"
          >
            {item.text}
            <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};
