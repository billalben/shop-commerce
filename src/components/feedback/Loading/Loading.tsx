import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";

import { TLoading } from "@/types";
import TableSkeleton from "../TableSkeleton/TableSkeleton";

const skeletonsTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
  table: TableSkeleton,
};

type LoadingProps = {
  status: TLoading;
  error?: string | null;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
};

const Loading = ({
  status,
  error = null,
  children,
  type = "category",
}: LoadingProps) => {
  const Component = skeletonsTypes[type];

  if (status === "pending") return <Component />;

  if (status === "failed") {
    return (
      <div>
        <LottieHandler type="error" message={error as string} />
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;
