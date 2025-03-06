import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${assets.heroImg})` }}>
      
     
      <div className="absolute inset-0 bg-black opacity-40"></div>

  
      <div className="relative text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold">Explore the World with Us</h1>
        <p className="mt-4 text-lg md:text-xl">Find the best travel destinations and tour packages.</p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md">
          Discover Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
