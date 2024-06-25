import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import Logo from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";

const HeaderBasket = () => {
  const navigate = useNavigate();
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);

  useEffect(() => {
    if (!totalQuantity) return;

    setIsAnimate(true);

    const debounce = setTimeout(() => setIsAnimate(false), 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  const quantityStyle = `${styles.basketQuantity} ${
    isAnimate ? styles.pumpCartQuantity : ""
  }`;

  return (
    <div className={styles.basketContainer} onClick={() => navigate("/cart")}>
      <div className={styles.basketCart}>
        <Logo title="basket icon" />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;
