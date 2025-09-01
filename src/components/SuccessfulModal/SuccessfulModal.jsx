import React from "react";
import "./SuccessfulModal.css";

function SuccessfulModal({ isOpen, onClose, onSignIn }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content modal__content--success">
        <button className="modal__close" onClick={onClose} />
        <h2 className="modal__message">Registration successfully completed!</h2>
        <button className="modal__link" onClick={onSignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessfulModal;
