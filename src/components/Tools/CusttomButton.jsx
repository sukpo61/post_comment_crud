import React from "react";
import styled from "styled-components";

const CusttomButton = (props) => {
  return <Button>{props.children}</Button>;
};

const Button = styled.button`
  margin: ${(props) => props.Margin};
  width: 65px;
  height: 30px;
  cursor: pointer;
  border: 0.5px solid #a5a5a5;
  border-radius: 30px;
  font-weight: 200;
  font-size: 12px;

  color: #000000;
`;

export default CusttomButton;
