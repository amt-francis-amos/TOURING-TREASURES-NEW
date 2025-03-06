import { useState } from "react";
import { motion } from "framer-motion";

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
     
      <div className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-white" 
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel,adventure')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Book Your Next Adventure</h1>
          <p className="mt-4 text-lg md:text-xl">Plan the perfect trip with Touring Treasures</p>
        </div>
      </div>

     
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
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select a Tour Package
              </label>
              <select
                value={selectedTour}
                onChange={(e) => setSelectedTour(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Choose a Package</option>
                <option value="Panafest Tour 2025">Panafest Tour 2025 - $2,500</option>
                <option value="Safari Adventure">Safari Adventure - $3,000</option>
                <option value="Cultural Heritage Tour">Cultural Heritage Tour - $2,200</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Travel Date
              </label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Number of Participants
              </label>
              <input
                type="number"
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
                min="1"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

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
