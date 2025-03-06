import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest(".menu-content")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  return (
    <nav className="bg-white h-[88px] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
      
        <Link to="/" className="text-sm md:text-2xl font-bold text-blue-600">
          Touring Treasures
        </Link>

       
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["Home", "About", "Destinations", "Tours", "Booking", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-blue-500 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

     
        <Link to="/login" className="hidden px-6 py-2 md:block bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Login
        </Link>

      
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-700 text-3xl"
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-gray-700 font-medium text-lg menu-content">
          {["Home", "About", "Destinations", "Tours", "Booking", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-blue-500 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/login"
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
