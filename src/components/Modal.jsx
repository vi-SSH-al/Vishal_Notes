// src/components/Modal.jsx
import React from "react";
import "./Modal.css"; // Optional: Add styles for the modal

const Modal = ({ isOpen, onClose, note }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{note.title || "Untitled Note"}</h2>
        <p className="modal-author">By {note.author || "Unknown Author"}</p>
        <div
          className="modal-body"
          dangerouslySetInnerHTML={{
            __html: note.content || "No content available.",
          }}
        />
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
