import React, { useState } from "react";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <br />
        <div className="modalRight">
          <p onClick={onClose} className="closeBtn">
            X
          </p>
        </div>
        <br />
        <br />
        <div className="inputContainer">
          <a href="/">
            <p>HOME</p>
          </a>
          <a href="/menu">
            <p>MENU</p>
          </a>
          <a href="/reservation">
            <p>RESERVATION</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Modal;
