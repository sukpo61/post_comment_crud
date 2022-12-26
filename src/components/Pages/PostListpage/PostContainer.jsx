import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost, __updatePost } from "../../../redux/modules/posts";
import {
  __deleteComment,
  __deleteAllComment,
  __getComment,
} from "../../../redux/modules/comments";

const PostContainer = ({ post, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getComment());
  }, [dispatch]);

  const { comments } = useSelector((state) => state.comments);

  const comment_len = comments.filter(
    (comment) => comment.post_id === post.id
  ).length;

  return (
    <CommentWrap>
      <TableTd Width="80px">{index}</TableTd>
      <TableTd Width="560px" Position="flex-start">
        <span
          onClick={() => {
            navigate(`/reservation/${post.id}`);
          }}
        >
          {post.title}
        </span>
      </TableTd>
      <TableTd Width="100px">
        {comment_len === 0 ? (
          <Resered>예약중</Resered>
        ) : (
          <ReserDone>완료</ReserDone>
        )}
      </TableTd>
      <TableTd Width="130px">{post.name}</TableTd>
      <TableTd Width="130px">{post.date}</TableTd>
    </CommentWrap>
  );
};
const Resered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  width: 60px;
  height: 30px;
  font-weight: 400;
  font-size: 12px;
  color: #fbf9f6;
  background: #d3c1b3;
  border-radius: 15px;
`;

const ReserDone = styled(Resered)`
  color: #a07c5f;
  background: #edeae3;
`;

const ContentsWrap = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const TableTd = styled.div`
  width: ${(props) => props.Width};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.Position};
  height: 50px;
  font-weight: 400;
  font-size: 14px;
  span {
    margin-left: 20px;
  }
  span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

TableTd.defaultProps = {
  Position: "center",
};

const CommentWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid #eee;
`;

export default PostContainer;
