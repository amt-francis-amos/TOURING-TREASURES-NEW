import { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const BookingPage = () => {
  const [selectedTour, setSelectedTour] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [participants, setParticipants] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! We will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Motion Effect */}
      <motion.div
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${assets.bookingImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="relative text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Book Your Next Adventure</h1>
          <p className="mt-4 text-lg md:text-xl">Plan the perfect trip with Touring Treasures</p>
        </motion.div>
      </motion.div>

      {/* Booking Form Section with Motion Effect */}
      <div className="flex items-center justify-center px-4 py-12">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 mt-10 max-w-3xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Book Your Tour
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Fields with Motion Effects */}
            {[
              { label: "Select a Tour Package", type: "select", value: selectedTour, setValue: setSelectedTour, options: ["Panafest Tour 2025 - $2,500", "Safari Adventure - $3,000", "Cultural Heritage Tour - $2,200"] },
              { label: "Select Travel Date", type: "date", value: travelDate, setValue: setTravelDate },
              { label: "Full Name", type: "text", value: fullName, setValue: setFullName, placeholder: "Enter your full name" },
              { label: "Email", type: "email", value: email, setValue: setEmail, placeholder: "Enter your email" },
              { label: "Phone Number", type: "tel", value: phone, setValue: setPhone, placeholder: "Enter your phone number" },
              { label: "Number of Participants", type: "number", value: participants, setValue: setParticipants, min: "1" },
            ].map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <label className="block text-gray-700 font-medium mb-2">{field.label}</label>
                {field.type === "select" ? (
                  <select
                    value={field.value}
                    onChange={(e) => field.setValue(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Choose a Package</option>
                    {field.options.map((option, i) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <motion.input
                    type={field.type}
                    value={field.value}
                    onChange={(e) => field.setValue(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    placeholder={field.placeholder}
                    whileFocus={{ scale: 1.05 }}
                  />
                )}
              </motion.div>
            ))}

            {/* Submit Button with Motion Effect */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
              type="submit"
            >
              Proceed to Payment
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingPage;
