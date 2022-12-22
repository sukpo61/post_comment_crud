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
      return (
        <div key={t.id}>
          {t.title}
          {t.contnet}
        </div>
      );
    });
  console.log(product_comment);

  useEffect(() => {
    dispatch(__getproduct_comments());
  }, [dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (content == "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    let NewData = {
      id: uuid(),
      product_post_id: props.product_post_id,
      content,
      title,
    };

    dispatch(__addproduct_comments(NewData));

    setContent("");
  };

  return (
    <div className="productComment">
      <h2>Review</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="이름을 입력하세요"
          maxLength={10}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input
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

        <div className="productCommentText">
          <p>{product_comment}</p>
          <p>내용</p>
        </div>
      </div>
    </div>
  );
};

export default ProductComment;
