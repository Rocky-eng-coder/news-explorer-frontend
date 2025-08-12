import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWithForm
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      containerClassName="login-modal-size"
    >
      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Enter email" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <button type="submit" disabled>
          Sign in
        </button>
        <p className="login-form__switch">
          or <span onClick={onSwitch}>Sign up</span>
        </p>
      </form>
    </ModalWithForm>
  );
}

export default LoginModal;
