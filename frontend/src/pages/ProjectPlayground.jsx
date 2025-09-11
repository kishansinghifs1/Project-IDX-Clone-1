import { useParams } from "react-router-dom";
import { useState } from "react";
import { EditorComponent } from "../componenets/molecules/EditorComponent/EditorComponent";
import { EditorButton } from "../componenets/atoms/EditorButton/EditorButton";

export const ProjectPlayground = () => {
  const { projectId } = useParams();

  // state for open files
  const [files, setFiles] = useState([
    { id: 1, name: "file1.js", active: false },
    { id: 2, name: "file2.js", active: true },
  ]);

  // remove file on cross click
  const handleClose = (id) => {
    setFiles(files.filter((f) => f.id !== id));
  };

  return (
    <>
      Project Id: {projectId}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {/* row of buttons */}
        <div style={{ display: "flex", gap: "8px" }}>
          {files.map((file) => (
            <EditorButton
              key={file.id}
              label={file.name}
              isActive={file.active}
              onClose={() => handleClose(file.id)}
            />
          ))}
        </div>

        {/* editor */}
        <EditorComponent />
      </div>
    </>
  );
};
