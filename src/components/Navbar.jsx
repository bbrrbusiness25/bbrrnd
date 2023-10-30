import { useState } from "react";
import { Menu, Newspaper, X } from "lucide-react";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Magazine",
    href: "#",
  },
  {
    name: "Live Tv",
    href: "#",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="fixed bg-white z-50 w-full border-b text-black border-gray-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="inline-flex items-center space-x-2">
          <span className="bg-green-500 text-white rounded-full p-[7px]">
            <Newspaper />
          </span>
          <span className="font-bold">Insights</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm hover:text-black/90 font-semibold"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <a
            href="https://github.com/shaikahmadnawaz/news-dashboard"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            GitHub
          </a>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="bg-green-500 text-white rounded-full p-[7px]">
                      <Newspaper />
                    </span>
                    <span className="font-bold">Insights</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold"
                      >
                        <span className="ml-3 text-base font-medium text-black">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <a
                  href="https://github.com/shaikahmadnawaz/news-dashboard"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 w-full rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
