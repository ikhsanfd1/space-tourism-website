const Home = () => {
  return (
    <div>
      <div className="hero flex items-center mt-16 ps-8 lg:ps-20 md:ps-16 sm:ps-12 pe-8 lg:pe-4 pb-2 pt-12 flex-wrap">
        <div className="hero-text flex-1 text-center lg:text-start md:text-center sm:text-center pb-4 lg:pb-0 md:pb-0 sm:pb-2">
          <h3 className="barlow-condensed-light text-2xl text-[#D0D6F9]">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="bellefair-regular text-8xl pt-4 pb-6">SPACE</h1>
          <p className="barlow-condensed-light text-xl text-[#D0D6F9]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="hero-image flex-1 justify-center flex">
          <button className="w-52 h-52 bellefair-regular text-2xl bg-white text-black rounded-full hover:bg-[#D0D6F9]">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
