import { memo } from "react";
import { TProduct } from "@/types";
import ProductInfo from "../ProductInfo/ProductInfo";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItem = memo(
  ({
    _id,
    title,
    img,
    price,
    max,
    quantity,
    changeQuantityHandler,
    removeItemHandler,
  }: CartItemProps) => {
    const renderOptions = Array.from({ length: max }, (_, index) => (
      <SelectItem value={String(index + 1)} key={index + 1}>
        {index + 1}
      </SelectItem>
    ));

    const changeQuantity = (value: string) => {
      changeQuantityHandler(_id, Number(value));
    };

    return (
      <div className="flex items-center justify-between pb-4 mb-4 border-b">
        <ProductInfo title={title} price={price} img={img} direction="row">
          <Button
            className="mt-auto text-white w-28"
            onClick={() => removeItemHandler(_id)}
          >
            Remove
          </Button>
        </ProductInfo>

        <div>
          <span className="block mb-2">Quantity</span>

          <Select onValueChange={changeQuantity}>
            <SelectTrigger className="w-[56px]">
              <SelectValue placeholder={quantity} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Quantity</SelectLabel>
                {renderOptions}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    );
  },
);

export default CartItem;
