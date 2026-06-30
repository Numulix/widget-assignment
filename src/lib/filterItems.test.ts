import { describe, it, expect } from "vitest";
import { filterItems } from "./filterItems";
import { buildValueMap } from "../data/items";
import type { FilterThreshold } from "./types";

const items: string[] = ["Element 1", "Element 50", "Element 150", "Element 3000"];
const values = buildValueMap(items);

function filterTest(term: string, threshold: FilterThreshold) {
    return filterItems(items, values, term, threshold);
}

describe("filterItems", () => {
    it("returns all items when search is empty and threshold is 0", () => {
        expect(filterTest("", 0)).toEqual(items);
    });

    it("filters by case-insensitive substring on the label", () => {
        expect(filterTest("element 5", 0)).toEqual(["Element 50"]);
    });

    it("filters by numeric threshold", () => {
        expect(filterTest("", 100)).toEqual(["Element 150", "Element 3000"]);
    });

    it("combines search and filter (both must match)", () => {
        expect(filterTest("150", 100)).toEqual(["Element 150"]);
    });

    it("ignores surrounding whitespace in the search term", () => {
        expect(filterTest(" element 1 ", 0)).toEqual(["Element 1", "Element 150"]);
    });
});
