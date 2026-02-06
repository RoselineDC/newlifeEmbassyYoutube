"use client";

export default function Header() {
  return (
    <header className=" h-[85vh] w-full overflow-hidden">
      {/* YouTube iframe background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <iframe
          className="w-[177.78vh] h-[100vh] min-w-full min-h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
          src="https://www.youtube.com/embed/FxrFXklsNKA?autoplay=1&mute=1&controls=0&loop=1&playlist=FxrFXklsNKA&modestbranding=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            {/* Welcome to New Life Embassy */}
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            {/* Transforming lives through the Word */}
          </p>
        </div>
      </div>
    </header>
  );
}
