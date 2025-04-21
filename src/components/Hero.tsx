
import EdenCard from "./EdenCard";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-y-visible flex flex-col items-center justify-start">
      {/* Background Image */}
      <img
        src="/lovable-uploads/abe9de09-f238-4e3f-987b-267cbe575410.png"
        alt="Lush mountain island"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        style={{ objectPosition: "center top" }}
        draggable={false}
        aria-hidden="true"
      />
      {/* Soft overlay to improve contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/30 to-white/0 z-10" />
      {/* Logo */}
      <div className="absolute top-0 left-0 z-20 p-6 flex items-center">
        <img
          src="/lovable-uploads/755419da-971c-4f25-aa3e-6de4e4c9cd5b.png"
          alt="Schemsoft logo"
          className="w-14 h-14 rounded-xl shadow-lg bg-white/60 backdrop-blur-md ring-1 ring-black/10"
          style={{}}
        />
        <span className="ml-3 text-2xl font-semibold tracking-tight text-charcoal-900 drop-shadow-sm select-none">
          Schemsoft
        </span>
      </div>
      {/* Centered Hero Text */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full pt-40 pb-52 px-4 sm:pb-64">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 text-center max-w-4xl drop-shadow-xl animate-fade-in">
          A serene space for getting things done.
        </h1>
        <p className="mt-5 text-xl sm:text-2xl text-gray-700 font-medium text-center max-w-2xl animate-fade-in [animation-delay:0.15s]">
          Productivity tools for modern teams—engineered by Schemsoft.
        </p>
      </div>
      {/* Card, positioned 'halfway' below fold */}
      <EdenCard />
    </div>
  );
};

export default Hero;
