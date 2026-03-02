import { create } from "zustand";
import product from '../data/products.json'

export const useProduct = create((set)=>({
    product : product

}))