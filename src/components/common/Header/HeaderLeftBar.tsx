import { useAppSelector } from "@/store/hooks";
import { getCartTotalQuantitySelector } from "@/store/cart/cartSlice";
import HeaderCounter from "./HeaderCounter";
import WishlistIcon from "@/assets/svg/wishlist.svg?react";
import CartIcon from "@/assets/svg/cart.svg?react";

const HeaderLeftBar = () => {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);

  return (
    <div className="flex items-center gap-3">
      <HeaderCounter
        to="wishlist"
        title="Wishlist"
        totalQuantity={wishlistTotalQuantity}
        svgIcon={<WishlistIcon title="wishlist" />}
      />
      <HeaderCounter
        to="cart"
        title="Cart"
        totalQuantity={cartTotalQuantity}
        svgIcon={<CartIcon title="cart" />}
      />
    </div>
  );
};

export default HeaderLeftBar;
