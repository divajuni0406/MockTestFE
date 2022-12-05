import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOneUser = createAsyncThunk(
  "getUser/getOneUser",
  async ({ id }) => {
    try {
      const response = await axios.get(
        `https://mock-test-be.vercel.app/get-user-data/${id}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUsers = createAsyncThunk("getUsers/getAllUsers", async () => {
  try {
    const response = await axios.get(
      `https://mock-test-be.vercel.app/get-users-data`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const addUser = createAsyncThunk(
  "addUser/addUser",
  async (
    { username, email, firstname, lastname, fullname, address },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        `https://mock-test-be.vercel.app/add-user`,
        {
          username,
          email,
          firstname,
          lastname,
          fullname,
          address,
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      if (error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("Something Wrong In Server");
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser/updateUser",
  async (
    { username, email, firstname, lastname, fullname, address, id },
    thunkAPI
  ) => {
    try {
      const response = await axios.put(
        `https://mock-test-be.vercel.app/update-user/${id}`,
        {
          username,
          email,
          firstname,
          lastname,
          fullname,
          address,
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      if (error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("Something Wrong In Server");
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser/deleteUser",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://mock-test-be.vercel.app/delete-user/${id}`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      if (error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("Something Wrong In Server");
    }
  }
);

const crud = createSlice({
  name: "auth",
  initialState: {
    getUser: [],
    getAllUsers: [],
  },
  extraReducers: {
    [getOneUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getOneUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.getUser = action.payload.data.result;
    },
    [getOneUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload.data.result, "payloadddddddddddddddd");
      state.getAllUsers = action.payload.data.result;
    },
    [getUsers.rejected]: (state) => {
      state.isLoading = false;
    },
    [addUser.pending]: (state) => {
      state.isLoading = true;
    },
    [addUser.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [addUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [updateUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteUser.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [deleteUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default crud.reducer;
