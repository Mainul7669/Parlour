import { useState } from 'react';

// Define your card data
const cardData = [
  {
    id: 1,
    title: 'Anti Age Face Treatment',
    price: '$199',
    description:
      'We craft stunning and amazing web UI, using a well-drafted UX to fit your product.',
    imagePath: 'src/assets/icons/Group 1373.png',
  },
  {
    id: 2,
    title: 'Hair Color & Styling',
    price: '$99',
    description:
      'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
    imagePath: 'src/assets/icons/Group 1372.png',
  },
  {
    id: 3,
    title: 'Skin Care Treatment',
    price: '$299',
    description:
      'With well-written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    imagePath: 'src/assets/icons/Group 1374.png',
  },
  {
    id: 4,
    title: 'Skin Care Treatment',
    price: '$299',
    description:
      'With well-written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    imagePath: 'src/assets/icons/Group 1374.png',
  },
  {
    id: 5,
    title: 'Skin Care Treatment',
    price: '$299',
    description:
      'With well-written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    imagePath: 'src/assets/icons/Group 1374.png',
  },
  {
    id: 6,
    title: 'Skin Care Treatment',
    price: '$299',
    description:
      'With well-written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    imagePath: 'src/assets/icons/Group 1374.png',
  },
];

const ServiceCards = ({ showAllCards }) => {
  const visibleCards = showAllCards ? cardData : cardData.slice(0, 3);

  return (
    <div className="bg-[#FFFFFF] flex flex-wrap justify-center gap-8 p-10">
      {visibleCards.map((card) => (
        <div
          key={card.id}
          className="card w-[320px] hover:bg-[#FFFFFF] hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          <figure className="px-10 pt-10">
            <img src={card.imagePath} alt="" className="w-[72px] h-[72px]" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#111430]">{card.title}</h2>
            <h3 className="text-[#F63E7B]">{card.price}</h3>
            <p className="text-[#000000B2] text-sm">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
