import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Login from "../components/Login";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false); 

  return (
    <>
      <nav className="bg-white h-[88px] shadow-md fixed w-full z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Touring Treasures
          </Link>

          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/destinations" className="hover:text-blue-500">Destinations</Link></li>
            <li><Link to="/tour-packages" className="hover:text-blue-500">Tours</Link></li>
            <li><Link to="/booking" className="hover:text-blue-500">Booking</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>

          <button 
            onClick={() => setShowAuthModal(true)} 
            className="hidden px-10 py-3 md:block bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      
      {showAuthModal && <Login closeModal={() => setShowAuthModal(false)} />}
    </>
  );
};

export default Navbar;
