import { create } from "zustand";

export const useCard = create((set)=>({
    items:0,
    inc: ()=>set((state)=>({items :state.items + 1})),
    dec: ()=>set((state)=>({items :state.items - 1})),
    reset: ()=>set({items :0}),
}))