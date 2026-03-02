import { create } from "zustand";

export const useMoney = create((set)=>({
    gelt: 0,
    addGelt:(sum)=>set((state)=>({ gelt:state.gelt+sum})),
    removeGelt:(sum)=>set((state)=>({ gelt:state.gelt-sum})),
    reset:()=>set({gelt:0})
}))