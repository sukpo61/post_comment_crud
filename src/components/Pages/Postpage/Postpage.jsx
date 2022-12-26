import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import CommentAddForm from "./CommentAddForm";
import CommentsContainer from "./CommentsContainer";
import { __getPost } from "../../../redux/modules/posts";
import { useLocation, useNavigate } from "react-router-dom";
import { __deletePost, __updatePost } from "../../../redux/modules/posts";
import CusttomButton from "../../Tools/CusttomButton";
import {
  __getComment,
  __deleteAllComment,
} from "../../../redux/modules/comments";
import Reservation_Topimage from "../../Layout/Reservation_Topimage";

const Postpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const param = useParams();
  const post = posts.find((post) => post.id === param.id);

  useEffect(() => {
    dispatch(__getComment());
    dispatch(__getPost());
  }, [dispatch]);

  const DeletePost = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(__deleteAllComment(post.id));
      dispatch(__deletePost(post.id));
      navigate("/reservation");
    }
  };

  const EditPost = () => {
    navigate("/editform", {
      state: post,
    });
  };

  return (
    <PostsWrap>
      <Reservation_Topimage></Reservation_Topimage>
      <PostpageWrap>
        <PostButtonWrap>
          <div>
            <CusttomButton onClickFuntion={DeletePost}>삭제</CusttomButton>
            <CusttomButton Margin="0 0 0 15px" onClickFuntion={EditPost}>
              수정
            </CusttomButton>
          </div>
          <CusttomButton
            Color="#6a503c"
            Border="none"
            BorderRadius="0px"
            BackColor="#e3d1b3"
            onClickFuntion={() => {
              navigate("/reservation");
            }}
          >
            목록
          </CusttomButton>
        </PostButtonWrap>
        <TableHeader>
          <PostTitle>
            <span>{post?.title}</span>
          </PostTitle>
          <PostInfoContainer>
            <span>작성일</span>
            <PostInfo>{post?.date}</PostInfo>
            <span>작성자</span>
            <PostInfo>{post?.name}</PostInfo>
          </PostInfoContainer>
        </TableHeader>

        <ContentWrap>{post?.content}</ContentWrap>
        <CommentAddForm post_id={post?.id}></CommentAddForm>
        <CommentsContainer post_id={post?.id}></CommentsContainer>
      </PostpageWrap>
    </PostsWrap>
  );
};

const PostTitle = styled.div`
  padding: 16px 20px 0 20px;
  height: 60px;
  display: flex;
  flex-direction: row;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #000000;
  }
`;
const PostInfoContainer = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 0 20px 16px 20px;
  font-weight: 400;
  font-size: 14px;
  span {
    margin-right: 15px;
    font-style: normal;
    color: #000000;
  }
`;

const PostInfo = styled.div`
  margin-right: 20px;
  font-style: normal;
  color: #a5a5a5;
`;

const TableHeader = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
`;

const PostpageWrap = styled.div`
  position: relative;
  top: -45px;
  width: 1000px;
  min-width: 500px;
  min-height: 55vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const PostsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PostButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
`;

const ContentWrap = styled.div`
  padding: 30px 20px;
  min-height: 200px;
  white-space: pre-line;
  display: flex;
  gap: 20px;
`;
const ContentsWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Postpage;
