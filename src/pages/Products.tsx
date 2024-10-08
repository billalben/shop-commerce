import { GridList, Heading } from "@/components/common";
import { Product } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import { TProduct } from "@/types";
import useProducts from "@/hooks/useProducts";

const Products = () => {
  const { loading, error, productPrefix, productsFullInfo } = useProducts();

  return (
    <>
      <Heading title={`${productPrefix} Products`} />
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
          emptyMessage="There are no products"
        />
      </Loading>
    </>
  );
};

export default Products;
