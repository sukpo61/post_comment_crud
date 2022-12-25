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
    <div className='menu_page'>
      <h1 className='menu_header'>MENU</h1>
      <div className='menu_bar' onClick={handleClick('bread')}>
        Bread
      </div>
      <div className='menu_bar' onClick={handleClick('cake')}>
        Cake
      </div>
      <div className='menu_bar' onClick={handleClick('cookie')}>
        Cookie
      </div>
      <div className='menu_bar' onClick={handleClick('coffee')}>
        Coffee
      </div>
      <div className='menu_list'>
        {product_posts.map(
          (item) =>
            item.productMenu === currProductMenu && (
              <div className='product' key={item.id}>
                <img src={item.detail2} />
                <p>{item.title}</p>
              </div>
            )
        )}
      </div>
    </div>

    // <div>
    //   <StyledHeader>
    //     <div>MENU</div>
    //   </StyledHeader>
    //   <StyledCategroyBox>
    //     <div onClick={handleClick('bread')} style={{ cursor: 'pointer' }}>
    //       Bread
    //     </div>
    //     <div onClick={handleClick('cake')} style={{ cursor: 'pointer' }}>
    //       Cake
    //     </div>
    //     <div onClick={handleClick('cookie')} style={{ cursor: 'pointer' }}>
    //       Cookie
    //     </div>
    //     <div onClick={handleClick('coffee')} style={{ cursor: 'pointer' }}>
    //       Coffee
    //     </div>
    //   </StyledCategroyBox>
    //   <StyledListBox>
    //     {product_posts.map(
    //       (item) =>
    //         item.productMenu === currProductMenu && (
    //           <StyledPoductsBox key={item.id}>
    //             <StyledImg>
    //               <img src={item.detail2} />
    //             </StyledImg>
    //             <p>{item.title}</p>
    //           </StyledPoductsBox>
    //         )
    //     )}
    //   </StyledListBox>
    // </div>
  );
}

export default MenuList;
