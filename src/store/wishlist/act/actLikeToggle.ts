import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store/index";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import axios from "axios";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState() as RootState;

    try {
      const isRecordExist = await axios.get(
        `/wishlist?userId=${auth.user?._id}&productId=${id}`,
      );

      if (isRecordExist.data !== null) {
        await axios.delete(`/wishlist/${isRecordExist.data._id}`);
        return { type: "remove", id };
      } else {
        await axios.post("/wishlist", {
          userId: auth.user?._id,
          productId: id,
        });
        return { type: "add", id };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  },
);

export default actLikeToggle;
