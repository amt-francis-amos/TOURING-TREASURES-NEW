import { assets, destinations } from "../assets/assets";

const Destinations = () => {
  return (
    <div className="relative">
    
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${assets.image2})` }} 
      >
       
       <div className="absolute inset-0 bg-black opacity-40"></div>

   
        <div className="relative text-center z-10">
          <h1 className="text-3xl md:text-5xl font-bold">Explore Breathtaking Destinations</h1>
          <p className="mt-4 text-lg md:text-xl">Find your next adventure with us</p>
        </div>
      </div>

     
      <div className="container mx-auto px-6 py-12">
   
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Top Destinations</h2>
          <p className="text-lg text-gray-600 mt-2">Discover the most amazing places around the world.</p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {destinations.map((destination) => (
            <div key={destination.id} className="relative rounded-xl overflow-hidden shadow-lg group">

              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0  bg-black opacity-40 group-hover:opacity-50 transition duration-300"></div>

              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-xl font-bold">{destination.name}</h3>
                <p className="text-sm">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
