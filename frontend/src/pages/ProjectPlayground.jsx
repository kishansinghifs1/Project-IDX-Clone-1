import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditorComponent } from "../components/molecules/EditorComponent/EditorComponent";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";
import { TreeStructure } from "../components/organisms/TreeStructure";
import { useTreeStructureStore } from "../store/treeStructureStore";

export const ProjectPlayground = () => {
  const { projectId: projectIdFromUrl } = useParams();

  // state for open files
  const [files, setFiles] = useState([
    { id: 1, name: "file1.js", active: false },
    { id: 2, name: "file2.js", active: true },
  ]);

  // remove file on cross click
  const handleClose = (id) => {
    setFiles(files.filter((f) => f.id !== id));
  };
  const { setProjectId, projectId } = useTreeStructureStore();
  useEffect(() => {
    setProjectId(projectIdFromUrl);
  }, []);

  return (
    <>
      <div style={{display:"flex"}}>
        {projectId && (
          <div
            style={{
              backgroundColor: "#333254",
              paddingRight: "10px",
              paddingTop: "0.3vh",
              midWidth: "250px",
              maxWidth: "25%",
              height: "99.7vh",
              overflow: "auto",
            }}
          >
            <TreeStructure />
          </div>
        )}
        <EditorComponent />
      </div>

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
      </div>
    </>
  );
};
