import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { TProduct } from "@customTypes/product";

const Products = () => {
  const { prefix } = useParams<{ prefix: string }>();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);

  const productsFullInfo = useMemo(
    () =>
      records.map((el) => ({
        ...el,
        quantity: cartItems[el.id] || 0,
      })),
    [records, cartItems]
  );

  useEffect(() => {
    if (prefix) {
      dispatch(actGetProductsByCatPrefix(prefix));
    }

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return (
    <>
      <Heading className="text-capitalize">{prefix} Products</Heading>
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;
