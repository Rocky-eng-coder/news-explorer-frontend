import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../AuthModal/AuthModal.css";

function RegisterModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWithForm title="Sign up" isOpen={isOpen} onClose={onClose}>
      <form className="auth-form">
        <label>Email</label>
        <input type="email" placeholder="Enter email" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <label>Username</label>
        <input type="text" placeholder="Enter your username" />

        <button type="submit" disabled>
          Sign up
        </button>
      </form>
    </ModalWithForm>
  );
}

export default RegisterModal;
