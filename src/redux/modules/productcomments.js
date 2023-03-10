import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getproduct_comments = createAsyncThunk(
  "product_comments/getproduct_comments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3003/product_comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addproduct_comments = createAsyncThunk(
  "product_comments/addproduct_comments",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://localhost:3003/product_comments", payload);
      const data = await axios.get("http://localhost:3003/product_comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteproduct_comments = createAsyncThunk(
  "product_comments/deleteproduct_comments",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3003/product_comments/${payload}`);
      const data = await axios.get("http://localhost:3003/product_comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteAllproduct_comments = createAsyncThunk(
  "product_comments/deleteproduct_comments",
  async (payload, thunkAPI) => {
    try {
      let data = await axios.get("http://localhost:3003/product_comments");

      for (var product_comments of data.data) {
        if (product_comments.product_post_id === payload) {
          await axios.delete(
            `http://localhost:3003/product_comments/${product_comments.id}`
          );
        }
      }

      data = await axios.get("http://localhost:3003/product_comments");

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateproduct_comments = createAsyncThunk(
  "product_comments/updateproduct_comments",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(
        `http://localhost:3003/product_comments/${payload.id}`,
        payload
      );
      const data = await axios.get("http://localhost:3003/product_comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  product_comments: [
    // {
    //   id: 1,
    //   title: "??????1",
    //   content: "??????1",
    //   isDone: false,
    //   displaytoggle: true,
    // },
    // {
    //   id: 2,
    //   title: "??????2",
    //   content: "??????2",
    //   isDone: false,
    //   displaytoggle: true,
    // },
  ],
  isLoading: false,
  error: null,
};

const product_commentsSlice = createSlice({
  name: "product_comments",
  initialState,
  reducers: {
    addproduct_comments: (state, action) => {
      state.product_comments = [...state.product_comments, action.payload];
    },

    deleteproduct_comments: (state, action) => {
      state.product_comments = state.product_comments.filter(
        (product_comments) => product_comments.id !== action.payload
      );
    },

    toggleproduct_comments: (state, action) => {
      let commentlist = state.product_comments.slice();
      commentlist.find((e) => e.id === action.payload).isDone =
        !commentlist.find((e) => e.id === action.payload).isDone;
      state.product_comments = commentlist;
    },
    toggleDisplay: (state, action) => {
      let commentlist = state.product_comments.slice();
      commentlist.find((e) => e.id === action.payload).displaytoggle =
        !commentlist.find((e) => e.id === action.payload).displaytoggle;
      state.product_comments = commentlist;
    },
    updateComment: (state, action) => {
      let commentlist = state.product_comments.slice();
      // commentlist.find((e) => e.id === action.payload.id) =
      //   action.payload;
      // state.comments = commentlist;
    },
  },
  extraReducers: {
    [__getproduct_comments.pending]: (state) => {
      state.isLoading = true; // ???????????? ????????? ???????????? ??????????????? true??? ???????????????.
    },
    [__getproduct_comments.fulfilled]: (state, action) => {
      state.isLoading = false; // ???????????? ????????? ????????????, false??? ???????????????.
      state.product_comments = action.payload; // Store??? ?????? comments??? ???????????? ????????? comments??? ????????????.
    },
    [__getproduct_comments.rejected]: (state, action) => {
      state.isLoading = false; // ????????? ???????????????, ???????????? ????????? ????????????, false??? ???????????????.
      state.error = action.payload; // catch ??? error ????????? state.error??? ????????????.
    },

    [__addproduct_comments.pending]: (state) => {
      state.isLoading = true;
    },
    [__addproduct_comments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product_comments = action.payload;
    },
    [__addproduct_comments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deleteproduct_comments.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteproduct_comments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product_comments = action.payload;
    },
    [__deleteproduct_comments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__updateproduct_comments.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateproduct_comments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product_comments = action.payload;
    },
    [__updateproduct_comments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deleteAllproduct_comments.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteAllproduct_comments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product_comments = action.payload;
    },
    [__deleteAllproduct_comments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addproduct_comments,
  deleteproduct_comments,
  toggleproduct_comments,
  updateproduct_comments,
  toggleDisplay,
} = product_commentsSlice.actions;
// reducer ??? configStore??? ???????????? ?????? export default ?????????.
export default product_commentsSlice.reducer;
