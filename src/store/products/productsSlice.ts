import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import { isString, TLoading, TProduct } from "@/types";

interface ICategoriesState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpProductsRecords: (state) => {
      state.records = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(actGetProductsByCatPrefix.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(
        actGetProductsByCatPrefix.fulfilled,
        (state, action: PayloadAction<TProduct[]>) => {
          state.loading = "succeeded";
          state.records = action.payload;
        }
      )
      .addCase(
        actGetProductsByCatPrefix.rejected,
        (state, action: PayloadAction<string | unknown>) => {
          state.loading = "failed";

          if (isString(action.payload)) state.error = action.payload;
        }
      );
  },
});

export const { cleanUpProductsRecords } = productsSlice.actions;
export { actGetProductsByCatPrefix };
export default productsSlice.reducer;
