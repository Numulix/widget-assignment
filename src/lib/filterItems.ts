import type { FilterThreshold } from "./types";

export function filterItems(
    items: string[],
    values: Map<string, number>,
    searchTerm: string,
    threshold: FilterThreshold,
): string[] {
    const query = searchTerm.trim().toLowerCase();

    return items.filter((item) => {
        const matchesSearch = item.toLowerCase().includes(query);
        const meetsThreshold = values.get(item)! > threshold;
        return matchesSearch && meetsThreshold;
    });
}
