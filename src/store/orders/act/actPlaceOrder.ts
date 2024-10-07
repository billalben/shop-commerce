import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { RootState } from "@/store/index";

const actPlaceOrder = createAsyncThunk(
  "orders/actPlaceOrder",
  async (subtotal: number, { rejectWithValue, getState }) => {
    const { cart, auth } = getState() as RootState;

    const orderItems = cart.productsFullInfo.map((product) => ({
      id: product._id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity: cart.items[product._id],
    }));

    try {
      const res = await axios.post("/orders", {
        userId: auth.user?._id,
        items: orderItems,
        subtotal,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actPlaceOrder;
