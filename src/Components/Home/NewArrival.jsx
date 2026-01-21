import { FaArrowRight } from "react-icons/fa";

import arivalImg from '../../assets/arivalImg1.png'
import arivalImg2 from '../../assets/arivalImg2.png'
import arivalImg3 from '../../assets/arivalImg3.png'
import arivalImg4 from '../../assets/arivalImg4.png'

const NewArrival = () => {
  return (
    <div className="w-full bg-white py-10">
      <h2 className="text-center text-2xl font-semibold mb-8">New Arrival</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
        {/* Left Large Card */}
        <div className="col-span-1 row-span-2 bg-black text-white relative overflow-hidden">
          <img
            src={arivalImg}
            alt="Playstation"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-xl font-semibold">PlayStation 5</h3>
            <p className="text-sm text-gray-300 mt-1">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-3 flex items-center gap-2 text-sm underline">
              Shop Now <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Women Collection */}
        <div className="col-span-2 bg-black text-white relative overflow-hidden h-[240px]">
          <img
            src={arivalImg2}
            alt="Women Collection"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-xl font-semibold">Women’s Collections</h3>
            <p className="text-sm text-gray-300 mt-1">
              Featured woman collections that give you another vibe.
            </p>
            <button className="mt-3 flex items-center gap-2 text-sm underline">
              Shop Now <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Speakers */}
        <div className="bg-black text-white relative overflow-hidden h-[240px]">
          <img
            src={arivalImg3}
            alt="Speakers"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-lg font-semibold">Speakers</h3>
            <p className="text-sm text-gray-300 mt-1">
              Amazon wireless speakers
            </p>
            <button className="mt-3 flex items-center gap-2 text-sm underline">
              Shop Now <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Perfume */}
        <div className="bg-black text-white relative overflow-hidden h-[240px]">
          <img
            src={arivalImg4}
            alt="Perfume"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-lg font-semibold">Perfume</h3>
            <p className="text-sm text-gray-300 mt-1">
              GUCCI INTENSE OUD EDP
            </p>
            <button className="mt-3 flex items-center gap-2 text-sm underline">
              Shop Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
