import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addPost, __updatePost } from "../../../redux/modules/posts";
import { useNavigate, useLocation } from "react-router-dom";

const PostEditForm = () => {
  const { state } = useLocation();
  const [title, setTitle] = useState(state.title);
  const [content, setContent] = useState(state.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title == "" || content == "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    let NewPost = {
      ...state,
      title,
      content,
    };

    dispatch(__updatePost(NewPost));

    setTitle("");
    setContent("");

    navigate("/");
  };

  return (
    <AddWrap>
      <Form onSubmit={onSubmitHandler}>
        <TitleInput
          className="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <ContentInput
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <CusttomButton>수정</CusttomButton>
      </Form>
      <CusttomButton
        onClick={() => {
          navigate("/");
        }}
      >
        취소
      </CusttomButton>
    </AddWrap>
  );
};

const AddWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.input`
  border: 1px solid #eee;
  margin-top: 50px;
  height: 25px;
  width: 100%;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

const ContentInput = styled.input`
  border: 1px solid #eee;
  margin-top: 50px;
  height: 500px;
  width: 100%;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

const CusttomButton = styled.button`
  margin-top: 10px;
  width: 50px;
  height: 30px;
  cursor: pointer;
  border: 1px solid #eee;
`;

export default PostEditForm;
