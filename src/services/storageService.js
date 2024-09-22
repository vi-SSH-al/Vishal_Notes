// src/services/storageService.js

export const saveNoteToStorage = (note) => {
  const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const updatedNotes = storedNotes.filter((n) => n.id !== note.id);
  updatedNotes.push(note);
  localStorage.setItem("notes", JSON.stringify(updatedNotes));
};

export const getNotesFromStorage = () => {
  return JSON.parse(localStorage.getItem("notes")) || [];
};

export const getNoteFromStorageById = (id) => {
  const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

  return storedNotes.find((note) => note.id === Number(id));
};

export const deleteNoteFromStorage = (id) => {
  const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const updatedNotes = storedNotes.filter((note) => note.id !== id);
  localStorage.setItem("notes", JSON.stringify(updatedNotes));
};
