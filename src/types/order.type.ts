import { TProduct } from "./product.types";

export type TOrderItem = {
  _id: number;
  items: TProduct[];
  subtotal: number;
};
