import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost, __updatePost } from "../../../redux/modules/posts";
import {
  __deleteComment,
  __deleteAllComment,
  __getComment,
} from "../../../redux/modules/comments";

const PostContainer = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { comments } = useSelector((state) => state.comments);

  return (
    <CommentWrap>
      <TableTd Width="80px"></TableTd>
      <TableTd Width="560px">
        <span
          onClick={() => {
            navigate();
          }}
        >
          {post.title}
        </span>
      </TableTd>
      <TableTd Width="100px"></TableTd>
      <TableTd Width="130px"></TableTd>
      <TableTd Width="130px"></TableTd>
    </CommentWrap>
  );
};

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
  justify-content: space-between;
  padding-left:${(props) => props.Padleft}
  height: 50px;
  font-weight: 400;
  font-size: 14px;
  span{
    margin-left:20px
  }
`;

const CommentWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid #eee;
`;

const CusttomButton = styled.button`
  width: 50px;
  height: 30px;
  cursor: pointer;
  border: 1px solid #eee;
`;

export default PostContainer;
