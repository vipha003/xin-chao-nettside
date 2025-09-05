import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

// All menu links in a single place for easy mapping and highlighting
const navLinks = [
  { name: "Hjem", path: "/", icon: "home", title: "Xin Chao Restaurant" },
  { name: "Meny", path: "/meny", icon: "grid", title: "Meny - Xin Chao Restaurant" },
  { name: "Kontakt oss", path: "/contact", icon: "location", title: "Kontakt oss - Xin Chao Restaurant" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollTop = useRef(window.pageYOffset);

  const location = useLocation(); // React Router hook
  const currentPath = location.pathname;

  // Update document title based on current path
  useEffect(() => {
    const currentLink = navLinks.find((link) => link.path === currentPath);
    document.title = currentLink ? currentLink.title : "Xin Chao";
  }, [currentPath]);

  // Responsive scroll hide/show logic
  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.pageYOffset;
          if (y < 10) {
            setIsTransparent(true);
            setIsHidden(false);
          } else {
            setIsTransparent(false);
            if (y > lastScrollTop.current + 12) setIsHidden(true);
            else if (y < lastScrollTop.current - 8) setIsHidden(false);
          }
          lastScrollTop.current = y;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <nav
        id="navbar"
        className={`opacity-95 z-40 fixed bg-[#051118] h-[70px] w-full flex justify-between p-[5px] transition-transform duration-300
          ${isTransparent ? "navbar-transparent" : ""}
          ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="m-[5px]">
          <a href="/">
            <img
              src="assets/images/XinChaoLogoSVGWhite.svg"
              alt="XinChaoLogoSVG"
              className="h-[50px] ml-[10px] z-20"
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="nav-links hidden sm:flex items-center mr-[20px]">
          <ul className="flex flex-row text-[#FBFFF4] m-[5px] items-center gap-[3vw] font-bold">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={`hover:text-gray-400 ${
                  currentPath === link.path
                    ? "underline underline-offset-8"
                    : ""
                }`}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-6 sm:hidden z-30 pr-5">
          <IonIcon
            onClick={toggleMenu}
            name={isMenuOpen ? "close" : "menu"}
            className="text-3xl cursor-pointer text-[#FBFFF4]"
          />
        </div>
      </nav>

      {/* SLIDE OUT MENU */}
      <aside
        id="slideMenu"
        className={`z-30 fixed sm:hidden top-0 right-0 h-full w-[250px] bg-[#051118ee] transform transition-transform duration-300 shadow-lg rounded-l-lg
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col text-[#FBFFF4] m-[15px] gap-[2vh] font-bold p-4 mt-[80px]">
          {navLinks.map((link) => (
            <li className="w-full" key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center font-bold py-3 px-5 rounded-lg shadow-md transition-all w-full
                  ${
                    currentPath === link.path
                      ? "bg-[#265072] "
                      : "bg-[#0E202F95] hover:bg-[#26507295]"
                  }`}
                onClick={() => setIsMenuOpen(false)} // close menu after navigation
              >
                <IonIcon
                  className="text-xl mr-2"
                  name={
                    currentPath === link.path
                      ? link.icon
                      : `${link.icon}-outline`
                  }
                />

                <p>{link.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
