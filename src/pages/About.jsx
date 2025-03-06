import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="relative">
    
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${assets.image6})` }} 
      >
        
        <div className="absolute inset-0 bg-black opacity-50"></div>

     
        <div className="relative text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Discover our story, our mission, and the values that drive us to create amazing experiences.
          </p>
        </div>
      </div>

    
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       
          <div>
            <img src={assets.image7} alt="About Us" className="rounded-xl shadow-lg w-full " />
          </div>

       
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-4">
              We are passionate about creating exceptional experiences for travelers worldwide. Our mission is to help you
              explore new destinations with ease and comfort.
            </p>
            <p className="text-lg text-gray-600">
              With a dedicated team of travel experts, we ensure that every journey is seamless, memorable, and full of adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
