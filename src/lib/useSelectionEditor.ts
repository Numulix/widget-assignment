import { useMemo, useState } from "react";
import type { FilterThreshold } from "./types";
import { filterItems } from "./filterItems";

export const MAX_SELECTION = 3;

export function useSelectionEditor(
    allItems: string[],
    values: Map<string, number>,
    initialSelection: string[],
) {
    const [draft, setDraft] = useState<string[]>(initialSelection);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [threshold, setThreshold] = useState<FilterThreshold>(0);

    const visibleItems = useMemo(
        () => filterItems(allItems, values, searchTerm, threshold),
        [allItems, values, searchTerm, threshold],
    );

    const isSelected = (item: string) => draft.includes(item);
    const isFull = draft.length >= MAX_SELECTION;
    const isDisabled = (item: string) => !isSelected(item) && isFull;

    const toggle = (item: string) => {
        setDraft((current) => {
            if (current.includes(item)) {
                return current.filter((i) => i !== item);
            }
            if (current.length >= MAX_SELECTION) return current;
            return [...current, item];
        });
    };

    const remove = (item: string) => {
        setDraft((current) => current.filter((i) => i !== item));
    };

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
    };
}
