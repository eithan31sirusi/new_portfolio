import React from "react";

import "./modal.css";

const Modal = ({ imgSrc, imgAlt, title, text, closeModal, id }) => {
  return (
    <div className="modal_bg" onClick={closeModal}>
      <div className="modal_container">
        <button className="modal_close" onClick={closeModal}>
          X
        </button>
        <div className="modal_header">
          <h1>{title}</h1>
        </div>
        <div className="modal_body">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="modal_footer">{text}</div>
      </div>
    </div>
  );
};

export default Modal;
