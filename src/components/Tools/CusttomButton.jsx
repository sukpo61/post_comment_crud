import React from "react";
import styled from "styled-components";

const CusttomButton = ({
  onClickFuntion,
  Margin,
  children,
  Color,
  BackColor,
  BorderRadius,
  Border,
  FontWeight,
}) => {
  return (
    <Button
      onClick={onClickFuntion}
      Margin={Margin}
      Color={Color}
      BackColor={BackColor}
      Border={Border}
      BorderRadius={BorderRadius}
      FontWeight={FontWeight}
    >
      {children}
    </Button>
  );
};

CusttomButton.defaultProps = {
  Color: "#000000",
  BorderRadius: "30px",
  Border: "0.5px solid #a5a5a5;",
  BackColor: "white",
  FontWeight: "200",
};

const Button = styled.button`
  margin: ${(props) => props.Margin};
  width: 60px;
  height: 30px;
  cursor: pointer;
  border: ${(props) => props.Border};
  border-radius: ${(props) => props.BorderRadius};
  font-weight: ${(props) => props.FontWeight};
  font-size: 12px;
  color: ${(props) => props.Color};
  background-color: ${(props) => props.BackColor};
`;

// const CusttomButton = styled.button`
//   width: 60px;
//   height: 30px;
//   cursor: pointer;
//   font-weight: 700;
//   font-size: 12px;
//   line-height: 16px;
//   text-align: center;
//   color: #fbf9f6;
//   background: #d3c1b3;
//   border-radius: 15px;
// `;

export default CusttomButton;
