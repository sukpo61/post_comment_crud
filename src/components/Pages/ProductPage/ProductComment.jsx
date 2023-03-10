import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
// import { createBrowserHistory } from "history";
import {
  __getproduct_comments,
  __addproduct_comments,
  __deleteproduct_comments,
  __updateproduct_comments,
} from "../../../redux/modules/productcomments";
import "./ProductComment.css";
import uuid from "react-uuid";

const ProductComment = (props) => {
  const { state } = useLocation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const dispatch = useDispatch();
  // const [editButton, setEditButton] = useState(false);

  useEffect(() => {
    dispatch(__getproduct_comments());
  }, [dispatch]);

  const ProductEditButton = () => {};

  const { product_comments } = useSelector((state) => {
    return state.product_comments;
  });

  const product_comment = product_comments
    .filter((item) => {
      return item.product_post_id === props.product_post_id;
    })
    .map((t) => {
      /*댓글 삭제*/
      const product_post = product_comments.find((post) => post.id === t.id);

      const DeletePost = () => {
        if(window.confirm("삭제하시겠습니까?")) {
          dispatch(__deleteproduct_comments(product_post.id));
        } else {
          alert("취소되었습니다.")
        }

      };

      /*댓글 수정*/
      const productCommentOnSubmit = (e, t) => {
        e.preventDefault();
        if (editTitle == "" || editContent == "") {
          alert("제목,내용을 모두 입력하세요")
          return;
        };

        let NewPost = {
          ...t,
          title: editTitle,
          content: editContent,
          toggledisplay: !t.toggledisplay,
        };

        dispatch(__updateproduct_comments(NewPost));

        setEditTitle("");
        setEditContent("");
      };

      // /*댓글 수정버튼*/
      const ProductEdit = (t) => {
        let NewComment = {
          ...t,
          toggledisplay: !t.toggledisplay,
        };

        setEditTitle(t.title);
        setEditContent(t.content);

        dispatch(__updateproduct_comments(NewComment));
      };

      return (
        <div key={t.id} className="productCommentText">
          <form onSubmit={(e) => productCommentOnSubmit(e, t)}>
            <p>
              {t.toggledisplay ? (
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => {
                    setEditTitle(e.target.value);
                  }}
                  maxLength={10}
                />
              ) : (
                t.title
              )}
            </p>
            <p>
              {t.toggledisplay ? (
                <input
                  type="text"
                  onChange={(e) => {
                    setEditContent(e.target.value);
                  }}
                  value={editContent}
                  maxLength={25}
                />
              ) : (
                t.content
              )}
            </p>
            {t.toggledisplay ? <button>완료</button> : ""}
          </form>

          <div>
            <button
              onClick={() => {
                ProductEdit(t);
              }}
            >
              {t.toggledisplay ? "취소" : "수정"}
            </button>
            <button onClick={DeletePost}>삭제</button>
          </div>
        </div>
      );
    });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title == "") {
      return alert("제목을 입력해주세요");
    } else if (content == "") {
      return alert("내용을 입력해주세요");
    } // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    let NewData = {
      id: uuid(),
      product_post_id: props.product_post_id,
      content,
      title,
      toggledisplay: false,
    };

    dispatch(__addproduct_comments(NewData));

    setContent("");
    setTitle("");
  };

  return (
    <div className="productComment">
      <h2>Review</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          value={title}
          placeholder="이름을 입력하세요"
          maxLength={10}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input
          value={content}
          placeholder="내용을 입력하세요"
          maxLength={40}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></input>
        <button>등록</button>
      </form>

      <div className="productCommentContents">
        <div className="productCommentTitle">
          <p>이름</p>
          <p>내용</p>
        </div>

        {product_comment}
      </div>
    </div>
  );
};

export default ProductComment;
