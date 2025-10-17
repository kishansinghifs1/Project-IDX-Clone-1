import { create } from "zustand";

export const useEditorSocketStore = create((set) => ({
  editorsocket: null, // initial state
  setEditorSocket: (incomingSocket) => {
    set({
      editorsocket: incomingSocket, // ✅ use same name
    });
  },
}));
