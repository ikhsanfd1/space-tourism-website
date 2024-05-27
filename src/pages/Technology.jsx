import data from '../utils/data.json';
import { useState } from 'react';

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(0);
  const selectedTech = data.technology[selectedTechnology];

  const handleTabClick = (index) => {
    setSelectedTechnology(index);
  };

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: 'url(/technology/background-technology-desktop.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        WebkitMaskImage:
          'linear-gradient(rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0.9))',
        maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0.9))',
      }}
    >
      <hr className="border border-gray-800 blur-3xl backdrop-blur-3xl" />
      <div className="pt-8">
        <div className="technology flex items-center mt-16 ps-20">
          <div className="technology-text flex-1">
            <h3 className="barlow-condensed-light px-10 text-2xl">
              <span className="font-bold pr-2 text-gray-500">03</span> SPACE
              LAUNCH 101
            </h3>
            <div className="p-10 flex">
              <div
                role="tablist"
                className="tabs-bordered ms-9 me-12 barlow-condensed-regular flex flex-col space-y-8"
              >
                {data.technology.map((tech, index) => (
                  <label key={index} className="cursor-pointer">
                    <input
                      type="radio"
                      name="technology"
                      role="tab"
                      className="hidden"
                      aria-label={tech.name}
                      checked={selectedTechnology === index}
                      onChange={() => handleTabClick(index)}
                    />
                    <span
                      className={`tab text-2xl flex items-center justify-center hover:border-white rounded-full w-16 h-16 ${
                        selectedTechnology === index
                          ? 'bg-white text-black'
                          : 'bg-transparent text-white border border-[#979797]'
                      }`}
                    >
                      {index + 1}
                    </span>
                  </label>
                ))}
              </div>
              <div className="teks-tech">
                <h3 className="text-[#D0D6F9] barlow-condensed-light">
                  THE TERMINOLOGY...
                </h3>
                <h1 className="text-4xl mb-6 bellefair-regular">
                  {selectedTech.name.toUpperCase()}
                </h1>
                <p className="text-xl text-[#D0D6F9] barlow-condensed-light">
                  {selectedTech.description}
                </p>
              </div>
            </div>
          </div>
          <div className="technology-image flex-1 justify-end flex flex-col items-end">
            <img
              src={selectedTech.images.portrait}
              alt={selectedTech.name}
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
