import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import CommentAddForm from "./CommentAddForm";
import CommentsContainer from "./CommentsContainer";
import { __getComment } from "../../../redux/modules/comments";
import { __getPost } from "../../../redux/modules/posts";
import { useLocation, useNavigate } from "react-router-dom";
import { __deletePost, __updatePost } from "../../../redux/modules/posts";
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
    // dispatch(__deleteAllComment(post.id));

    // console.log(post.id);
    dispatch(__deletePost(post.id));

    navigate("/");
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
            <CusttomButton onClick={DeletePost}>삭제</CusttomButton>
            <CusttomButton Margin="0 0 0 15px" onClick={EditPost}>
              수정
            </CusttomButton>
          </div>
          <ListButton
            onClick={() => {
              navigate("/");
            }}
          >
            목록
          </ListButton>
        </PostButtonWrap>
        <TableHeader>
          <PostTitle>
            <span>{post?.title}</span>
          </PostTitle>
          <PostInfoContainer>
            <span>작성일</span>
            <PostInfo>2022-12-22</PostInfo>
            <span>작성자</span>
            <PostInfo>루돌프</PostInfo>
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

const CusttomButton = styled.button`
  margin: ${(props) => props.Margin};
  width: 65px;
  height: 30px;
  cursor: pointer;
  border: 0.5px solid #a5a5a5;
  border-radius: 30px;
  font-weight: 200;
  font-size: 12px;

  color: #000000;
`;
const ListButton = styled.button`
  margin: ${(props) => props.Margin};
  width: 65px;
  height: 30px;
  cursor: pointer;
  font-weight: 200;
  font-size: 12px;
  font-weight: 200;
  font-size: 12px;
  color: #6a503c;
  background: #e3d1b3;
`;

const PostpageWrap = styled.div`
  position: relative;
  top: -45px;
  width: 1000px;
  min-width: 500px;
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
