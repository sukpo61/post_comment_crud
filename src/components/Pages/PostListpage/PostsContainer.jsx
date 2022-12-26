import React, { useEffect } from "react";
import styled from "styled-components";
import PostContainer from "./PostContainer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { __getPost } from "../../../redux/modules/posts";

const PostsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);

  return (
    <CommentsWrap>
      {posts.map((post) => {
        return <div>
          <PostContainer key={post.id} post={post}>
          </PostContainer>
          <div>
            {/* <Link to={`/productpage/${post.id}`}>1234</Link> */}
            <Link to={`/productpage/1`}>1234</Link>
            </div>
          </div>;
      })}
    </CommentsWrap>
  );
};

export default PostsContainer;

const CommentsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
