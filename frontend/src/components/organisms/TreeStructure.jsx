import { useTreeStructureStore } from "../../store/treeStructureStore";
import { useEffect } from "react";
import { Tree } from "../molecules/Tree/Tree";
export const TreeStructure=()=>{
    const {treeStructure,setTreeStructure} = useTreeStructureStore();

      
    useEffect(()=>{
        if(treeStructure){
            console.log("tree:",treeStructure)
        }else{
            setTreeStructure();
        }

    },[setTreeStructure,treeStructure]);
    return (
    <div>
        <Tree fileFolderData={treeStructure}/>
    </div>
    )
}