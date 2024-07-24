import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import { authLogout } from "@store/auth/authSlice";
import { TProduct, TLoading, isString } from "@types";

interface IWishlist {
  itemsId: number[];
  productsFullInfo: TProduct[];
  error: null | string;
  loading: TLoading;
}

const initialState: IWishlist = {
  itemsId: [],
  productsFullInfo: [],
  error: null,
  loading: "idle",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    cleanWishlistProductsFullInfo: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actLikeToggle.pending, (state) => {
        state.error = null;
      })
      .addCase(
        actLikeToggle.fulfilled,
        (state, action: PayloadAction<{ type: string; id: number }>) => {
          const { type, id } = action.payload;
          if (type === "add") {
            state.itemsId.push(id);
          } else {
            state.itemsId = state.itemsId.filter((el) => el !== id);
            state.productsFullInfo = state.productsFullInfo.filter(
              (el) => el._id !== id
            );
          }
        }
      )
      .addCase(
        actLikeToggle.rejected,
        (state, action: PayloadAction<string | unknown>) => {
          if (isString(action.payload)) state.error = action.payload;
        }
      )
      .addCase(actGetWishlist.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(
        actGetWishlist.fulfilled,
        (
          state,
          action: PayloadAction<{
            data: TProduct[] | number[];
            dataType: string;
          }>
        ) => {
          state.loading = "succeeded";
          if (action.payload.dataType === "ProductsFullInfo") {
            state.productsFullInfo = action.payload.data as TProduct[];
          } else if (action.payload.dataType === "ProductIds") {
            state.itemsId = action.payload.data as number[];
          }
        }
      )
      .addCase(
        actGetWishlist.rejected,
        (state, action: PayloadAction<string | unknown>) => {
          state.loading = "failed";
          if (isString(action.payload)) state.error = action.payload;
        }
      )
      .addCase(authLogout, (state) => {
        state.itemsId = [];
        state.productsFullInfo = [];
      });
  },
});

export { actLikeToggle, actGetWishlist };
export const { cleanWishlistProductsFullInfo } = wishlistSlice.actions;
export default wishlistSlice.reducer;
