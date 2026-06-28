import type { ListItem } from "./types";
import { describe, it, expect } from "vitest";
import { filterItems } from "./filterItems";

const items: ListItem[] = [
    { id: 'item-1', label: 'Element 1', value: 1 },
    { id: 'item-50', label: 'Element 50', value: 50 },
    { id: 'item-150', label: 'Element 150', value: 150 },
    { id: 'item-3000', label: 'Element 3000', value: 3000 },
];

describe('filterItems', () => {
    it('returns all items when search is empty and threshold is 0', () => {
        expect(filterItems(items, '', 0)).toEqual(items);
    });

    it('filters by case-insensitive substring on the label', () => {
        const result = filterItems(items, 'element 5', 0);
        expect(result.map(i => i.id)).toEqual(['item-50']);
    });

    it('filters by numeric threshold', () => {
        const result = filterItems(items, '', 100);
        expect(result.map(i => i.value)).toEqual([150, 3000]);
    });

    it('combines search and filter (both must match)', () => {
        const result = filterItems(items, '150', 100);
        expect(result.map(i => i.id)).toEqual(['item-150']);
    });

    it('ignores surrounding whitespace in the search term', () => {
        const result = filterItems(items, '  element 1  ', 0);
        expect(result.map(i => i.id)).toEqual(['item-1', 'item-150']);
    });
})