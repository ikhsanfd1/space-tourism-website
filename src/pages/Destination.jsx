import { useState } from 'react';
import data from '../utils/data.json';

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    data.destinations[0]
  );

  const handleTabClick = (destinationName) => {
    const destination = data.destinations.find(
      (dest) => dest.name === destinationName
    );
    setSelectedDestination(destination);
  };

  return (
    <div
      className="h-screen mt-32"
      style={{
        backgroundImage: 'url(/destination/background-destination-desktop.jpg)',
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
        <div className="destination flex items-center mt-16 ps-20">
          <div className="destination-image flex-1 justify-center flex flex-col">
            <h3 className="barlow-condensed-light text-2xl">
              <span className="font-bold pr-2 text-gray-500">01</span> PICK YOUR
              DESTINATION
            </h3>
            <img
              src={selectedDestination.images.png}
              alt={selectedDestination.name}
              className="w-7/12 ms-6 mt-12"
            />
          </div>
          <div className="destination-text flex-1">
            <div
              role="tablist"
              className="tabs tabs-bordered me-12 barlow-condensed-regular flex space-x-8"
            >
              {data.destinations.map((destination, index) => (
                <label key={index} className="cursor-pointer">
                  <input
                    type="radio"
                    name="destination"
                    role="tab"
                    className="hidden"
                    aria-label={destination.name}
                    checked={selectedDestination.name === destination.name}
                    onChange={() => handleTabClick(destination.name)}
                  />
                  <span
                    className={`tab text-white text-xl ${
                      selectedDestination.name === destination.name
                        ? 'border-b-2 border-white'
                        : ''
                    }`}
                  >
                    {destination.name.toUpperCase()}
                  </span>
                </label>
              ))}
            </div>
            <div className="p-10">
              <h1 className="bellefair-regular text-8xl pt-4 pb-6">
                {selectedDestination.name.toUpperCase()}
              </h1>
              <p className="barlow-condensed-light text-xl">
                {selectedDestination.description}
              </p>
            </div>
            <hr className="bg-white me-24" />
            <div className="flex justify-between items-center mt-6">
              <div className="distance ms-8">
                <h3 className="barlow-condensed-light">AVG. DISTANCE</h3>
                <p className="bellefair-regular text-xl">
                  {selectedDestination.distance}
                </p>
              </div>
              <div className="travel-time me-64">
                <h3 className="barlow-condensed-light">EST. TRAVEL TIME</h3>
                <p className="bellefair-regular text-xl">
                  {selectedDestination.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
