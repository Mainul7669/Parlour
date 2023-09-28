
const cardData = [
  {
    id: 1,
    title: 'Anti Age Face Treatment',
    
    description:
      'We craft stunning and amazing web UI, using a well-drafted UX to fit your product.',
    imagePath: '/src/assets/icons/Group 1373.png',
  },
  {
    id: 2,
    title: 'Hair Color & Styling',
    
    description:
      'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
    imagePath: '/src/assets/icons/Group 1372.png',
  },
  
];

const BookingList = ({ showAllCards }) => {
  const visibleCards = showAllCards ? cardData : cardData.slice(0, 3);

  return (
    <div className="bg-[#F4F7FC] flex flex-wrap justify-start gap-8 p-10">
      {visibleCards.map((card) => (
        <div
          key={card.id}
          className="card w-[320px] bg-[#FFFFFF] shadow-sm"
        >
         <div className="flex items-center justify-around">
         <figure className="px-4 pt-4">
            <img src={card.imagePath} alt="" className="w-[72px] h-[72px]" />
          </figure>
          <button
        className="px-2 py-2 rounded bg-[#FFE3E3] text-[#FF4545]">
          Pending
      </button>
         </div>
          <div className="card-body">
            <h2 className="card-title text-[#111430]">{card.title}</h2>
           
            <p className="text-[#000000B2] text-sm">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};



export default BookingList;