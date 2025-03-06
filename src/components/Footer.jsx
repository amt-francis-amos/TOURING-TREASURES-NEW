import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">TravelX</h2>
          <p className="mt-4 text-sm">
            Explore the world with the best travel packages and destinations.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Destinations</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-4 text-sm">123 Travel Street, Accra, Ghana</p>
          <p className="text-sm">Email: info@travelx.com</p>
          <p className="text-sm">Phone: +233 123 456 789</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white">Subscribe</h3>
          <p className="mt-4 text-sm">Stay updated with our latest offers and travel deals.</p>
          <div className="mt-4 flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none text-white"
            />
            <button className="px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedin /></a>
        </div>
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} TravelX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
