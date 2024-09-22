import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, onEdit, onDelete, onPin }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onPin={onPin}
        />
      ))}
    </div>
  );
};

export default NoteList;
