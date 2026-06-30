import { create } from "zustand";

interface SelectionState {
    selectedItems: string[];
    setSelectedItems: (items: string[]) => void;
};

export const useSelectionStore = create<SelectionState>((set) => ({
    selectedItems: [],
    setSelectedItems: (items) => set({ selectedItems: items })
}));