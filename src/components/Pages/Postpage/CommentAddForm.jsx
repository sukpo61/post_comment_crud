import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addComment } from "../../../redux/modules/comments";
import styled from "styled-components";
import CusttomButton from "../../Tools/CusttomButton";
import uuid from "react-uuid";
import { postTime } from "../../Layout/PostTime";

const CommentAddForm = (props) => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const { PostDate, PostTime } = postTime();

  // const dateinfo = new Date();
  // const hours = ("0" + dateinfo.getHours()).slice(-2);
  // const minutes = ("0" + dateinfo.getMinutes()).slice(-2);

  // const date = dateinfo.toLocaleDateString("ko-kr").replace(" ", "");
  // const time = hours + ":" + minutes;

  const NameArray = [
    "아드리아",
    "제이슨",
    "워익",
    "넨마스터",
    "나이트엘프",
    "해루석",
    "키아나",
    "고뭉치",
    "고양이",
    "정근띠",
  ];

  const randomName = NameArray[Math.floor(Math.random() * NameArray.length)];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (content == "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    let NewData = {
      id: uuid(),
      name: randomName,
      post_id: props.post_id,
      content,
      toggledisplay: true,
      date: PostDate,
      time: PostTime,
    };

    dispatch(__addComment(NewData));

    setContent("");
  };

  return (
    <AddWrap>
      <Form onSubmit={onSubmitHandler}>
        <Input
          type="text"
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
  margin-bottom: 50px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Input = styled.input`
  border: 1px solid #eee;
  height: 30px;
  width: 88%;
  border-radius: 15px;
  outline: none;
  padding: 0 20px;
`;

export default CommentAddForm;
