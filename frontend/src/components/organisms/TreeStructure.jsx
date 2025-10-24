import { useTreeStructureStore } from "../../store/treeStructureStore";
import { useEffect } from "react";
import { Tree } from "../molecules/Tree/Tree";
import { useFileCOntextMenuStore } from "../../store/fileContextMenuStore";
import { FileContextMenu } from "../molecules/ContextMenu/FileContextMenu";
export const TreeStructure=()=>{
    const {treeStructure,setTreeStructure} = useTreeStructureStore();
    const {
        file,
        isOpen: isFileContextOpen,
        x:fileContextX,
        y:fileContextY}=useFileCOntextMenuStore();
    useEffect(()=>{
        if(treeStructure){
            console.log("tree:",treeStructure)
        }else{
            setTreeStructure();
        }

    },[setTreeStructure,treeStructure]);
    return (
    <>
    {isFileContextOpen && fileContextX && fileContextY && (
        <FileContextMenu
        x={fileContextX} 
        y={fileContextY}
        path={file}
        />
    )}
    <div>
        <Tree fileFolderData={treeStructure}/>
    </div>
    </>
    )
}