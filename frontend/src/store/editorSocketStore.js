import { create } from "zustand";
import { useActiveFileTabStore } from "./activeFileTabStore";
import { useTreeStructureStore } from "./treeStructureStore";

export const useEditorSocketStore = create((set) => ({
  editorsocket: null,

  setEditorSocket: (incomingSocket) => {
    // Get the setter function from the other store
    const { setActiveFileTab } = useActiveFileTabStore.getState();
    const  projectTreeStructureSetter = useTreeStructureStore.getState().setTreeStructure;



    //provide by zustand to access other store's state

    // Attach socket event listener once
    incomingSocket.off("readFileSuccess"); // prevent duplicate listeners
    incomingSocket.on("readFileSuccess", (data) => {
      console.log("Read file success:", data);
      const fileExtension = data?.path?.split('.').pop();
      if (data?.path && data?.value) {
        setActiveFileTab(data.path, data.value, fileExtension);
      }
    });
    incomingSocket?.on("writeFileSuccess", (data) => {
      console.log("File written successfully:", data);
      incomingSocket.emit("readFile", {
        pathToFileOrFolder:data.path
    });
    });
    incomingSocket?.on("deleteFileSuccess",()=>{
      projectTreeStructureSetter();
    });

    set({ editorsocket: incomingSocket });
  },
}));
