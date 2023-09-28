import  { useState } from 'react';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log('Email:', email); // Replace with your logic
  };

  return (
    <div className="bg-[#F4F7FC] p-4 md:p-8 rounded-md">
   
      <form onSubmit={handleSubmit} className='lg:flex lg:items-center lg:space-x-10'>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full lg:w-[450px] md:w-1/2 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#F63E7B] text-white py-2 px-6 mt-2 lg:mt-4 rounded-md hover:bg-red-300 transition duration-300 ease-in-out"
          >
            Make Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
