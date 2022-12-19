import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CommentContainer from "./CommentContainer";
import { __getComment } from "../../../redux/modules/comments";

const CommentsContainer = (props) => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(__getComment());
  }, [dispatch]);

  return (
    <CommentsWrap>
      {comments.map(
        (post) =>
          post.post_id === props.post_id && (
            <CommentContainer post={post} key={post.id}></CommentContainer>
          )
      )}
    </CommentsWrap>
  );
};

export default CommentsContainer;

const CommentsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
