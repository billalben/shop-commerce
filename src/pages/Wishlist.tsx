import { GridList, Heading } from "@/components/common";
import { Product } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import { TProduct } from "@/types";
import useWishlist from "@/hooks/useWishlist";

const Wishlist = () => {
  const { loading, error, records } = useWishlist();

  return (
    <>
      <Heading title="Your Wishlist" />
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
          emptyMessage="Your wishlist is empty"
        />
      </Loading>
    </>
  );
};

export default Wishlist;
