import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@/utils";
import { TProduct } from "@/types";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk<TProduct[], string>(
  "products/actGetProductsByCatPrefix",
  async (prefix, { rejectWithValue, signal }) => {
    try {
      const response = await axios.get<TResponse>(
        `/products?cat_prefix=${prefix}`,
        { signal }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsByCatPrefix;
