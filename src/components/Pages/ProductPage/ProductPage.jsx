import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { __getProductpost } from "../../../redux/modules/productposts";
import { __getPost } from "../../../redux/modules/posts";

const Postpage = () => {
  const dispatch = useDispatch();
  const { product_posts } = useSelector((state) => {
    return state.product_posts;
  });

  console.log(product_posts);
  //   const param = useParams();
  const product_post = product_posts.find((t) => t.id === "1");

  useEffect(() => {
    dispatch(__getProductpost());
    dispatch(__getPost());
  }, [dispatch]);
  return (
    <PostpageWrap>
      <PostWrap>
        <div>{product_post?.title}</div>
        <div>{product_post?.content}</div>
        <Link to={`/`}>
          <span>돌아가기</span>
        </Link>
      </PostWrap>
    </PostpageWrap>
  );
};

const PostpageWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const PostWrap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default Postpage;
