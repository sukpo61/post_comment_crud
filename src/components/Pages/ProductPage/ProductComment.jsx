import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  __getproduct_comments,
  __addproduct_comments,
  __deleteproduct_comments,
  __deleteAllproduct_comments,
  __updateproduct_comments,
} from "../../../redux/modules/productcomments";
import "./ProductComment.css";
import uuid from "react-uuid";

const ProductComment = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

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
        console.log(product_comments);
        console.log(product_post);
        // dispatch(__deleteAllproduct_comments(product_comment.id));
        dispatch(__deleteproduct_comments(product_post.id));
      };

      const ProductEdit = () => {};
      /*댓글 삭제*/
      return (
        <div key={t.id} className="productCommentText">
          <p>{t.title}</p>
          <p>{t.content}</p>
          <div>
            <button onClick={ProductEdit}>수정</button>
            <button onClick={DeletePost}>삭제</button>
          </div>
        </div>
      );
    });

  useEffect(() => {
    dispatch(__getproduct_comments());
  }, [dispatch]);

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
