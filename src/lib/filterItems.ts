import type { ListItem, FilterThreshold } from "./types";

export function filterItems(
    items: ListItem[],
    searchTerm: string,
    threshold: FilterThreshold
): ListItem[] {
    const query = searchTerm.trim().toLowerCase();

    return items.filter((item) => {
        const matchesSearchTerm = item.label.toLowerCase().includes(query);
        const meetsThreshold = item.value > threshold;
        return matchesSearchTerm && meetsThreshold;
    })
}