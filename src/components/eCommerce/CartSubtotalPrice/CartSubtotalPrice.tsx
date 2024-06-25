import { TProduct } from "@customTypes/product";
import styles from "./styles.module.css";

type CartSubtotalPriceProps = { products: TProduct[] };

const CartSubtotalPrice = ({ products }: CartSubtotalPriceProps) => {
  const subtotal = products.reduce((accumulator, current) => {
    const price = current.price;
    const quantity = current.quantity;

    return quantity && typeof quantity === "number"
      ? accumulator + price * quantity
      : accumulator;
  }, 0);

  return (
    <div className={styles.container}>
      <span>Subtotal:</span>
      <span>{subtotal.toFixed(2)} DZD</span>
    </div>
  );
};

export default CartSubtotalPrice;
