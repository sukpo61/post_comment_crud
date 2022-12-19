import React from "react";
import styled from "styled-components";

const CusttomButton = (props) => {
  return <Button>{props.children}</Button>;
};

const Button = styled.button`
  width: 50px;
  height: 30px;
  cursor: pointer;
  border: 1px solid #eee;
`;

export default CusttomButton;
