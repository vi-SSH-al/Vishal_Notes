import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteNoteFromStorage,
  saveNoteToStorage,
} from "../services/storageService";
import Modal from "./Modal"; // Import the Modal component
const NoteCard = ({ note, refreshNotes }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle edit: redirect to the note creation page with the note id
  const handleEdit = () => {
    navigate(`/edit/${note.id}`);
  };

  // Handle delete: remove note from local storage
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNoteFromStorage(note.id);
      refreshNotes(); // Refresh notes after deletion
    }
  };

  // Handle pinning/unpinning the note
  const handlePin = () => {
    const updatedNote = { ...note, pinned: !note.pinned }; // Toggle pin status
    saveNoteToStorage(updatedNote); // Save updated note to local storage
    refreshNotes(); // Refresh notes after pinning/unpinning
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          {note.title || "Untitled Note"}
        </h2>
        <button onClick={handlePin} className="text-gray-500">
          {note.pinned ? "📌 Unpin" : "📍 Pin"}
        </button>
      </div>
      <p className="text-gray-600">By {note.author || "Unknown Author"}</p>
      <div className="mt-4 note-content">
        {/* Use dangerouslySetInnerHTML to render HTML content safely */}
        <span
          dangerouslySetInnerHTML={{
            __html: note.content || "No content available.",
          }}
        />
      </div>
      <button onClick={() => setIsModalOpen(true)} className="text-blue-500">
        View Full Note
      </button>
      <div className="flex justify-between items-center mt-4">
        <button onClick={handleEdit} className="text-blue-500">
          ✏️ Edit
        </button>
        <button onClick={handleDelete} className="text-red-500">
          🗑️ Delete
        </button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          note={note}
        />
      </div>
    </div>
  );
};

export default NoteCard;
