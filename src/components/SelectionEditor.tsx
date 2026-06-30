import { Box, Button, Divider, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useSelectionEditor } from "../lib/useSelectionEditor";
import CloseIcon from "@mui/icons-material/Close";
import { SearchInput } from "./SearchInput";
import { FilterSelect } from "./FilterSelect";
import { ItemList } from "./ItemList";
import { SelectedChips } from "./SelectedChips";

interface Props {
    allItems: string[];
    values: Map<string, number>;
    initialSelection: string[];
    onSave: (items: string[]) => void;
    onCancel: () => void;
}

export function SelectionEditor({ allItems, values, initialSelection, onSave, onCancel }: Props) {
    const {
        draft,
        searchTerm,
        threshold,
        visibleItems,
        setSearchTerm,
        setThreshold,
        isSelected,
        isDisabled,
        toggle,
        remove,
    } = useSelectionEditor(allItems, values, initialSelection);

    return (
        <Paper variant="outlined" sx={{ overflow: "hidden" }}>
            <Stack
                direction="row"
                sx={{
                    px: 2,
                    py: 1.5,
                    bgcolor: "grey.100",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    Select items
                </Typography>
                <IconButton size="small" onClick={onCancel} aria-label="Close">
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Stack>
            <Divider />

            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ p: 2, alignItems: "center" }}
            >
                <SearchInput value={searchTerm} onChange={setSearchTerm} />
                <FilterSelect value={threshold} onChange={setThreshold} />
            </Stack>

            <ItemList
                items={visibleItems}
                isSelected={isSelected}
                isDisabled={isDisabled}
                onToggle={toggle}
            />

            <Box sx={{ p: 2 }}>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mb: 2, alignItems: "center", flexWrap: "wrap" }}
                >
                    <Typography variant="body2" color="text.secondary">
                        Current selected items:
                    </Typography>
                    <SelectedChips items={draft} onRemove={remove} />
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" onClick={() => onSave(draft)}>
                        Save
                    </Button>
                    <Button variant="contained" color="error" onClick={onCancel}>
                        Cancel
                    </Button>
                </Stack>
            </Box>
        </Paper>
    );
}
