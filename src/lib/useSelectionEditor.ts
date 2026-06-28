import { useMemo, useState } from "react";
import type { FilterThreshold, ListItem } from "./types";
import { filterItems } from "./filterItems";

export const MAX_SELECTION = 3;

export function useSelectionEditor(
    allItems: ListItem[],
    initialSelection: ListItem[]
) {
    const [draft, setDraft] = useState<ListItem[]>(initialSelection);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [threshold, setThreshold] = useState<FilterThreshold>(0);

    const visibleItems = useMemo(
        () => filterItems(allItems, searchTerm, threshold),
        [allItems, searchTerm, threshold]
    );

    const isSelected = (id: string) => draft.some((item) => item.id === id);
    const isFull = draft.length >= MAX_SELECTION;
    const isDisabled = (id: string) => !isSelected(id) && isFull;

    const toggle = (item: ListItem) => {
        setDraft((current) => {
            if (current.some((i) => i.id === item.id)) {
                return current.filter((i) => i.id !== item.id);
            }
            if (current.length >= MAX_SELECTION) return current;
            return [...current, item];
        });
    };

    const remove = (id: string) => {
        setDraft((current) => current.filter((i) => i.id !== id));
    }

    return {
        draft,
        searchTerm,
        threshold,
        visibleItems,
        setSearchTerm,
        setThreshold,
        isSelected,
        isDisabled,
        isFull,
        toggle,
        remove,
    }
}