import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addPost, __updatePost } from "../../../redux/modules/posts";
import { useNavigate, useLocation } from "react-router-dom";
import Reservation_Topimage from "../../Layout/Reservation_Topimage";

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
    <Wrap>
      <Reservation_Topimage></Reservation_Topimage>
      <AddWrap>
        <ReserTitle>
          <span>예약하기</span>
        </ReserTitle>
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
    </Wrap>
  );
};
const TableHeader = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
`;
const ReserTitle = styled.div`
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #000000;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #000000;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AddWrap = styled.div`
  position: relative;
  top: -50px;
  width: 1000px;
  min-width: 500px;
  margin: 0 auto;
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
  outline: none;
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

const CusttomButton = styled.button`
  margin-top: 10px;
  width: 50px;
  height: 30px;
  cursor: pointer;
  border: 1px solid #eee;
`;

export default PostEditForm;
