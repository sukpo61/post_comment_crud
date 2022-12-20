import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addPost } from "../../../redux/modules/posts";
import CusttomButton from "../../Tools/CusttomButton";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

const PostAddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title == "" || content == "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    let NewData = {
      id: uuid(),
      title,
      content,
    };

    dispatch(__addPost(NewData));
    setTitle("");
    setContent("");

    navigate("/");
  };

  return (
    <AddWrap>
      <Form onSubmit={onSubmitHandler}>
        <TitleInput
          className="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <ContentInput
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <CusttomButton>추가</CusttomButton>
      </Form>
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

const ContentInput = styled.textarea`
  border: 1px solid #eee;
  margin-top: 50px;
  height: 500px;
  width: 100%;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

export default PostAddForm;
