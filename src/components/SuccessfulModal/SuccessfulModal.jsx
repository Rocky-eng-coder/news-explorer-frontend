import React from "react";
import "./SuccessfulModal.css";

function SuccessfulModal({ isOpen, onClose, onSignIn }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__message">Registration successfully completed!</h2>
        <button className="modall__link" onClick={onSignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessfulModal;
