import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const bounceTransition = {
  y: {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const ToursPage = () => {
  return (
    <motion.div 
      className="relative"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
     
      <motion.div
        className="relative h-[470px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${assets.tourImg})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="relative text-center z-10 px-4"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold"
            whileHover={{ scale: 1.1, rotate: 3 }}
          >
            7-Day Ghana Panafest Tour 2025
          </motion.h1>
          <motion.p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Immerse yourself in the history, culture, and beauty of Ghana. An unforgettable adventure awaits!
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="text-center py-16 px-6 bg-gradient-to-b from-blue-100 to-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Experience Ghana Like Never Before</h2>
        <motion.p
          className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
          animate={{ y: [0, -5, 0] }}
          transition={bounceTransition}
        >
          Discover Ghana's historical landmarks, cultural experiences, and vibrant landscapes on this 7-day guided tour.
        </motion.p>
      </motion.div>

      <div className="container mx-auto px-6 py-16">
        {[
          { day: "Day 1", title: "Arrival & Welcome Dinner", details: "Check-in at your hotel & enjoy a welcome dinner at Buka Restaurant, Osu.", image: assets.image8 },
          { day: "Day 2", title: "Accra City Tour", details: "Visit the W.E.B. Du Bois Center, National Museum, and more.", image: assets.pic1 },
          { day: "Day 3", title: "Road Trip to Cape Coast", details: "Explore Cape Coast and attend a colloquium at University of Cape Coast.", image: assets.panafestImg },
          { day: "Day 4", title: "Elmina Castle & Boat Cruise", details: "Tour the historic Elmina Castle and enjoy a boat cruise.", image: assets.castleImg },
          { day: "Day 5", title: "Cultural Exploration", details: "Visit a school, explore Cape Coast Castle, and experience Kakum National Park.", image: assets.cultureImg },
          { day: "Day 6", title: "Emancipation Day & Beach Dinner", details: "Learn to cook Ghanaian dishes and celebrate Emancipation Day.", image: assets.image5 },
          { day: "Day 7", title: "Departure", details: "Bid farewell and depart from Ghana.", image: assets.departImg },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 mb-12"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/2 h-[300px] object-cover rounded-xl shadow-lg"
              whileHover={{ rotate: 3, scale: 1.05 }}
            />
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-800">{item.day}: {item.title}</h3>
              <p className="text-lg text-gray-600 mt-3">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-gray-900 text-white py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold mb-6">Watch Our Tour Video</h2>
        <motion.div
          className="max-w-4xl mx-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yJ1FBknGMNM?si=Jfan1mJfMH8W6VEY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </motion.div>
      </motion.div>

  
      <motion.div 
        className="text-center py-16 bg-gradient-to-b from-white to-blue-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Book Your Spot Today!</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Tour Price: $2,500 per person – Includes guided tours, accommodation, transport & meals.
        </p>
        <p className="mt-4 text-lg text-gray-600">Contact Us for Reservations & Customization</p>
        <motion.button
          className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg"
          whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
          transition={{ duration: 0.3 }}
        >
          Reserve Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ToursPage;
