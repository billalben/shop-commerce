import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import actPlaceOrder from "./act/actPlaceOrder";
import actGetOrders from "./act/actGetOrders";
import { TLoading, TOrderItem, isString } from "@types";

interface IOrderSlice {
  orderList: TOrderItem[];
  loading: TLoading;
  error: string | null;
}

const initialState: IOrderSlice = {
  orderList: [],
  loading: "idle",
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // Reducer to reset order status
    resetOrderStatus: (state) => {
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Place order
      .addCase(actPlaceOrder.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actPlaceOrder.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(
        actPlaceOrder.rejected,
        (state, action: PayloadAction<string | unknown>) => {
          state.loading = "failed";

          if (isString(action.payload)) state.error = action.payload;
        }
      )

      // Get orders
      .addCase(actGetOrders.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(
        actGetOrders.fulfilled,
        (state, action: PayloadAction<TOrderItem[]>) => {
          state.loading = "succeeded";
          state.orderList = action.payload;
        }
      )
      .addCase(
        actGetOrders.rejected,
        (state, action: PayloadAction<string | unknown>) => {
          state.loading = "failed";

          if (isString(action.payload)) state.error = action.payload;
          else state.error = "An unexpected error occurred";
        }
      );
  },
});

export { actPlaceOrder, actGetOrders };

export const { resetOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
