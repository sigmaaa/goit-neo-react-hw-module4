import Modal from "react-modal";

Modal.setAppElement("#root");
const ImageModal = ({ imgSource, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          inset: "20% auto auto 20%",
          maxWidth: "600px",
          maxHeight: "80%",
        },
      }}
    >
      <img src={imgSource} alt="Selected" style={{ width: "100%" }} />
    </Modal>
  );
};

export default ImageModal;
