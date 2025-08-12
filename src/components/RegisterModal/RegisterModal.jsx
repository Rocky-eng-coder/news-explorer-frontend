import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWithForm
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      containerClassName="register-modal-size"
    >
      <form className="register-form">
        <label>Email</label>
        <input type="email" placeholder="Enter email" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <label>Username</label>
        <input type="text" placeholder="Enter your username" />

        <button type="submit" disabled>
          Sign up
        </button>

        <p className="register-form__switch">
          or <span onClick={onSwitch}>Sign in</span>
        </p>
      </form>
    </ModalWithForm>
  );
}

export default RegisterModal;
