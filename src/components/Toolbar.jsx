const Toolbar = ({ format, onFormatChange }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <button
        className={`px-2 py-1 ${format.bold ? "bg-gray-200" : ""}`}
        onClick={() => onFormatChange("bold", !format.bold)}
      >
        Bold
      </button>
      <button
        className={`px-2 py-1 ${format.italic ? "bg-gray-200" : ""}`}
        onClick={() => onFormatChange("italic", !format.italic)}
      >
        Italic
      </button>
      <button
        className={`px-2 py-1 ${format.underline ? "bg-gray-200" : ""}`}
        onClick={() => onFormatChange("underline", !format.underline)}
      >
        Underline
      </button>
      <button
        className="px-2 py-1"
        onClick={() => onFormatChange("alignment", "left")}
      >
        Left
      </button>
      <button
        className="px-2 py-1"
        onClick={() => onFormatChange("alignment", "center")}
      >
        Center
      </button>
      <button
        className="px-2 py-1"
        onClick={() => onFormatChange("alignment", "right")}
      >
        Right
      </button>
      <input
        type="number"
        className="w-16 p-1 border border-gray-300 rounded-lg"
        value={format.fontSize}
        onChange={(e) =>
          onFormatChange("fontSize", parseInt(e.target.value, 10))
        }
      />
    </div>
  );
};

export default Toolbar;
