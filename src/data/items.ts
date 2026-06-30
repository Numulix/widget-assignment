// Generates an array of plain strings
// ["Element 1", "Element 2", "Element 3", ...]
export function generateListItems(count: number): string[] {
    return Array.from({ length: count }, (_, i) => `Element ${i + 1}`);
}

// From the given assignment, it's assumed that all elements are
// sorted in ascending order. Thus filtering can be done at index level
// However, let's not assume this and parse the numeric value out of each
// label once into a lookup map. Filtering then reads the number in O(1)
// instead of re-parsing on every keystroke
export function buildValueMap(items: string[]): Map<string, number> {
    return new Map(items.map((label) => [label, Number(label.match(/\d+/)![0])]));
}

// Using regex matching, we get the number from each label
// This might have been overengineered :)
// Could've just gone with index-based filtering, but w/e
