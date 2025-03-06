import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="relative">
     
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
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
            className="text-5xl md:text-6xl font-bold"
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
            Discover our story, our mission, and the values that drive us to create amazing experiences.
          </motion.p>
        </motion.div>
      </div>

     
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src={assets.image7}
              alt="About Us"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              We are passionate about creating exceptional experiences for travelers worldwide. Our mission is to help you
              explore new destinations with ease and comfort.
            </p>
            <p className="text-lg text-gray-600">
              With a dedicated team of travel experts, we ensure that every journey is seamless, memorable, and full of adventure.
            </p>

            <motion.button
              className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
