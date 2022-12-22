import React, { useEffect } from "react";
import styled from "styled-components";
import PostContainer from "./PostContainer";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../../redux/modules/posts";
import { useLocation, useNavigate } from "react-router-dom";


const PostsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);

  return (
    <CommentsWrap>
      <PostButtonWrap>

 <CusttomButton onClick={()=>{
navigate("/addform")
 }}>추가</CusttomButton>

 </PostButtonWrap>

      {posts.map((post) => {
        return <PostContainer key={post.id} post={post}></PostContainer>;
      })}
    </CommentsWrap>
  );
};

export default PostsContainer;

const CommentsWrap = styled.div`
  width: 1000px;
  min-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const PostButtonWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const CusttomButton = styled.button`
  width: 50px;
  height: 30px;
  cursor: pointer;
  border: 1px solid #eee;
`;
