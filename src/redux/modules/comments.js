import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getComment = createAsyncThunk(
  "comments/getcomment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3003/comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "comments/addcomment",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://localhost:3003/comments", payload);
      const data = await axios.get("http://localhost:3003/comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "comments/deletecomment",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      await axios.delete(`http://localhost:3003/comments/${payload}`);
      const data = await axios.get("http://localhost:3003/comments");
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteAllComment = createAsyncThunk(
  "comments/deletecomment",
  async (payload, thunkAPI) => {
    try {
      let data = await axios.get("http://localhost:3003/comments");
      console.log(payload);
      console.log(data.data);

      data.data.map((comment) => {
        if (comment.post_id === payload)
          axios.delete(`http://localhost:3003/comments/${comment.id}`);
      });

      data = await axios.get("http://localhost:3003/comments");

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "comments/updatecomment",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(
        `http://localhost:3003/comments/${payload.id}`,
        payload
      );
      const data = await axios.get("http://localhost:3003/comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __getcomments = createAsyncThunk(
//   "comments/getcomments",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get("http://localhost:3003/comments");
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

const initialState = {
  comments: [
    // {
    //   id: 1,
    //   title: "제목1",
    //   content: "내용1",
    //   isDone: false,
    //   displaytoggle: true,
    // },
    // {
    //   id: 2,
    //   title: "제목2",
    //   content: "내용2",
    //   isDone: false,
    //   displaytoggle: true,
    // },
  ],
  isLoading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },

    deleteComment: (state, action) => {
      state.comments = state.comments.filter(
        (comments) => comments.id !== action.payload
      );
    },

    toggleComment: (state, action) => {
      let commentlist = state.comments.slice();
      commentlist.find((e) => e.id === action.payload).isDone =
        !commentlist.find((e) => e.id === action.payload).isDone;
      state.comments = commentlist;
    },
    toggleDisplay: (state, action) => {
      let commentlist = state.comments.slice();
      commentlist.find((e) => e.id === action.payload).displaytoggle =
        !commentlist.find((e) => e.id === action.payload).displaytoggle;
      state.comments = commentlist;
    },
    updateComment: (state, action) => {
      let commentlist = state.comments.slice();
      // commentlist.find((e) => e.id === action.payload.id) =
      //   action.payload;
      // state.comments = commentlist;
    },
  },
  extraReducers: {
    [__getComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 comments에 서버에서 가져온 comments를 넣습니다.
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deleteAllComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteAllComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__deleteAllComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addComment,
  deleteComment,
  toggleComment,
  updateComment,
  toggleDisplay,
} = commentsSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default commentsSlice.reducer;
