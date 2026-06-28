import type { ListItem } from "../lib/types";

export function generateListItems(count: number): ListItem[] {
    return Array.from({ length: count }, (_, i) => {
        const n = i + 1;
        return {
            id: `item-${n}`,
            label: `Element ${n}`,
            value: n
        }
    })
}