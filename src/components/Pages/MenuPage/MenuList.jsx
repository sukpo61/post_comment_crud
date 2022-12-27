import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MenuPage.css';
import { __getProductpost } from '../../../redux/modules/productposts';
import { useNavigate, useLocation } from 'react-router';

const MenuList = () => {
  const { state } = useLocation();
  // store에 있는 products들을 가져와야 함
  // 로컬에 저장된 state를 db.json으로 변경하는 함수 useEffect필요
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getProductpost());
  }, [dispatch]);

  // 데이터 read해오는 함수
  const { product_posts } = useSelector((state) => state.product_posts);

  const [currProductMenu, setCurrProductMenu] = useState(state.cate);

  // product_posts 저장값 중 하나인 productmenu값을 카테고리와 연결하여 state변경을 일으키는 함수
  const handleClick = (menu) => () => {
    setCurrProductMenu(menu);
  };

  return (
    <div className='menu_page'>
      <p className='menu_header'>MENU</p>
      <div className='menu_bar'>
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
        {product_posts.map((item) => {
          if (item.productmenu === currProductMenu) {
            return (
              <div className='menu_product' key={item.id}>
                <img
                  className='image'
                  src={item.detail2}
                  onClick={() => {
                    navigate(`/productpage/${item.id}`);
                  }}
                />
                <p className='title'>{item.title}</p>
                <p className='engtitle'>{item.engtitle}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MenuList;
