import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actAuthLogout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post<string>("/auth/logout");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Logout failed");
  }
});

export default actAuthLogout;
