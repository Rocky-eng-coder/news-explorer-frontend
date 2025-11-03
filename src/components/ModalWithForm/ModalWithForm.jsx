import "./ModalWithForm.css";
import PropTypes from "prop-types";

function ModalWithForm({
  title,
  isOpen,
  onClose,
  children,
  containerClassName = "",
}) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose} />
      <div className={`modal__content ${containerClassName}`}>
        <button className="modal__close" onClick={onClose}></button>
        <h2 className="modal__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
ModalWithForm.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  containerClassName: PropTypes.string,
};
export default ModalWithForm;
