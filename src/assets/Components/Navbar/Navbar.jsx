import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    toggleMenu();
  };

  return (
    <>
      <nav className="bg-slate-700 text-white px-8">
        <div className="container flex justify-between items-center py-9 px-16">
          <h1 className="uppercase text-3xl font-bold">
            <a href="/">START FRAMEWORK</a>
          </h1>
          <div className="hidden md:flex">
            <ul className="flex justify-between items-center gap-8 font-bold uppercase text-xl px-7">
              <li>
                <Link
                  to="/About"
                  onClick={() => handleButtonClick("About")}
                  className={`px-4 py-2 rounded ${
                    activeButton === "About" ? "bg-accent" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => handleButtonClick("Portfolio")}
                  className={`px-4 py-2 rounded ${
                    activeButton === "Portfolio" ? "bg-accent" : ""
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  onClick={() => handleButtonClick("Contact")}
                  className={`px-4 py-2 rounded ${
                    activeButton === "Contact" ? "bg-accent" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white"
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0v-2zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-slate-700 text-white">
          <ul className="flex flex-col items-center gap-4 py-4 font-bold uppercase text-xl">
            <li>
              <Link
                to="/About"
                onClick={() => handleButtonClick("About")}
                className={`px-4 py-2 rounded ${
                  activeButton === "About" ? "bg-accent" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={() => handleButtonClick("Portfolio")}
                className={`px-4 py-2 rounded ${
                  activeButton === "Portfolio" ? "bg-accent" : ""
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                onClick={() => handleButtonClick("Contact")}
                className={`px-4 py-2 rounded ${
                  activeButton === "Contact" ? "bg-accent" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
