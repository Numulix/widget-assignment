import { useState } from "react";
import { buildValueMap, generateListItems } from "../data/items";
import { useSelectionStore } from "../store/selectionStore";
import { Stack } from "@mui/material";
import { SelectedSummary } from "./SelectedSummary";
import { SelectionEditor } from "./SelectionEditor";

const ITEM_COUNT = 15_000;

const ALL_ITEMS = generateListItems(ITEM_COUNT);
const ITEM_VALUES = buildValueMap(ALL_ITEMS);

export function SelectionWidget() {
    const selectedItems = useSelectionStore((s) => s.selectedItems);
    const setSelectedItems = useSelectionStore((s) => s.setSelectedItems);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const removeCommitted = (item: string) => {
        setSelectedItems(selectedItems.filter((i) => i !== item));
    };

    return (
        <Stack spacing={2}>
            <SelectedSummary
                items={selectedItems}
                onEdit={() => setIsEditing(true)}
                onRemove={removeCommitted}
            />
            {isEditing && (
                <SelectionEditor 
                    allItems={ALL_ITEMS}
                    values={ITEM_VALUES}
                    initialSelection={selectedItems}
                    onSave={(draft) => { setSelectedItems(draft); setIsEditing(false) }}
                    onCancel={() => setIsEditing(false)}
                />
            )}
        </Stack>
    )
}