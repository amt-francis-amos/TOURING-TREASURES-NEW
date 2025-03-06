import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="relative">
      <div
        className="relative h-[470px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${assets.image6})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <motion.div
          className="relative text-center z-10 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Discover our story, our mission, and the values that drive us to create amazing travel experiences.
          </motion.p>
        </motion.div>
      </div>
      
      <div className="text-center py-16 px-6 bg-gradient-to-b from-blue-100 to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Get to Know Us Better
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We are more than just a travel agency – we create meaningful experiences. 
          Explore our journey, our mission, and how we strive to make every trip unforgettable.
        </p>
      </div>
    
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
         
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src={assets.image7}
              alt="About Us"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-900 rounded-full mb-6"></div>  
            
            <p className="text-lg text-gray-600 mb-4">
              We are a passionate travel and tour company dedicated to creating unforgettable experiences for travelers worldwide. 
              Our journey began with a simple goal: to make travel seamless, exciting, and accessible to everyone. Whether you're 
              seeking adventure, relaxation, or cultural exploration, we are committed to making your trip hassle-free and memorable.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              With years of experience in the industry, we have built strong relationships with global partners, ensuring top-tier 
              services at competitive prices. From customized tour packages to guided group trips, we offer a range of travel solutions 
              tailored to your needs. Our expert team is always ready to assist, providing insightful recommendations and support 
              throughout your journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Beautiful Tour Video Section */}
      <div className="bg-gray-900 py-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Experience Our Tours</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Watch our exclusive tour video and get a glimpse of the amazing places and experiences we offer.
        </p>
        <div className="relative w-full max-w-4xl mx-auto">
          <iframe
            className="w-full h-[400px] md:h-[500px] rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Tour Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
