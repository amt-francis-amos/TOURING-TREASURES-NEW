import { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ closeModal }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        {/* Close Button */}
        <button onClick={closeModal} className="absolute top-2 right-3 text-gray-600 text-xl">
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Form */}
        <form className="mt-4 space-y-4">
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg focus:outline-none" required />
          )}
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:outline-none" required />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg focus:outline-none" required />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </motion.button>
        </form>

        {/* Toggle Login/Signup */}
        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-blue-600 font-semibold hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
