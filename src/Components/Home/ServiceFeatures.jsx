import serImg1 from "../../assets/service1.png";
import service2 from '../../assets/service2.png';

import serImg3 from "../../assets/service3.png";

const ServiceFeatures = () => {
  return (
    <div className="flex items-center justify-between my-[140px]">
      {/* Feature 1 */}
      <div className="flex flex-col items-center gap-4">
        <img src={serImg1} alt="service" />
        <div>
          <h3 className="text-[20px] font-semibold font-poppins text-black">
            Free and Fast Delivery
          </h3>
          <p className="text-[14px] font-normal font-poppins text-black">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center gap-4">
        <img src={service2} alt="service" />

        <div>
          <h3 className="text-[20px] font-semibold font-poppins text-black">
            24/7 Customer Service
          </h3>
          <p className="text-[14px] font-normal font-poppins text-black">
            Friendly 24/7 customer support
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center gap-4">
        <img src={serImg3} alt="service" />

        <div>
          <h3 className="text-[20px] font-semibold font-poppins text-black">
            Money Back Guarantee
          </h3>
          <p className="text-[14px] font-normal font-poppins text-black">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
