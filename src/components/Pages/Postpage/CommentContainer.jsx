import React, { useState } from "react";
import styled from "styled-components";
import {
  __deleteComment,
  __updateComment,
} from "../../../redux/modules/comments";
import { useDispatch } from "react-redux";

const CommentContainer = ({ post }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const EditButton = document.querySelectorAll(".EditButton");
  const DeleteButton = document.querySelectorAll(".DeleteButton");
  const ButtonDisabledTrue = () => {
    EditButton.forEach((Btn) => (Btn.disabled = true));
    DeleteButton.forEach((Btn) => (Btn.disabled = true));
  };
  const ButtonDisabledFalse = () => {
    EditButton.forEach((Btn) => (Btn.disabled = false));
    DeleteButton.forEach((Btn) => (Btn.disabled = false));
  };

  const DeleteConmment = () => {
    dispatch(__deleteComment(post.id));
  };

  const UpdateComment = () => {
    if (content == "") return;

    let NewPost = {
      ...post,
      content,
      toggledisplay: true,
    };

    dispatch(__updateComment(NewPost));

    setContent("");

    ButtonDisabledFalse();
  };

  const ToggleComment = (content) => {
    console.log(post);
    if (post.toggledisplay) {
      ButtonDisabledTrue();
      setContent(content);
    } else {
      ButtonDisabledFalse();
      setContent("");
    }
    let NewPost = {
      ...post,
      toggledisplay: !post.toggledisplay,
    };
    dispatch(__updateComment(NewPost));
  };

  return (
    <CommentWrap>
      <ContentsWrap>
        {post.toggledisplay ? (
          <div>{post.content}</div>
        ) : (
          <ContentsWrap>
            <ContentInput
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            {/* 직전값 */}
            <CusttomButton onClick={UpdateComment}>완료</CusttomButton>
            <CusttomButton onClick={ToggleComment}>취소</CusttomButton>
          </ContentsWrap>
        )}
      </ContentsWrap>
      <ButtonWrap>
        <CusttomButton onClick={DeleteConmment} className="DeleteButton">
          삭제
        </CusttomButton>
        <CusttomButton
          onClick={() => {
            ToggleComment(post.content);
          }}
          className="EditButton"
        >
          수정
        </CusttomButton>
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

const ContentInput = styled.input`
  border: 1px solid #eee;
  height: 25px;
  width: 500px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

export default CommentContainer;
