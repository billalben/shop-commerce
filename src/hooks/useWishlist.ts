import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetWishlist,
  cleanWishlistProductsFullInfo,
} from "@/store/wishlist/wishlistSlice";

const useWishlist = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productsFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    const promise = dispatch(actGetWishlist("ProductsFullInfo"));

    return () => {
      promise.abort();
      dispatch(cleanWishlistProductsFullInfo());
    };
  }, [dispatch]);

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el._id],
    isLiked: true,
    isAuthenticated: true,
  }));

  return { records, loading, error };
};

export default useWishlist;
