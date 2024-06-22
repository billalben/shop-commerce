import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import GridList from "@components/common/GridList/GridList";
import { TProduct } from "@customTypes/product";

function Products() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Loading loading={loading} error={error}>
      <GridList<TProduct>
        records={records}
        renderItem={(record) => <Product {...record} />}
      />
    </Loading>
  );
}

export default Products;
