import { create } from "zustand";

export const useBuy = create((set) => ({
  buyList: [],

  addProd: (prod) =>
    set((state) => ({
      buyList: [...state.buyList, prod],
    })),

  removeProd: (name) =>
    set((state) => ({
      buyList: state.buyList.filter((p) => p.name !== name),
    })),
}));