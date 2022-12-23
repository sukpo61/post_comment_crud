import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __deletePost, __updatePost } from '../../../redux/modules/posts';
import {
  __deleteComment,
  __deleteAllComment,
  __getComment,
} from '../../../redux/modules/comments';

const PostContainer = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { comments } = useSelector((state) => state.comments);

  const DeletePost = () => {
    dispatch(__deleteAllComment(post.id));

    console.log(post.id);
    dispatch(__deletePost(post.id));
  };

  const EditPost = () => {
    navigate('/editform', {
      state: post,
    });
  };

  return (
    <CommentWrap>
      <ContentsWrap>
        <TitleWrap>{post.title}</TitleWrap>
        <div>{post.content}</div>
      </ContentsWrap>
      <ButtonWrap>
        <CusttomButton>
          <Link to={`/${post.id}`}>보기</Link>
        </CusttomButton>
        <CusttomButton onClick={DeletePost}>삭제</CusttomButton>
        <CusttomButton onClick={EditPost}>수정</CusttomButton>
      </ButtonWrap>
    </CommentWrap>
  );
};

const ContentsWrap = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

const TitleWrap = styled(ContentsWrap)`
  width: 80px;
  justify-content: center;
`;

const ButtonWrap = styled(ContentsWrap)``;

const CommentWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  border-bottom: 1px solid #eee;
`;

const CusttomButton = styled.button`
  width: 50px;
  height: 30px;
  cursor: pointer;
  border: 1px solid #eee;
`;

export default PostContainer;
