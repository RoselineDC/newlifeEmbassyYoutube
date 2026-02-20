"use client";

export default function Header() {
  return (
    <header className="h-[85vh] w-full overflow-hidden">
      {/* Background video (does NOT affect layout) */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          src="/banner.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Optional overlay (does not affect menu) */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* YOUR existing content stays exactly the same */}
      <div className="flex h-full items-center justify-center text-center px-4">
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
