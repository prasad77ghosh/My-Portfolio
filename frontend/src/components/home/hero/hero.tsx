import { TextEffect } from "./text-effect";

export const HeroSection = () => {
  return (
    <>
      <div className="h-[90vh] flex">
        <div className="basis-[45%] flex items-center justify-end">
          <img
            src="./assets/images/avatar1.svg"
            alt="hero-img"
            className="w-full max-w-[600px] h-auto drop-shadow-[0_0_10px_rgba(128,128,128,0.7)] opacity-90 mr-10"
          />
        </div>
        <div className="basis-[55%] flex items-center justify-center">
          <TextEffect />
        </div>
      </div>
    </>
  );
};
