import { memo, useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { actLikeToggle } from "@/store/wishlist/wishlistSlice";
import { addToCart } from "@/store/cart/cartSlice";
import Like from "@/assets/svg/like.svg?react";
import LikeFill from "@/assets/svg/like-fill.svg?react";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/types";

import ProductInfo from "./ProductInfo";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Spinner } from "@/components/feedback";

const Product = memo(
  ({
    _id,
    title,
    price,
    img,
    max,
    quantity,
    isLiked,
    isAuthenticated,
  }: TProduct) => {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useAppDispatch();
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

    useEffect(() => {
      if (!isBtnDisabled) return;

      const debounce = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);

      return () => clearTimeout(debounce);
    }, [isBtnDisabled]);

    const addToCartHandler = () => {
      dispatch(addToCart(_id));
      setIsBtnDisabled(true);
    };

    const likeToggleHandler = () => {
      if (isAuthenticated) {
        if (!isLoading) {
          setIsLoading(true);
          dispatch(actLikeToggle(_id))
            .unwrap()
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
        }
      } else {
        setShowModal(true);
      }
    };

    return (
      <>
        <Dialog
          open={showModal}
          onOpenChange={(isOpen) => {
            setShowModal(isOpen);
          }}
        >
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Login Required</DialogTitle>
              <DialogDescription>
                You need to login first to add this item to your wishlist.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="default" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <ProductInfo title={title} price={price} img={img} direction="column">
          <div
            className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-transparent p-1 hover:shadow-sm"
            onClick={likeToggleHandler}
          >
            {isLoading ? <Spinner /> : isLiked ? <LikeFill /> : <Like />}
          </div>

          <p className="mb-3 text-sm text-gray-500">
            {quantityReachedToMax
              ? "You reached to the limit"
              : `You can add ${currentRemainingQuantity} item(s)`}
          </p>

          <Button
            className="flex gap-2 text-white"
            onClick={addToCartHandler}
            disabled={isBtnDisabled || quantityReachedToMax}
          >
            {isBtnDisabled ? (
              <>
                <Spinner />
                <span>Loading...</span>
              </>
            ) : (
              "Add to cart"
            )}
          </Button>
        </ProductInfo>
      </>
    );
  },
);
export default Product;
