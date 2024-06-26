import { actGetProductsByItems, cartItemChangeQuantity, cartItemRemove, clearProductFullInfo } from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";

// Custom hook for managing cart logic
const useCart = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    ({ cart }) => cart
  );

  useEffect(() => {
    dispatch(actGetProductsByItems());

    return () => {
      dispatch(clearProductFullInfo());
    };
  }, [dispatch]);

  const products = productsFullInfo.map((product) => ({
    ...product,
    quantity: items[product.id],
  }));

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

  return { products, loading, error, changeQuantityHandler, removeItemHandler };
};

export default useCart;