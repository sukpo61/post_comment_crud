import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        Logo
      </Logo>
      <Link to={`/addform`}> 추가하기 </Link>
    </HeaderContainer>
  );
};

const Logo = styled.div`
  cursor: pointer;
  font-size: 40px;
`;

const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: white;
  border-bottom: 1px solid #eee;
`;

export default Header;
