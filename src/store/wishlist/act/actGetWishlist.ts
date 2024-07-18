import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";
import { TProduct } from "@types";
import { RootState } from "@store/index";


const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (dataType: "ProductsFullInfo" | "ProductIds", thunkAPI) => {
    const { rejectWithValue, signal, getState } = thunkAPI;
    const { auth } = getState() as RootState;

    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        `/wishlist?userId=${auth.user?.id}`,
        { signal }
      );

      if (!userWishlist.data.length) {
        return { data: [], dataType: "empty" };
      }

      if (dataType === "ProductIds") {
        const productIds = userWishlist.data.map((el) => el.productId);
        return { data: productIds, dataType: "ProductIds" };
      } else {
        const concatenatedItemsId = userWishlist.data
          .map((el) => `id=${el.productId}`)
          .join("&");

        const response = await axios.get<TProduct[]>(
          `/products?${concatenatedItemsId}`
        );
        return { data: response.data, dataType: "ProductsFullInfo" };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetWishlist;
