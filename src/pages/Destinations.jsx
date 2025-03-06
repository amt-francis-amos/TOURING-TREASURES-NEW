import { motion } from "framer-motion";
import { assets, destinations } from "../assets/assets";

const Destinations = () => {
  return (
    <div className="relative">
      
   
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${assets.image2})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <motion.div
          className="relative text-center z-10 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Explore Breathtaking Destinations
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Find your next adventure with us
          </motion.p>
        </motion.div>
      </div>

      
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">Top Destinations</h2>
          <p className="text-lg text-gray-600 mt-2">
            Discover the most amazing places around the world.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="relative rounded-xl overflow-hidden shadow-lg group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition duration-300"></div>

              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-xl font-bold">{destination.name}</h3>
                <p className="text-sm">{destination.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Destinations;
