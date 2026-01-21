import { FaArrowRight } from "react-icons/fa";

import arivalImg from "../../assets/arivalImg1.png";
import arivalImg2 from "../../assets/arivalImg2.png";
import arivalImg3 from "../../assets/arivalImg3.png";
import arivalImg4 from "../../assets/arivalImg4.png";
import Breadcrumb from "../Common/Breadcrumb";
import CommonHead from "../Common/CommonHead";

const NewArrival = () => {
  return (
    <>
      <div  data-aos="fade-up" className="mt-[168px]">
        <CommonHead h2={"Featured"} hp={"New Arrival"} />
        <div className="grid grid-cols-2 gap-[30px] mt-[60px]">
          <div>
            <img src={arivalImg} alt="images" />
          </div>
          <div>
            <img src={arivalImg2} alt="images" />
            <div className="grid grid-cols-2 gap-[30px] mt-[32px]">
              <img src={arivalImg3} alt="images" />
              <img src={arivalImg4} alt="imges" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
