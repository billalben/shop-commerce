import { memo } from "react";
import { Form, Button } from "react-bootstrap";
import { TProduct } from "@types";
import styles from "./styles.module.css";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

type CartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItem = memo(
  ({
    id,
    title,
    img,
    price,
    max,
    quantity,
    changeQuantityHandler,
    removeItemHandler,
  }: CartItemProps) => {
    const renderOptions = Array.from({ length: max }, (_, idx) => (
      <option value={idx + 1} key={idx + 1}>
        {idx + 1}
      </option>
    ));

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedQuantity = Number(event.target.value);
      changeQuantityHandler(id, selectedQuantity);
    };

    return (
      <div className={cartItem}>
        <div className={product}>
          <div className={productImg}>
            <img src={img} alt={title} />
          </div>
          <div className={productInfo}>
            <h2>{title}</h2>
            <h3>{price.toFixed(2)} DZD</h3>
            <Button
              variant="secondary"
              style={{ color: "white", width: "100px" }}
              className="mt-auto"
              onClick={() => removeItemHandler(id)}
            >
              Remove
            </Button>
          </div>
        </div>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select value={quantity} onChange={changeQuantity}>
            {renderOptions}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartItem;
