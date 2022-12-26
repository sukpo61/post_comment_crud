import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addPost } from "../../../redux/modules/posts";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import Reservation_Topimage from "../../Layout/Reservation_Topimage";
import { postTime } from "../../Layout/PostTime";
import CusttomButton from "../../Tools/CusttomButton";

const PostAddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { PostDate, PostTime } = postTime();

  const NameArray = [
    "아드리아",
    "제이슨",
    "워익",
    "넨마스터",
    "나이트엘프",
    "해루석",
    "키아나",
    "고뭉치",
  ];

  const randomName = NameArray[Math.floor(Math.random() * NameArray.length)];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title == "" || content == "") {
      window.alert("제목및 내용을 입력하십시오");
      return;
    } // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    let NewID = uuid();

    let NewData = {
      id: NewID,
      name: randomName,
      title,
      content,
      date: PostDate,
      time: PostTime,
    };

    console.log(NewData);

    dispatch(__addPost(NewData));
    setTitle("");
    setContent("");

    navigate(`/reservation/${NewID}`);
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
            <CusttomButton>예약</CusttomButton>
            <CusttomButton
              onClickFuntion={() => {
                navigate("/reservation");
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

export default PostAddForm;
