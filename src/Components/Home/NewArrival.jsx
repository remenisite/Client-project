import { FaArrowRight } from "react-icons/fa";

import arivalImg from '../../assets/arivalImg1.png'
import arivalImg2 from '../../assets/arivalImg2.png'
import arivalImg3 from '../../assets/arivalImg3.png'
import arivalImg4 from '../../assets/arivalImg4.png'

const NewArrival = () => {
  return (

    <>
    
    <div>
        <div><img src={arivalImg} alt="images" /></div>
        <div>
            <img src={arivalImg2} alt="images" />
            <div>
                <img src={arivalImg3} alt="images" />
                <img src={arivalImg4} alt="imges" />
            </div>
        </div>
    </div>
    
    
    </>

 
  );
};

export default NewArrival;
