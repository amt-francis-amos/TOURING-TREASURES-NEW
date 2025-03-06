import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { assets,slides } from "../assets/assets";



const Hero = () => {
  let sliderRef = null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false, 
  };

  return (
    <div className="relative h-screen">
      <Slider {...settings} ref={(slider) => (sliderRef = slider)} className="h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-3xl md:text-5xl font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="mt-4 text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {slide.text}
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
        ))}
      </Slider>

    
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
        onClick={() => sliderRef?.slickPrev()}
      >
        <FaArrowLeft size={20} />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
        onClick={() => sliderRef?.slickNext()}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Hero;
