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
    <PostsWrap>
      <TopimgWrap>
        <Topimg></Topimg>
        <Title>Reservation</Title>
      </TopimgWrap>
      <CommentsWrap>
        <PostButtonWrap>
          <CusttomButton
            onClick={() => {
              navigate("/addform");
            }}
          >
            추가
          </CusttomButton>
        </PostButtonWrap>

        {posts.map((post) => {
          return <PostContainer key={post.id} post={post}></PostContainer>;
        })}
      </CommentsWrap>
    </PostsWrap>
  );
};

export default PostsContainer;

const Title = styled.div`
  position: relative;
  margin: 0 auto;
  top: -30%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 100;
  font-size: 40px;
  line-height: 54px;
`;

const PostsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopimgWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Topimg = styled.img.attrs({
  src: "images/CummunityPageimg/top_img.png",
})`
  width: 100%;
  min-height: 500px;
  object-fit: cover;
`;

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
