import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const TestimonialSwiper = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-10">
      <Slider {...settings} className="mx-10 pb-4">
        {/* Slide 1 */}
        <div className="p-4">
          <div className="bg-white p-6">
            <div className="flex items-center mb-4">
              {/* Image */}
              <img
                src="src/assets/images/Ellipse 90.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />

              {/* Title and Subtitle */}
              <div>
                <h2 className="text-lg font-semibold text-black">
                  Nash Patrik
                </h2>
                <p className="text-black text-sm">CEO, Manpol</p>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>

            {/* Star Icons */}
            <div className="flex items-center">
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="p-4">
        <div className="bg-white p-6">
            <div className="flex items-center mb-4">
              {/* Image */}
              <img
                src="src/assets/images/Ellipse 91.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />

              {/* Title and Subtitle */}
              <div>
                <h2 className="text-lg font-semibold text-black">
                Miriam Barron
                </h2>
                <p className="text-black text-sm">CEO, Manpol</p>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>

            {/* Star Icons */}
            <div className="flex items-center">
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="p-4">
        <div className="bg-white p-6">
            <div className="flex items-center mb-4">
              {/* Image */}
              <img
                src="src/assets/images/Ellipse 92.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />

              {/* Title and Subtitle */}
              <div>
                <h2 className="text-lg font-semibold text-black">
                Bria Malone
                </h2>
                <p className="text-black text-sm">CEO, Manpol</p>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>

            {/* Star Icons */}
            <div className="flex items-center">
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
            </div>
          </div>
        </div>


    {/* Slide 1 */}
    <div className="p-4">
          <div className="bg-white p-6">
            <div className="flex items-center mb-4">
              {/* Image */}
              <img
                src="src/assets/images/Ellipse 90.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />

              {/* Title and Subtitle */}
              <div>
                <h2 className="text-lg font-semibold text-black">
                  Nash Patrik
                </h2>
                <p className="text-black text-sm">CEO, Manpol</p>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>

            {/* Star Icons */}
            <div className="flex items-center">
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="p-4">
        <div className="bg-white p-6">
            <div className="flex items-center mb-4">
              {/* Image */}
              <img
                src="src/assets/images/Ellipse 91.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />

              {/* Title and Subtitle */}
              <div>
                <h2 className="text-lg font-semibold text-black">
                Miriam Barron
                </h2>
                <p className="text-black text-sm">CEO, Manpol</p>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>

            {/* Star Icons */}
            <div className="flex items-center">
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="p-4">
        <div className="bg-white p-6">
            <div className="flex items-center mb-4">
              {/* Image */}
              <img
                src="src/assets/images/Ellipse 92.png"
                alt="Card Image"
                width="40px"
                height="40px"
                className="mr-4"
              />

              {/* Title and Subtitle */}
              <div>
                <h2 className="text-lg font-semibold text-black">
                Bria Malone
                </h2>
                <p className="text-black text-sm">CEO, Manpol</p>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>

            {/* Star Icons */}
            <div className="flex items-center">
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
              <FaStar className="fas fa-star text-yellow-500 mr-1" />
            </div>
          </div>
        </div>



        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default TestimonialSwiper;
