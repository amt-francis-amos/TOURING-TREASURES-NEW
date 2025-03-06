import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white h-[88px] shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold text-blue-600">
        Touring Treasures
        </Link>

      
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/destinations" className="hover:text-blue-500 transition duration-300">
              Destinations
            </Link>
          </li>
          <li>
            <Link to="/tour-packages" className="hover:text-blue-500 transition duration-300">
              Tours
            </Link>
          </li>
          <li>
            <Link to="/booking" className="hover:text-blue-500 transition duration-300">
              Booking
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        
        <Link to="/login" className="hidden px-10 py-3 md:block bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Login
        </Link>

       
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

     
      {menuOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 space-y-4 text-center text-gray-700">
          <li>
            <Link to="/" className="block py-2 hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/destinations" className="block py-2 hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Destinations
            </Link>
          </li>
          <li>
            <Link to="/tour-packages" className="block py-2 hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Tours
            </Link>
          </li>
          <li>
            <Link to="/booking" className="block py-2 hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Booking
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition duration-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="block px-8 py-3 bg-blue-600 text-white rounded-md mx-10 hover:bg-blue-700" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
