
const EdenCard = () => {
  return (
    <div
      className="
        relative z-30 flex flex-col items-center
        w-[95%] sm:w-[600px] max-w-[94vw]
        mx-auto
        rounded-3xl
        shadow-xl
        bg-white/70 backdrop-blur-md
        border border-white/60
        pt-8 pb-0 sm:pt-14
        px-6 sm:px-12
        animate-scale-in
        -mt-40 sm:-mt-56
        min-h-[360px]
        "
      style={{
        boxShadow: "0 8px 32px 0 rgba(60,59,110,0.20), 0 1.5px 7px 0 rgba(60,59,110,.13)",
      }}
    >
      <div className="w-full flex flex-col items-center text-center">
        <span className="uppercase text-xs tracking-wide font-bold text-purple-800/80 mb-2">
          Eden.pm
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          The Focus Space Tool
        </h2>
        <p className="text-gray-600 mb-4 max-w-md">
          Step into Eden.pm—a distraction-free environment, crafted to unlock your team’s best work.
        </p>
      </div>
      {/* Image, visually below the fold */}
      <div className="w-full flex flex-col items-center mt-3">
        <div className="w-[80%] mx-auto -mb-36 sm:-mb-44 pointer-events-none select-none drop-shadow-xl">
          <img
            src="/lovable-uploads/a0c3aec6-b3f4-4bfd-b009-55d17c2f18bd.png"
            alt="Eden.pm Focus Space Preview"
            className="rounded-2xl object-cover w-full h-[240px] sm:h-[300px] shadow-lg border border-white/70"
            style={{
              /* fades bottom half to transparent, imitating below-the-fold effect */
              maskImage: "linear-gradient(to bottom, #fff 55%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, #fff 55%, transparent 100%)",
            }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default EdenCard;

