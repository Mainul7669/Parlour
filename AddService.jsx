import { useState } from 'react';

const AddService = () => {
  const [serviceTitle, setServiceTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    // Use serviceTitle, price, description, and selectedImage as form data
    console.log({
      serviceTitle,
      price,
      description,
      selectedImage,
    });
  };

  return (
    <div className="bg-[#F4F7FC] p-4 md:p-8 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col md:flex-row md:items-center">
          <label htmlFor="serviceTitle" className="text-gray-600 font-medium mb-2">
            Service Title
          </label>
          <input
            type="text"
            id="serviceTitle"
            className="w-full md:w-1/2 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E] mt-2 md:mt-0 md:ml-2"
            placeholder="Enter service title"
            value={serviceTitle}
            onChange={(e) => setServiceTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 flex flex-col md:flex-row md:items-center">
          <label htmlFor="image" className="text-gray-600 font-medium mb-2">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            className="w-full md:w-1/2 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E] mt-2 md:mt-0 md:ml-2"
            onChange={handleImageUpload}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-600 font-medium mb-2">
            Price
          </label>
          <input
            type="text"
            id="price"
            className="w-full md:w-1/2 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600 font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            className="w-full md:w-1/2 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
            rows="4"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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

export default AddService;
