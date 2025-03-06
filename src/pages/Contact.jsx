import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { assets } from "../assets/assets";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! 🚀");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
     
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${assets.contactImg})`,
        }}
      >
        
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Have questions or need support? Reach out and let's talk.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
       
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:border-blue-500 outline-none"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:border-blue-500 outline-none"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:border-blue-500 outline-none"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-700">+233 059 465 4002</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-700">info@touringTreasures.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-700">Accra, Ghana</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <iframe
          className="w-full h-80 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508619!2d144.95373531592516!3d-37.817209742021026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df94f9bff%3A0xf4c9fef7e70a8ed7!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1633074744392!5m2!1sen!2sau"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
