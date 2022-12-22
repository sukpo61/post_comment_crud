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
    
    navigate("/")
  };

  const EditPost = () => {
    navigate("/editform", {
      state: post,
    });
  };


  return (
    <PostpageWrap>
      <PostButtonWrap>

     <CusttomButton onClick={DeletePost}>삭제</CusttomButton>
        <CusttomButton onClick={EditPost}>수정</CusttomButton>
      </PostButtonWrap>
      <PostWrap>
        <div>{post?.title}</div>
        <div>{post?.content}</div>
        <Link to={`/`}>
          <span>돌아가기</span>
        </Link>
      </PostWrap>
      <CommentAddForm post_id={post?.id}></CommentAddForm>
      <CommentsContainer post_id={post?.id}></CommentsContainer>
    </PostpageWrap>
  );
};


const CusttomButton = styled.button`
  width: 50px;
  height: 30px;
  cursor: pointer;
  border: 1px solid #eee;
`;

const PostpageWrap = styled.div`
  width: 1000px;
  min-width: 500px;
  margin: 100px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;




const PostButtonWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const ContentsWrap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default Postpage;
