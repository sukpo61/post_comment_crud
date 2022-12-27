//제품불러오기
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getProductpost = createAsyncThunk(
  "productposts/getproductpost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3003/product_posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addproduct_posts = createAsyncThunk(
  "Productposts/addProductpost",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://localhost:3003/product_posts", payload);
      const data = await axios.get("http://localhost:3003/product_posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteproduct_posts = createAsyncThunk(
  "Productposts/deleteProductpost",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3003/product_posts/${payload}`);
      const data = await axios.get("http://localhost:3003/product_posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateproduct_posts = createAsyncThunk(
  "Productposts/updateProductpost",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(
        `http://localhost:3003/product_posts/${payload.id}`,
        payload
      );
      const data = await axios.get("http://localhost:3003/product_posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  product_posts: [
    {
      id: 1,
      title: "제목1",
      content: "내용1",
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
    },
  ],
  isLoading: false,
  error: null,
};

const product_postsSlice = createSlice({
  name: "product_posts",
  initialState,
  reducers: {
    addpost: (state, action) => {
      state.product_posts = [...state.product_posts, action.payload];
    },

    deletepost: (state, action) => {
      state.product_posts = state.product_posts.filter(
        (product_posts) => product_posts.id !== action.payload
      );
    },
    togglepost: (state, action) => {
      let postlist = state.product_posts.slice();
      postlist.find((e) => e.id === action.payload).isDone = !postlist.find(
        (e) => e.id === action.payload
      ).isDone;
      state.product_posts = postlist;
    },
    toggleDisplay: (state, action) => {
      let postlist = state.product_posts.slice();
      postlist.find((e) => e.id === action.payload).displaytoggle =
        !postlist.find((e) => e.id === action.payload).displaytoggle;
      state.product_posts = postlist;
    },
    updatepost: (state, action) => {
      let postlist = state.product_posts.slice();
      // postlist.find((e) => e.id === action.payload.id) =
      //   action.payload;
      // state.posts = postlist;
    },
  },
  extraReducers: {
    [__getProductpost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getProductpost.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.product_posts = action.payload; // Store에 있는 posts에 서버에서 가져온 posts를 넣습니다.
    },
    [__getProductpost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__addproduct_posts.pending]: (state) => {
      state.isLoading = true;
    },
    [__addproduct_posts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product_posts = action.payload;
    },
    [__addproduct_posts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deleteproduct_posts.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteproduct_posts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product_posts = action.payload;
    },
    [__deleteproduct_posts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__updateproduct_posts.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateproduct_posts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product_posts = action.payload;
    },
    [__updateproduct_posts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addPost,
  deleteproduct_posts,
  toggleproduct_posts,
  updateproduct_posts,
  toggleDisplay,
} = product_postsSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default product_postsSlice.reducer;
