
function PortfolioBanner() {
  return (
<div>
<div className="bg-[#fff8f5] p-4 lg:p-20 lg:flex lg:items-center flex-wrap justify-center lg:justify-between pt-10 pb-10">
      {/* Left side (Image) */}
      <div className="mb-4 lg:w-1/2 lg:mb-0">
        <img
          src="https://i.ibb.co/Gpd9G8X/engin-akyurt-g-m8-EDc4-X6-Q-unsplash-1.png"
          alt="Banner Image"
          className="w-[580px] h-[381px] object-cover object-center rounded-lg"
        />
      </div>

      {/* Right side (Text) */}
      <div className="lg:w-1/2 lg:pl-20">
        <h2 className="text-[34px] text-[#2D2D2D] font-semibold mb-4">
          Let us handle your <br /> screen <span className='text-[#F63E7B]'>Professionally</span>.
        </h2>
        <p className="text-[#000000B2] text-[14px]">
          With well-written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general ipsum. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus commodo ipsum.
        </p>

        <div className='flex mt-4'>
          <div className='mr-8'>
            <p className='text-[#F63E7B] text-[42px] font-bold'>500+</p>
            <p className='text-[#000000] text-xs font-semibold'>Happy Customers</p>
          </div>

          <div>
            <p className='text-[#F63E7B] text-[42px] font-bold'>16+</p>
            <p className='text-[#000000] text-xs font-semibold'>Total Services</p>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}

export default PortfolioBanner;
