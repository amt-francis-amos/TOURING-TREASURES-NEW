import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-blue-600">Our Vision & Mission</h2>
          <p className="mt-2 text-lg text-gray-700">Guiding principles that drive our passion and commitment.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision Section */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8 text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-blue-500">Our Vision</h3>
            <p className="mt-4 text-gray-700">
            To be the leading travel and tour company, inspiring people to explore the world with unforgettable experiences. We envision a future where travel is seamless, enriching, and accessible to all, fostering cultural connections and lifelong memories.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8 text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-blue-500">Our Mission</h3>
            <p className="mt-4 text-gray-700">
            Our mission is to provide exceptional travel services, offering personalized tours, hassle-free bookings, and immersive adventures. We are committed to customer satisfaction, safety, and sustainability, ensuring every journey is enjoyable and responsible. With a passion for exploration, we create experiences that turn dreams into reality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
