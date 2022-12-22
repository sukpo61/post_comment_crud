import React, { useEffect } from "react";
import styled from "styled-components";
import PostContainer from "./PostContainer";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../../redux/modules/posts";
import { useLocation, useNavigate } from "react-router-dom";
import Reservation_Topimage from "../../Layout/Reservation_Topimage";

const PostsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);

  return (
    <PostsWrap>
      <Reservation_Topimage></Reservation_Topimage>
      <CommentsWrap>
        <TableHeader>
          <HeaderTh Width="80px">번호</HeaderTh>
          <HeaderTh Width="560px">제목</HeaderTh>
          <HeaderTh Width="100px">상태</HeaderTh>
          <HeaderTh Width="130px">작성자</HeaderTh>
          <HeaderTh Width="130px">작성일</HeaderTh>
        </TableHeader>
        {posts.map((post) => {
          return <PostContainer key={post.id} post={post}></PostContainer>;
        })}
        <PageNumberWrap>
          <PageNumber>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </PageNumber>
        </PageNumberWrap>

        <PostButtonWrap>
          <CusttomButton
            onClick={() => {
              navigate("/addform");
            }}
          >
            추가
          </CusttomButton>
        </PostButtonWrap>
      </CommentsWrap>
    </PostsWrap>
  );
};

export default PostsContainer;

const PageNumberWrap = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PageNumber = styled.div`
  span {
    width: 20px;
    height: 20px;
    margin: 0 7px;
    font-size: 15px;
  }
`;

const TableHeader = styled.div`
  height: 50px;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  display: flex;
  flex-direction: row;
`;

const HeaderTh = styled.div`
  width: ${(props) => props.Width};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-weight: 400;
  font-size: 14px;
`;

const Title = styled.div`
  position: relative;
  margin: 0 auto;
  top: -30%;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 40px;
  line-height: 54px;
`;

const PostsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopimgWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Topimg = styled.img.attrs({
  src: "images/CummunityPageimg/top_img.png",
})`
  width: 100%;
  min-height: 500px;
  object-fit: cover;
`;

const CommentsWrap = styled.div`
  width: 1000px;
  min-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const PostButtonWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

const CusttomButton = styled.button`
  width: 60px;
  height: 30px;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #fbf9f6;
  background: #d3c1b3;
  border-radius: 15px;
`;
