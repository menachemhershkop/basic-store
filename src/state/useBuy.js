import { create } from "zustand";


export const useBuy = create((set)=>({
    buyList : [],
    addProd:(prod)=>set((state)=>({product:state.product.push(prod)})),
    removeProd:(prod)=>set((state)=>({product:state.product.(prod)})),
}))