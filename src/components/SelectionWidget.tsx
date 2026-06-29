import { useState } from "react";
import { generateListItems } from "../data/items";
import { useSelectionStore } from "../store/selectionStore";
import { Stack } from "@mui/material";
import { SelectedSummary } from "./SelectedSummary";
import { SelectionEditor } from "./SelectionEditor";

const ITEM_COUNT = 12_000;

// Static data: generated once when this module is first imported,
// shared across every render and remount of the widget.
const ALL_ITEMS = generateListItems(ITEM_COUNT);

export function SelectionWidget() {
    const selectedItems = useSelectionStore((s) => s.selectedItems);
    const setSelectedItems = useSelectionStore((s) => s.setSelectedItems);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const removeCommitted = (id: string) => {
        setSelectedItems(selectedItems.filter((i) => i.id !== id));
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
                    initialSelection={selectedItems}
                    onSave={(draft) => { setSelectedItems(draft); setIsEditing(false) }}
                    onCancel={() => setIsEditing(false)}
                />
            )}
        </Stack>
    )
}