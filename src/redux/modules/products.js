import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// 1.action items
const ADD_MENU = 'ADD_MENU';
const REMOVE_MENU = 'REMOVE_MENU';
// 2. action creators
export const addMenu = (payload) => {
  return {
    type: ADD_MENU,
    payload,
  };
};

export const removeMenu = (payload) => {
  return {
    type: REMOVE_MENU,
    payload,
  };
};
// 3. initial State => reducer를 구성할 때

// 4. reducer 만들기
const products = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU:
      return [...state, action.payload];
    case REMOVE_MENU:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
// 5. export reducer

const initialState = [
  {
    category: 'Bread',
    name: '토종효모식빵',
    img: 'images/Products/bread.jpeg',
    id: uuidv4(),
  },
  {
    category: 'Cake',
    name: '루돌프사슴코는',
    img: 'images/Products/rudolf.jpeg',
    id: uuidv4(),
  },
  {
    category: 'Cookie',
    name: '브라우니쿠키',
    img: 'images/Products/browniecookie.jpeg',
    id: uuidv4(),
  },
  {
    category: 'Coffee',
    name: '아메리카노',
    img: 'images/Products/americano.jpeg',
    id: uuidv4(),
  },
];

export default products;
