import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function MenuList() {
  // store에 있는 products들을 가져와야 함
  const products = useSelector((state) => state.products);
  const [currentCategory, setCurrentCategory] = useState('Bread');

  const changeCategory = (c) => {
    setCurrentCategory(c);
    console.log(currentCategory);
  };

  return (
    <>
      <StyledCategroyBox>
        <div onClick={changeCategory('Bread')}>Bread</div>
        <div onClick={changeCategory('Cake')}>Cake</div>
        <div onClick={changeCategory('Cookie')}>Cookie</div>
        <div onClick={changeCategory('Coffee')}>Coffee</div>
      </StyledCategroyBox>
      <StyledListBox>
        {/* products중에 카테고리가 bread인 아이템들만 가져와서 */}
        {products
          .filter((item) => item.category === 'Bread')
          .map((item) => {
            return (
              <StyledPoductsBox>
                <img src={item.img} />
                <p>{item.name}</p>
              </StyledPoductsBox>
            );
          })}
      </StyledListBox>
    </>
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
