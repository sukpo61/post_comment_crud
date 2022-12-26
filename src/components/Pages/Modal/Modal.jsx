import React, { useState } from "react";
import { useNavigate } from "react-router";

const Modal = ({ open, onClose }) => {
  const navigate = useNavigate();

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
          <a
            onClick={() => {
              navigate("/menu", {
                state: {
                  cate: "bread",
                },
              });
              onClose();
            }}
          >
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
