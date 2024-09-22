import React, { useState, useRef, useEffect } from "react";
import "./NoteEditor.css"; // Assuming custom CSS for UI enhancements

const NoteEditor = ({ onContentChange, notecontent }) => {
  const [content, setContent] = useState(notecontent || "");
  const [activeFormats, setActiveFormats] = useState([]); // Track active formats
  const contentRef = useRef(null);

  // Function to save and restore the caret position
  const handleInput = () => {
    if (contentRef.current) {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);

      const newContent = contentRef.current.innerHTML; // Get updated content
      setContent(newContent); // Update state with new content

      // Notify the parent component of the content change
      onContentChange(newContent);

      // Restore the cursor position
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.addEventListener("input", handleInput);
    }
    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener("input", handleInput);
      }
    };
  }, [content]);

  const toggleFormat = (format) => {
    document.execCommand(format, false);
    setActiveFormats((prev) =>
      prev.includes(format)
        ? prev.filter((f) => f !== format)
        : [...prev, format]
    );
  };

  const isActive = (format) => activeFormats.includes(format);

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button
          className={isActive("bold") ? "active" : ""}
          onClick={() => toggleFormat("bold")}
          type="button"
        >
          B
        </button>
        <button
          className={isActive("italic") ? "active" : ""}
          onClick={() => toggleFormat("italic")}
          type="button"
        >
          I
        </button>
        <button
          className={isActive("underline") ? "active" : ""}
          onClick={() => toggleFormat("underline")}
          type="button"
        >
          U
        </button>
        <button
          className={isActive("justifyLeft") ? "active" : ""}
          onClick={() => toggleFormat("justifyLeft")}
          type="button"
        >
          Left
        </button>
        <button
          className={isActive("justifyCenter") ? "active" : ""}
          onClick={() => toggleFormat("justifyCenter")}
          type="button"
        >
          Center
        </button>
        <button
          className={isActive("justifyRight") ? "active" : ""}
          onClick={() => toggleFormat("justifyRight")}
          type="button"
        >
          Right
        </button>
      </div>
      <div
        ref={contentRef}
        className="editor-content"
        contentEditable={true}
        suppressContentEditableWarning={true}
      ></div>
    </div>
  );
};

export default NoteEditor;
