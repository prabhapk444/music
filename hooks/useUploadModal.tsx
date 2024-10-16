import { create } from "zustand";


interface UploadModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  }
  

const UploadModal = create<UploadModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }));
  

export default UploadModal;
