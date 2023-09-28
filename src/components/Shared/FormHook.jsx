import { useForm } from "react-hook-form";

export default function FormHook() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // Handle your form submission here
    console.log(data);

    // Reset the form after successful submission
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto mt-20 p-4 bg-[#FFF8F5] rounded-lg"
    >
      <div className="mb-4 flex flex-wrap -mx-2">
        <div className="w-1/2 px-2">
          <input
            {...register("firstName")}
            id="firstName"
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 bg-[#FFFFFF] rounded-md"
          />
        </div>
        <div className="w-1/2 px-2">
          <input
            {...register("lastName")}
            id="lastName"
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 bg-[#FFFFFF] rounded-md"
          />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap -mx-2">
        <div className="w-1/2 px-2">
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 bg-[#FFFFFF] rounded-md"
          />
        </div>
        <div className="w-1/2 px-2">
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 bg-[#FFFFFF] rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <textarea
          {...register("message")}
          id="message"
          placeholder="Your Message"
          className="w-full px-4 py-2 bg-[#FFFFFF] rounded-md"
          rows="4"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-[#F63E7B] text-[#FFFFFF] px-4 py-2 rounded text-sm font-semibold hover:bg-pink-300 transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
