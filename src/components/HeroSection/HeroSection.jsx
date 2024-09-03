import heroImg from '../../assets/Image/heroImg.jpg'
const HeroSection = () => {

    return (
      <div className="relative flex-1  flex items-center justify-center bg-cover bg-center overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Hero Background"
          className="absolute  inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Content */}
        <div className="relative text-center text-white px-4 md:px-8">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
          Unleash Your Inner Strength
          </h1>
  
          {/* Description */}
          <p className="text-sm font-thin text-slate-200 md:text-2xl mb-8 animate-fadeIn delay-2s">
          Join Iron Pulse Fitness and transform your body and mind with our state-of-the-art facilities, expert trainers, and motivating community. It's time to take your fitness journey to the next level.
          </p>
  
          {/* Call to Action Button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full animate-bounce">
             Start Your Transformation 
          </button>
        </div>
      </div>
    );
  };
  
  export default HeroSection;