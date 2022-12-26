import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addPost, __updatePost } from "../../../redux/modules/posts";
import { useNavigate, useLocation } from "react-router-dom";
import Reservation_Topimage from "../../Layout/Reservation_Topimage";
import CusttomButton from "../../Tools/CusttomButton";

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

    navigate(`/reservation/${state.id}`);
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
            placeholder="제목을 입력하세요"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <ContentInput
            placeholder="주소와 내용을 입력하세요"
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <PostButtonWrap>
            <CusttomButton>수정</CusttomButton>
            <CusttomButton
              onClickFuntion={() => {
                navigate(`/reservation/${state.id}`);
              }}
            >
              취소
            </CusttomButton>
          </PostButtonWrap>
        </Form>
      </AddWrap>
    </Wrap>
  );
};

const PostButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  margin-top: 15px;
`;

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
  margin-top: 20px;
  height: 25px;
  outline: none;
  padding: 0 10px;
`;

const ContentInput = styled.textarea`
  border: 1px solid #eee;
  margin-top: 20px;
  height: 300px;
  outline: none;
  padding: 10px 10px;
`;

// const CusttomButton = styled.button`
//   margin: ${(props) => props.Margin};
//   width: 65px;
//   height: 30px;
//   cursor: pointer;
//   border: 0.5px solid #a5a5a5;
//   border-radius: 30px;
//   font-weight: 200;
//   font-size: 12px;
//   color: #000000;
// `;

export default PostEditForm;
