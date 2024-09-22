import React, { useState, useEffect } from "react";
import NoteEditor from "../components/NoteEditor"; // Import the editor component
import { saveNoteToStorage } from "../services/storageService"; // Import the storage functions
import "./NoteCreationPage.css"; // Assuming custom CSS for UI enhancements
import { useNavigate } from "react-router-dom";

const NoteCreationPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [noteContent, setNoteContent] = useState(""); // Store content
  const navigate = useNavigate();
  // Function to handle content change in the editor
  const handleContentChange = (content) => {
    setNoteContent(content); // Set the content coming from the editor
  };

  // Function to handle form submission (save the note)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a note object
    const note = {
      id: Date.now(), // Generate a unique ID using timestamp
      title,
      author,
      content: noteContent, // Use the content from the editor
      createdAt: new Date().toISOString(),
    };

    // Save the note using the storage service
    saveNoteToStorage(note);
    console.log(note);
    // Clear the form fields after saving the note
    setTitle("");
    setAuthor("");
    setNoteContent("");

    // Provide user feedback
    alert("Note saved successfully!");
    navigate("/");
  };

  return (
    <div className="note-creation-page">
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-3"
      >
        back
      </button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Created By:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter the author"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="note-content">Notes:</label>
          <NoteEditor
            onContentChange={handleContentChange}
            notecontent={noteContent || ""}
          />
        </div>
        <button type="submit" className="submit-button">
          Save Note
        </button>
      </form>
    </div>
  );
};

export default NoteCreationPage;
