import { useState } from 'react';
import ServiceCards from "../Shared/ServiceCards";

function Services() {
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleShowMore = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div className="bg-[#FFFFFF] flex flex-col justify-center items-center gap-8 p-4 sm:p-10">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-10 pb-4 md:pb-8">
          <span className="text-[#111430]">Our Awesome</span>
          <span className="text-[#F63E7B]">Services</span>
        </h1>
        <ServiceCards showAllCards={showAllCards} />
      </div>

      <div className="mt-4 md:mt-8 text-center">
        <button
          onClick={toggleShowMore}
          className="bg-[#F63E7B] text-[#FFFFFF] px-4 py-2 rounded text-sm sm:text-base font-semibold hover:bg-pink-300 transition duration-300 ease-in-out"
        >
          {showAllCards ? 'Show Less' : 'Explore more'}
        </button>
      </div>
    </div>
  );
}

export default Services;
