import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onSwitch, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({ email, password });

    setEmail("");
    setPassword("");

    onClose();
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!e.target.validity.valid && value !== "") {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <ModalWithForm
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      containerClassName="login-modal-size"
    >
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <p className="login-form__error">{emailError}</p>}

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={!email || !password || !!emailError}>
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
