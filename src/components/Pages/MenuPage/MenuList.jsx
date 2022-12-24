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
      <StyledCategroyBox>
        <div onClick={handleClick('bread')}>Bread</div>
        <div onClick={handleClick('cake')}>Cake</div>
        <div onClick={handleClick('cookie')}>Cookie</div>
        <div onClick={handleClick('coffee')}>Coffee</div>
      </StyledCategroyBox>
      <StyledListBox>
        {product_posts.map(
          (item) =>
            item.productMenu === currProductMenu && (
              <StyledPoductsBox key={item.id}>
                <img src={item.img} />
                <p>{item.title}</p>
              </StyledPoductsBox>
            )
        )}
      </StyledListBox>
    </div>
  );
}

export default MenuList;

const StyledCategroyBox = styled.div`
  background-color: aqua;
  padding: 100px;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  cursor: pointer;
`;

const StyledListBox = styled.div`
  background-color: beige;
  padding: 200px;
`;

const StyledPoductsBox = styled.div`
  background-color: beige;
  padding: 20px;
  margin: 5px;
  display: grid;
  align-content: center;
  grid-template-columns: 200px 200px 200px;
  grid-auto-rows: minmax(100px, auto);
  width: 224px;
  height: 224px;
  resize: both;
`;
