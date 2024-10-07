import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { RootState } from "@/store/index";
import { TOrderItem } from "@/types";

type TResponse = TOrderItem[];

const actGetOrders = createAsyncThunk<TOrderItem[], void, { state: RootState }>(
  "orders/actGetOrders",
  async (_, { rejectWithValue, getState, signal }) => {
    const { auth } = getState();

    try {
      const res = await axios.get<TResponse>(
        `/orders?userId=${auth.user?._id}`,
        { signal }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetOrders;
