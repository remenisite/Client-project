import Breadcrumb from "../Components/Common/Breadcrumb";
import CartBottom from "../Components/cart/CartBottom";
import CartButton from "../Components/cart/CartButton";
import CartHeader from "../Components/cart/CartHeader";
import CartItemRow from "../Components/cart/CartItemRow";

const Cart = () => {
  return (
    <div className="pb-[140px]">
      <div className="container">
        <Breadcrumb data={"Cart"} />
        <table className="w-full text-left border-collapse mt-[80px] ">
          <CartHeader />
          <div className="flex flex-col gap-[40px] mt-[40px] mb-[24px]">
            <CartItemRow />
            <CartItemRow />
          </div>
        </table>
        <CartButton />
        <CartBottom />
      </div>
    </div>
  );
};

export default Cart;
