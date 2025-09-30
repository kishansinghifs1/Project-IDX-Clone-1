import './EditorButton.css';

export const EditorButton = ({ isActive, onClose }) => {
  function handleClick(){
    //  TODO:inplement click handler
  }
  return (
    <button
      className="editor-button"
      style={{
        position: "relative",
        color: isActive ? "white" : "#959eba",
        backgroundColor: isActive ? "#383242" : "#4a4859",
        padding: "6px 20px 6px 10px", // space for text + cross
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {/* Button label */}
      file.js

      {/* Close cross inside top-right */}
      <span
        onClick={(e) => {
          e.stopPropagation(); // prevent button click
          onClose();
        }}
        style={{
          position: "absolute",
          top: "2px",
          right: "4px",
          fontSize: "12px",
          color: "#ccc",
          cursor: "pointer",
        }}
      >
        ×
      </span>
    </button>
  );
};
