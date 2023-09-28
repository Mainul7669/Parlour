import  { useState } from 'react';
import { BsStarFill,} from 'react-icons/bs'; 


const ReviewForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data
    const data = {
      name,
      email,
      rating,
      comment,
    };
    console.log(data);
  };

  return (
    <div className="bg-[#F4F7FC] p-4 md:p-8 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full lg:w-1/3 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full lg:w-1/3 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-600 font-medium mb-2">
            Rating
          </label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer ${
                  star <= rating ? 'text-[#FFAC0C]' : 'text-gray-400'
                }`}
                onClick={() => setRating(star)}
              >
                <BsStarFill className="inline" />
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-600 font-medium mb-2">
            Your Review
          </label>
          <textarea
            id="comment"
            className="w-full lg:w-1/3 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
            rows="4"
            placeholder="Write your review here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#F63E7B] text-white py-2 px-8 rounded-md hover:bg-red-300 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
