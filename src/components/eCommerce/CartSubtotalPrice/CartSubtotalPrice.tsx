import { useAppDispatch } from "@store/hooks";
import { actPlaceOrder } from "@store/orders/ordersSlice";
import { clearCartAfterPlaceOrder } from "@store/cart/cartSlice";
import { useState } from "react";
import { TProduct } from "@types";
import { Button, Modal, Spinner } from "react-bootstrap";

type CartSubtotalPriceProps = {
  products: TProduct[];
  userAccessToken: string | null;
};

const CartSubtotalPrice = ({
  products,
  userAccessToken,
}: CartSubtotalPriceProps) => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const subtotal = products.reduce((accumulator, el) => {
    const price = el.price;
    const quantity = el.quantity;
    if (quantity && typeof quantity === "number") {
      return accumulator + price * quantity;
    } else {
      return accumulator;
    }
  }, 0);

  const modalHandler = () => {
    setShowModal(!showModal);
    setError(null);
  };

  const placeOrderHandler = () => {
    setLoading(true);
    dispatch(actPlaceOrder(subtotal))
      .unwrap()
      .then(() => {
        dispatch(clearCartAfterPlaceOrder());
        setShowModal(false);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Modal centered show={showModal} onHide={modalHandler} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Placing Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to place order with Subtotal:{" "}
          {subtotal.toFixed(2)} DZ
          {!loading && error && (
            <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalHandler}>
            Cancel
          </Button>
          <Button
            variant="info"
            style={{ color: "white" }}
            onClick={placeOrderHandler}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm"></Spinner> Loading...
              </>
            ) : (
              "Confirm"
            )}
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="d-flex justify-content-between mb-5">
        <span>Subtotal:</span>
        <span>{subtotal.toFixed(2)} DZD</span>
      </div>

      {userAccessToken && (
        <Button
          variant="info"
          style={{ color: "white" }}
          onClick={modalHandler}
          className="d-block ms-auto fw-semibold"
        >
          Place Order
        </Button>
      )}
    </>
  );
};

export default CartSubtotalPrice;
