import { useState, useEffect } from 'react';

const ServiceCards = ({ showAllCards }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://parlour-server-seven.vercel.app/services');
        if (response.ok) {
          const data = await response.json();
          setCardData(data);
        } else {
          console.error('Failed to fetch card data');
        }
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchData();
  }, []);

  const visibleCards = showAllCards ? cardData : cardData.slice(0, 3);

  
  return (
    <div className="bg-[#FFFFFF] flex flex-wrap justify-center gap-8 p-10">
      {visibleCards.map((card) => (
        <div
          key={card._id}
          className="card w-[320px] hover:bg-[#FFFFFF] hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <img src={card.image} alt="" className="w-[72px] h-[72px]" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#111430]">{card.serviceTitle}</h2>
            <h3 className="text-[#F63E7B]">{card.price}</h3>
            <p className="text-[#000000B2] text-sm">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
