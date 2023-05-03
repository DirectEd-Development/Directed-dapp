import React from "react";
import Modal from "react-modal";

interface Props {
    isOpen: boolean;
    closeModal: () => void;
    handleReopenModal: () => void;
}

const PopupModal: React.FC<Props> = ({ isOpen, closeModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="Modal"
            overlayClassName="Overlay"
        >
            <button className="CloseButton" onClick={closeModal}>
                Close
            </button>
            <h4>Never bought digital art collectible before?</h4>
            <div className="VideoWrapper">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/zfRNLNVnlSs"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </Modal>
    );
};

export default PopupModal;
