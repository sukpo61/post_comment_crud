import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __getProductpost } from '../../../redux/modules/productposts';

function MenuList() {
  // store에 있는 products들을 가져와야 함
  // 로컬에 저장된 state를 db.json으로 변경하는 함수 useEffect필요
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getProductpost());
  }, [dispatch]);

  // 데이터 read해오는 함수
  const { product_posts } = useSelector((state) => state.product_posts);

  const [currProductMenu, setCurrProductMenu] = useState('bread');
  console.log(product_posts);

  // product_posts 저장값 중 하나인 productmenu값을 카테고리와 연결하여 state변경을 일으키는 함수
  // currying! onClick함수의 인자를 비워둬야 제대로 함수식을 쓴 것!
  const handleClick = (menu) => () => {
    setCurrProductMenu(menu);
  };

  return (
    <div>
      <StyledHeader>
        <div>MENU</div>
      </StyledHeader>
      <StyledCategroyBox>
        <div onClick={handleClick('bread')} style={{ cursor: 'pointer' }}>
          Bread
        </div>
        <div onClick={handleClick('cake')} style={{ cursor: 'pointer' }}>
          Cake
        </div>
        <div onClick={handleClick('cookie')} style={{ cursor: 'pointer' }}>
          Cookie
        </div>
        <div onClick={handleClick('coffee')} style={{ cursor: 'pointer' }}>
          Coffee
        </div>
      </StyledCategroyBox>
      <StyledListBox>
        {product_posts.map(
          (item) =>
            item.productMenu === currProductMenu && (
              <StyledPoductsBox key={item.id}>
                <img src={item.detail2} />
                <p>{item.title}</p>
              </StyledPoductsBox>
            )
        )}
      </StyledListBox>
    </div>
  );
}

export default MenuList;

// 헤더랑 겹쳐서 분리하는 작업을 해줘야함!!
const StyledHeader = styled.div`
  background-color: white;
  padding-top: 100px;
  margin: 20px;
  color: black;
  font-size: 50px;
`;

// 카테고리 바
const StyledCategroyBox = styled.div`
  background-color: white;
  padding-top: 20px;
  display: flex;
  justify-content: space-around;

  /* cursor: pointer; */
`;

// 제품들 보여지는
const StyledListBox = styled.div`
  background-color: beige;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  /* grid-template-columns: 200px minmax(420px, 1fr);
  grid-template-rows: 56px 1fr;
} */
  gap: 20px 10px;
`;

// 제품 하나 하나  - 이미지, 이름 세트 - 마우스 호버
const StyledPoductsBox = styled.div`
  /* background-color: beige; */
  padding: 20px;
  margin: 5px;
  width: 100%;
  align-content: center;
  /* grid-template-columns: 200px 200px 200px; */
  /* grid-auto-rows: minmax(100px, auto); */
  /* width: 224px;
  height: 224px; */
  /* resize: both; */
`;
