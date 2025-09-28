import PropTypes from "prop-types";
import "./SuccessfulModal.css";

function SuccessfulModal({ isOpen, onClose, onSignIn }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__content modal__content--success">
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Close success modal"
        />
        <h2 className="modal__message">Registration successfully completed!</h2>
        <button className="modal__link" onClick={onSignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
}
SuccessfulModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};
export default SuccessfulModal;
