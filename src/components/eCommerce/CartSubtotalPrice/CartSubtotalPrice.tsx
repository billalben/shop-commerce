import { useAppDispatch } from "@/store/hooks";
import { actPlaceOrder } from "@/store/orders/ordersSlice";
import { clearCartAfterPlaceOrder } from "@/store/cart/cartSlice";
import { useState } from "react";
import { TProduct } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";

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
      <Dialog open={showModal} onOpenChange={modalHandler}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Placing Order</DialogTitle>
            <DialogDescription>
              Are you sure you want to place order with Subtotal:{" "}
              {subtotal.toFixed(2)} DZ
              {!loading && error && (
                <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={modalHandler}>
              Cancel
            </Button>
            <Button
              className="flex gap-2 text-white"
              onClick={placeOrderHandler}
            >
              {loading ? (
                <>
                  <Spinner /> <span>Loading...</span>
                </>
              ) : (
                "Confirm"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex justify-between mb-5">
        <span>Subtotal:</span>
        <span>{subtotal.toFixed(2)} DZD</span>
      </div>

      {userAccessToken && (
        <Button
          onClick={modalHandler}
          className="block font-semibold text-white ms-auto"
        >
          Place Order
        </Button>
      )}
    </>
  );
};

export default CartSubtotalPrice;
