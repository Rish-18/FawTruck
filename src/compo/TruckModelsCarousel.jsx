
import Slider from "react-slick";

const truckModels = ["New Energy", "Tractor", "Rigid Truck", "Dump Truck", "Special Purpose"];

export default function TruckModelsCarousel() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For devices below 768px (mobile view)
        settings: {
          slidesToShow: 1, // Show one slide at a time
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" bg-white">
      <div className="container mx-auto">
        {/* Carousel */}
        <Slider {...settings}>
          {truckModels.map((truck, index) => (
            <div key={index} className="p-4">
              <div className="relative bg-gray-900 rounded-lg overflow-hidden group">
                {/* Truck Image */}
                <img
  src="https://www.scania.com/content/dam/www/market/master/products/attributes/electrification/new-energy/electric-truck-new-energy-16-9.jpg.transform/Rend_1200X630/image.jpg"
  alt={truck}
  className="w-[320px] h-60 sm:w-[360px] object-cover group-hover:scale-105 transition-transform duration-300"
/>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
                {/* Truck Name */}
                <h3 className="absolute inset-x-0 bottom-4 text-center text-white text-lg font-semibold">
                  {truck}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

