

function Banner() {
  return (
    <div className="bg-[#fff8f5] text-[#111430] flex flex-wrap justify-center gap-4 lg:pb-4 pb-8">
  <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center py-5 px-6 lg:px-20">
    <div className="lg:w-1/2 lg:pr-12">
      <h1 className="text-[48px] font-bold mb-4">BEAUTY SALON <br/> FOR EVERY WOMEN </h1>
      <p className="text-[16px] text-[#666666] mb-10">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
      <a
        href="/dashboard/book"
        className="bg-[#F63E7B] text-[#FFFFFF] hover:bg-pink-400 py-3 px-5 rounded text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get an Appointment
      </a>
    </div>
    <div>
      <img
        src="https://i.ibb.co/HT2GNFN/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beau.png"
        alt="Banner Image"
        className="w-[484px] h-[478px] rounded-lg shadow-lg mb-4"
      />
    </div>
  </div>
</div>

  );
}

export default Banner;



