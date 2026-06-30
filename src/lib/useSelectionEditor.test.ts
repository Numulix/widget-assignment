import { describe, expect, it } from "vitest";
import { buildValueMap, generateListItems } from "../data/items";
import { MAX_SELECTION, useSelectionEditor } from "./useSelectionEditor";
import { act, renderHook } from "@testing-library/react";

const items = generateListItems(10);
const values = buildValueMap(items);

describe('useSelectionEditor', () => {
    it('seeds the draft from the initial selection', () => {
        const { result } = renderHook(() => useSelectionEditor(items, values, [items[0]]));
        expect(result.current.draft).toEqual([items[0]]);
        expect(result.current.isSelected('Element 1')).toBe(true);
    });

    it('toggles an item in and out of the draft', () => {
        const { result } = renderHook(() => useSelectionEditor(items, values, []));
        act(() => result.current.toggle(items[0]));
        expect(result.current.isSelected('Element 1')).toBe(true);
        act(() => result.current.toggle(items[0]));
        expect(result.current.isSelected('Element 1')).toBe(false);
    });

    it('never selects more than the max', () => {
        const { result } = renderHook(() => useSelectionEditor(items, values, []));
        act(() => {
            result.current.toggle(items[0]);
            result.current.toggle(items[1]);
            result.current.toggle(items[2]);
            result.current.toggle(items[3]);
        });
        expect(result.current.draft).toHaveLength(MAX_SELECTION);
        expect(result.current.isSelected('Element 4')).toBe(false);
    });

    it('disabled unselected rows when full, but keeps selected ones toggleable', () => {
        const { result } = renderHook(() => useSelectionEditor(items, values, [items[0], items[1], items[2]]));
        expect(result.current.isFull).toBe(true);
        expect(result.current.isDisabled('Element 4')).toBe(true);
        expect(result.current.isDisabled('Element 1')).toBe(false);
    });

    it('removes an item from the draft', () => {
        const { result } = renderHook(() => useSelectionEditor(items, values, [items[0], items[1]]));
        act(() => result.current.remove('Element 1'));
        expect(result.current.draft).toEqual(['Element 2']);
    });
});