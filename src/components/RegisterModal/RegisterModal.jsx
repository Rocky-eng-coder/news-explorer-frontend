import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";
import SuccessfulModal from "../SuccessfulModal/SuccessfulModal";

function RegisterModal({ isOpen, onClose, onSwitch, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const checkEmailAvailable = (emailToCheck) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    return storedUser && storedUser.email === emailToCheck;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkEmailAvailable(email)) {
      setEmailError("This email is not available");
      return;
    }
    onRegister({ email, password, username });

    setEmail("");
    setPassword("");
    setUsername("");
    setEmailError("");
    onClose();

    setShowSuccess(true);
  };

  useEffect(() => {
    if (emailError) setEmailError("");
  }, [email]);

  const isButtonDisabled = !email || !password || !username;

  return (
    <>
      <ModalWithForm
        title="Sign up"
        isOpen={isOpen}
        onClose={onClose}
        containerClassName="register-modal-size"
      >
        <form className="register-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {emailError && <p className="register-form__error">{emailError}</p>}

          <button type="submit" disabled={isButtonDisabled}>
            Sign up
          </button>

          <p className="register-form__switch">
            or <span onClick={onSwitch}>Sign in</span>
          </p>
        </form>
      </ModalWithForm>

      {showSuccess && (
        <SuccessfulModal
          isOpen={showSuccess}
          onClose={() => setShowSuccess(false)}
          onSignIn={() => {
            setShowSuccess(false);
            onSwitch();
          }}
        />
      )}
    </>
  );
}

export default RegisterModal;
