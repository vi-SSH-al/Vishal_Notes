import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoteCard from "./NoteCard";
import { getNotesFromStorage } from "../services/storageService";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  // Load notes from local storage
  useEffect(() => {
    const storedNotes = getNotesFromStorage();
    setNotes(storedNotes);
  }, []);

  const handleCreateNote = () => {
    navigate("/create");
  };

  const refreshNotes = () => {
    const storedNotes = getNotesFromStorage();
    setNotes(storedNotes);
  };

  const pinnedNotes = notes.filter((note) => note.pinned);
  const regularNotes = notes.filter((note) => !note.pinned);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Notes</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-6"
        onClick={handleCreateNote}
      >
        Create Note
      </button>

      <h2 className="text-2xl font-semibold mb-4">Pinned Notes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pinnedNotes.length > 0 ? (
          pinnedNotes.map((note) => (
            <NoteCard key={note.id} note={note} refreshNotes={refreshNotes} />
          ))
        ) : (
          <p>No pinned notes available.</p>
        )}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Other Notes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularNotes.length > 0 ? (
          regularNotes.map((note) => (
            <NoteCard key={note.id} note={note} refreshNotes={refreshNotes} />
          ))
        ) : (
          <p>No notes available.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
