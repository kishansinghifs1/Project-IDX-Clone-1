import { IoIosArrowForward,IoIosArrowDown  } from "react-icons/io";
import { useState } from "react";
import { FileIcon } from "../../atoms/FileIcon/FileIcon";

export const Tree = ({ fileFolderData }) => {
  const [visibility, setvisibility] = useState({});

  function toggleVisibility(name) {
    setvisibility({
      ...visibility,
      [name]: !visibility[name]
    }); 
  }
  function computeExtension(fileFolderData){
    const names=fileFolderData.name.split(".");
    return names[names.length-1];
  }


  return (
    fileFolderData && (
      <div
        style={{
          paddingLeft: "15px",
          color: "white",
        }}
      >
        {fileFolderData.children/* if the current node is a folder render this button then*/ ? (
          /* if the current node is a folder ,render it as a button*/
          <button
            onClick={() => toggleVisibility(fileFolderData.name)}
            style={{
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "white",
              backgroundColor:"transparent",
              paddingTop: "15px",
              fontSize: "16px",
            }}
          >
            {/* folder */}
            {visibility[fileFolderData.name]?<IoIosArrowDown/>:<IoIosArrowForward/>}
            {fileFolderData.name}
          </button>
        ) : (
          /* if the current node is not a folder,render it as p {it is for the file}*/

          <div style={{display:"flex",alignItems:"center"}}>
            <FileIcon extension={computeExtension(fileFolderData)}/>
          <p
            style={{
              paddingTop: "5px",
              fontSize: "15px",
              cursor: "pointer",
              color:"white",
              marginLeft: "5px",
            }}
          >
            {fileFolderData.name}
          </p>
          </div>
        )}
        {/* not work for file */}
        {visibility[fileFolderData.name]// want to see folder nd have folder thrn
         &&
           fileFolderData.children //if it null this part dont work
            && 
          (fileFolderData.children.map((child) => (
            <Tree fileFolderData={child}
             key={child.name}
              />
          ))
          )}
      </div>
    )
  );
};
