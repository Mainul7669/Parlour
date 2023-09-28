import { useState } from "react";

const Book = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    services: "",
    paymentMethod: "", // To store the selected payment method
    cardNumber: "",
    expiration: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-6">Book a service</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="full-name"
              name="fullName"
              placeholder="Anika Ahmed"
              className="w-full lg:w-1/3 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Anika@gmail.com"
              className="w-full lg:w-1/3 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <select
              id="services"
              name="services"
              className="w-full lg:w-1/3 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
              value={formData.services}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Anti Age Face Treatment">
                Anti Age Face Treatment
              </option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
          </div>

          <div className="mb-4">
            <p className="mb-2">Select Payment Method:</p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                className="form-radio h-5 w-5 "
                onChange={handleInputChange}
              />

              <span
                className={`ml-2 hover:text-[#F63E7B] ${
                  formData.paymentMethod === "Credit Card"
                    ? "font-semibold text-[#F63E7B]"
                    : ""
                }`}
              >
                Credit Card
              </span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="paymentMethod"
                value="Paypal"
                className="form-radio h-5 w-5 "
                onChange={handleInputChange}
              />
              <span
                className={`ml-2 hover:text-[#F63E7B] ${
                  formData.paymentMethod === "Paypal"
                    ? "font-semibold text-[#F63E7B]"
                    : ""
                }`}
              >
                Paypal
              </span>
            </label>
          </div>
          {formData.paymentMethod === "Credit Card" && (
            <div>
              <div className="mb-4">
                <input
                  type="text"
                  id="card-number"
                  name="cardNumber"
                  placeholder="Card Number"
                  className="w-full lg:w-1/3 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4 flex">
                <div className="w-1/2 lg:w-1/6 pr-2">
                  <input
                    type="text"
                    id="expiration"
                    name="expiration"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
                    value={formData.expiration}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-1/2 lg:w-1/6 pl-2">
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    placeholder="CVC"
                    className="w-full px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
                    value={formData.cvc}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}

          {formData.paymentMethod === "Paypal" && (
            <div>
              <div className="mb-4">
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  placeholder="Name"
                  className="w-full lg:w-1/3 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full lg:w-1/3 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
                />
              </div>
            </div>
          )}

          <div className="flex gap-6 items-center pt-4">
            <p className="text-[#16322E] font-semibold">
              Your Service charged will be{" "}
              <span className="font-bold">$1000</span>
            </p>
            <button
              type="submit"
              className="bg-[#F63E7B] text-white px-10 py-3 rounded-lg hover:bg-red-300"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
