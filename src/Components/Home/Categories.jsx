import jbl_img from "../../assets/jbl_img.png";

const Categories = () => {
  return (
    <div className="bg-black text-white py-[70px] px-[50px] mt-[140px] ">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[16px] font-semibold font-poppins text-[#00FF66]">
            Categories
          </h3>
          {/* Headline */}
          <h2 className="text-[48px] font-semibold font-inter py-[32px] text-white">
            Enhance Your <br /> Music Experience
          </h2>

          {/* Countdown Timer */}
          <div className="flex gap-4">
            {[
              { label: "Hours", value: "23" },
              { label: "Days", value: "05" },
              { label: "Minutes", value: "59" },
              { label: "Seconds", value: "35" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-[#FFFFFF] text-black"
              >
                <span className="text-xl font-bold">{item.value}</span>
                <span className="text-xs">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Buy Now Button */}
          <button className="bg-[#00FF66] mt-[40px] hover:bg-green-700 text-white px-6 py-2 rounded font-semibold">
            Buy Now!
          </button>
        </div>
        <div>
          <img src={jbl_img} alt="music" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
