import { cn } from "@/lib/utils";

type ProductInfoProps = {
  title: string;
  img: string;
  price: number;
  quantity?: number;
  direction?: "row" | "column";
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const ProductInfo = ({
  title,
  img,
  price,
  quantity,
  direction = "row",
  children,
}: ProductInfoProps) => {
  return (
    <div
      className={cn(
        "flex",
        direction === "row"
          ? "mt-2"
          : "relative flex-1 flex-col justify-between overflow-hidden rounded-lg border",
      )}
    >
      <div className={cn(direction === "column" && "block bg-gray-300")}>
        <img
          src={img}
          className={cn(
            "object-cover object-center",
            direction === "row"
              ? "block h-44 max-w-44"
              : "h-full max-h-72 w-full border-b",
          )}
          alt={title}
        />
      </div>
      <div
        className={cn(
          direction === "row"
            ? "ml-2 flex w-36 flex-1 flex-col"
            : "w-full px-4 pb-4 pt-2",
        )}
      >
        <h2
          title={title}
          className={cn(
            "mb-3 text-lg text-black",
            direction === "row"
              ? "w-full"
              : "mt-2 w-full overflow-hidden truncate",
          )}
        >
          {title}
        </h2>
        <h3 className="text-sm">{price.toFixed(2)} DZ</h3>
        {quantity && <h3>Total Quantity: {quantity}</h3>}
        {quantity && <h3>Price Total: {(quantity * price).toFixed(2)}</h3>}

        {children}
      </div>
    </div>
  );
};

export default ProductInfo;
