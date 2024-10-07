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
      className={`${direction === "row" ? "mt-2 flex" : "relative flex flex-1 flex-col justify-between overflow-hidden rounded-lg border"}`}
    >
      <div className={`${direction === "column" && "block bg-gray-300"}`}>
        <img
          src={img}
          className={`${direction === "row" ? "block h-44 shrink-0" : "h-full max-h-72 w-full border-b object-cover object-center"}`}
          alt={title}
        />
      </div>
      <div
        className={`${direction === "row" ? "ml-2 flex w-36 flex-1 flex-col" : "w-full px-4 pb-4 pt-2"}`}
      >
        <h2
          title={title}
          className={`text-lg text-black mb-3 ${direction === "row" ? "w-full" : "mt-2 w-full overflow-hidden truncate"}`}
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
