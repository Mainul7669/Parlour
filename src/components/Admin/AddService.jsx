import { useState } from "react";
import Swal from "sweetalert2";

const AddService = () => {
  const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const [serviceTitle, setServiceTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedImage);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;

          const serviceData = {
            serviceTitle,
            price,
            description,
            image: imgUrl,
          };

          fetch("https://parlour-server-seven.vercel.app/services", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(serviceData),
          })
            .then((response) => {
              if (response.ok) {
                // Reset form fields after successful submission
                setServiceTitle("");
                setPrice("");
                setDescription("");
                setSelectedImage(null);

                Swal.fire({
                  text: "Service Added Successfully",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else {
                // Handle errors
                throw new Error("Network response was not ok.");
              }
            })
            .catch((error) => {
              console.error(
                "There was a problem with the fetch operation:",
                error
              );
              // Optionally, show an error message to the user
              Swal.fire(
                "Error",
                "There was an error adding the service. Please try again later.",
                "error"
              );
            });
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        // Optionally, show an error message to the user
        Swal.fire(
          "Error",
          "There was an error uploading the photo. Please try again later.",
          "error"
        );
      });
  };

  return (
    <div className="bg-[#F4F7FC] p-4 md:p-8 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            htmlFor="serviceTitle"
            className="text-gray-600 font-medium mb-2"
          >
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
          <label
            htmlFor="price"
            className="block text-gray-600 font-medium mb-2"
          >
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
          <label
            htmlFor="description"
            className="block text-gray-600 font-medium mb-2"
          >
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
