import { create } from "zustand";
import type { ListItem } from "../lib/types";

interface SelectionState {
    selectedItems: ListItem[];
    setSelectedItems: (items: ListItem[]) => void;
};

export const useSelectionStore = create<SelectionState>((set) => ({
    selectedItems: [],
    setSelectedItems: (items) => set({ selectedItems: items })
}));