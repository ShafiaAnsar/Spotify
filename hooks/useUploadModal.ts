import { create } from "zustand";

interface UploadModalStore{
    isOpen:boolean 
    onOpen:()=>void
    onClose:()=>void 
}

const useUploadModal = create<UploadModalStore>((set)=>({
    isOpen:false,
    onClose:()=>set({isOpen:false}),
    onOpen:()=>set({isOpen:true})
}))

export default useUploadModal