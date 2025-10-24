import { create } from "zustand";
export const useFileCOntextMenuStore = create((set) => ({
  x: null,
  y: null,
  isOpen: false,
  file:null,
  setX: (incmingX) => {
    set({ x: incmingX });
  },
  setY: (incomingY) => {
    set({ y: incomingY });
  },
  setIsOpen: (incomingIsOpen) => {
    set({ isOpen: incomingIsOpen });
  },
    setFile:(incomingFile)=>{
        set({file:incomingFile});
    }
}));
