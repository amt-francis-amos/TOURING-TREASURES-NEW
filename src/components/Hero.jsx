import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.heroImg})` }}
    >
      
      <div className="absolute inset-0 bg-black opacity-40"></div>

     
      <motion.div
        className="relative text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Explore the World with Us
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Find the best travel destinations and tour packages.
        </motion.p>

        <motion.button
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Discover Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
