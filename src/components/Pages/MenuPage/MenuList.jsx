import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MenuPage.css';
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
      {/* <h3 className='menu_header'>MENU</h3> */}
      <div className='menu_bar'>
        {/* 클릭하면 밑줄이든 윗줄이든 표시가 되어야 함 글씨도 볼드체면 좋겠다  */}
        <div className='menu1' onClick={handleClick('bread')}>
          Bread
        </div>
        <div className='menu2' onClick={handleClick('cake')}>
          Cake
        </div>
        <div className='menu3' onClick={handleClick('cookie')}>
          Cookie
        </div>
        <div className='menu4' onClick={handleClick('coffee')}>
          Coffee
        </div>
      </div>
      <div className='menu_list'>
        {product_posts.map(
          (item) =>
            item.productMenu === currProductMenu && (
              <div className='product' key={item.id}>
                <img className='image' src={item.detail3} />
                <p className='title'>{item.title}</p>
                <p className='engtitle'>{item.engtitle}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default MenuList;
