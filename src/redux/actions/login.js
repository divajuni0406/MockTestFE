import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk(
  "userLogin/userLogin",
  async ({ pinValue }, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:5000/login`, {
        password: pinValue,
      });
      console.log(response.data, "aaaaaaaaaaaaaaaaaaaaaaaaaa");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      if (error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("Something Wrong In Server");
    }
  }
);

const login = createSlice({
  name: "auth",
  initialState: {
    userInformation: {},
    isLoggedIn: false,
    isLoading: false,
  },
  reducers: {
    getUserData: (state, action) => {
      state.userInformation = action.payload;
    },
    isUserLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
      console.log(action, "kakakakakka");
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [userLogin.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [userLogin.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { isUserLoggedIn, getUserData } = login.actions;
export default login.reducer;
