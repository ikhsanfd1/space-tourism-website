import data from '../utils/data.json';
import { useState } from 'react';

const Crew = () => {
  const [selectedCrewIndex, setSelectedCrewIndex] = useState(0);
  const selectedCrew = data.crew[selectedCrewIndex];

  const handleTabClick = (index) => {
    setSelectedCrewIndex(index);
  };

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: 'url(/crew/background-crew-desktop.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <hr
        className="border border-gray-800 blur-3xl backdrop-blur-3xl"
        style={{
          WebkitMaskImage:
            'linear-gradient(rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))',
        }}
      />
      <div className="pt-8">
        <div className="crew flex items-center -mt-16 ps-20">
          <div className="crew-text flex-1">
            <h3 className="barlow-condensed-light px-10 text-2xl">
              <span className="font-bold pr-2 text-gray-500">02</span> MEET YOUR
              CREW
            </h3>
            <div className="p-10">
              <h4 className="barlow-condensed-light text-[#D0D6F9] text-2xl">
                {selectedCrew.role.toUpperCase()}
              </h4>
              <h1 className="bellefair-regular text-6xl pt-4 pb-6">
                {selectedCrew.name.toUpperCase()}
              </h1>
              <p className="barlow-condensed-light text-xl text-[#D0D6F9]">
                {selectedCrew.bio}
              </p>
            </div>
            <div
              role="tablist"
              className="tabs tabs-bordered ms-9 me-12 barlow-condensed-regular flex space-x-8"
            >
              {data.crew.map((crew, index) => (
                <label key={index} className="cursor-pointer">
                  <input
                    type="radio"
                    name="crew"
                    role="tab"
                    className="hidden"
                    aria-label={crew.name}
                    checked={selectedCrewIndex === index}
                    onChange={() => handleTabClick(index)}
                  />
                  <span
                    className={`text-xl hover:text-[#D0D6F9] ${
                      selectedCrewIndex === index
                        ? 'text-white'
                        : 'text-[#979797]'
                    }`}
                  >
                    ●
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="crew-image flex-1 justify-center flex flex-col items-center">
            <img
              src={selectedCrew.images.png}
              alt={selectedCrew.name}
              className={selectedCrew.class}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
