import React from "react";

const Reservation_Topimage = () => {
  return (
    <TopimgWrap>
      <Topimg></Topimg>
      <Title>Reservation</Title>
    </TopimgWrap>
  );
};

export default Reservation_Topimage;

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
