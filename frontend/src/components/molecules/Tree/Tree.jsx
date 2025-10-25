import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { FileIcon } from "../../atoms/FileIcon/FileIcon";
import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useFileCOntextMenuStore } from "../../../store/fileContextMenuStore";

export const Tree = ({ fileFolderData }) => {
  const [visibility, setVisibility] = useState({});
  const { editorsocket } = useEditorSocketStore(); // ⚠ make sure store uses 'editorsocket'
  const{
    setFile,
    setIsOpen: setFileContextMenuIsOpen,
    setX:setFileContextMenuX,
    setY:setFileContextMenuY
  }=useFileCOntextMenuStore();

  // Toggle folder open/close safely using path as key
  const toggleVisibility = (path) => {
    setVisibility((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const computeExtension = (file) => {
    const names = file.name.split(".");
    return names[names.length - 1];
  };
  function handleContextMenuForFiles(e,path){
    e.preventDefault();
    console.log("Right click detected on file:", path,e);
    setFile(path);
    setFileContextMenuX(e.clientX);
    setFileContextMenuY(e.clientY);
    setFileContextMenuIsOpen(true);
  
  }

  // Double-click handler for files
  const handleDoubleClick = (file) => {
    if (!editorsocket) {
      console.warn("Socket not ready yet:", file.path);
      return; // prevent crash
    }

    editorsocket.emit("readFile", { pathToFileOrFolder: file.path });
  };

  return (
    fileFolderData && (
      <div style={{ paddingLeft: "15px", color: "white" }}>
        {fileFolderData.children ? (
          <button
            onClick={() => toggleVisibility(fileFolderData.path)} // use path as unique key
            style={{
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "white",
              backgroundColor: "transparent",
              padding: "15px",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            {visibility[fileFolderData.path] ? <IoIosArrowDown /> : <IoIosArrowForward />}
            {fileFolderData.name}
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center" ,justifyContent:"start"}}>
            <FileIcon extension={computeExtension(fileFolderData)} />
            <p
              style={{
                paddingTop: "15px",
                paddingBottom: "15px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "pointer",
                color: "white",
                marginLeft: "15px",
              }}
              onContextMenu={(e)=>handleContextMenuForFiles(e,fileFolderData.path)}
              onDoubleClick={() => handleDoubleClick(fileFolderData)}
            >
              {fileFolderData.name}
            </p>
          </div>
        )}

        {/* Render children recursively if folder is open */}
        {visibility[fileFolderData.path] &&
          fileFolderData.children?.map((child) => (
            <Tree key={child.path} fileFolderData={child} />
          ))}
      </div>
    )
  );
};
