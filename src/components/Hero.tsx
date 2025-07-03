import ComputersCanvas from "./canvas/ComputersCanvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="size-5 rounded-full bg-themePurple" />
          <div className="sm:h-80 h-40 w-1 bg-gradient-to-b from-[#804dee] to-[#3c3350]/0" />
        </div>
        <div>
          <h1 className="text-white heroHeadText">
            Hi, I&apos;m <span className="text-themePurple">Herb</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100">
            I develop 3D visuals, user <br className="sm:block hidden"/> interfaces, and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
}

export default Hero