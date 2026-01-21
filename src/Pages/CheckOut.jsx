import BIlling from "../Components/checkout/BIlling";
import Order from "../Components/checkout/Order";
import Breadcrumb from "../Components/Common/Breadcrumb";

const Checkout = () => {
  return (
    <div className="">
      <div className="container  ">
        <nav
      className="flex items-center gap-[10px] mt-[80px]"
      aria-label="Breadcrumb"
    >
      {/* Home */}
      <a href="/" className="text-[14px] font-normal font-poppins text-black">
        Account
      </a>

      {/* Separator */}
      <span className="text-gray-400">/</span>

      {/* Shop */}
      <p className="text-[14px] font-normal font-poppins text-black">My Account</p>
        {/* Separator */}
      <span className="text-gray-400">/</span>
      <p className="text-[14px] font-normal font-poppins text-black">Product</p>
      <span className="text-gray-400">/</span>
      <p className="text-[14px] font-normal font-poppins text-black">View Cart</p>
      <span className="text-gray-400">/</span>
      <p className="text-[14px] font-normal font-poppins text-black">CheckOut</p>




    </nav>

        <div className=" grid grid-cols-2 gap-[30px] mt-[80px] mb-[140px]">

        <BIlling />
        <Order />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
