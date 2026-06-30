import { Box, Button, Stack, Typography } from "@mui/material";
import { SelectedChips } from "./SelectedChips";

interface Props {
    items: string[];
    onEdit: () => void;
    onRemove: (id: string) => void;
}

export function SelectedSummary({ items, onEdit, onRemove }: Props) {
    return (
        <Stack spacing={2}>
            <Box>
                <Typography variant="h5">Select Items</Typography>
                <Typography color="text.secondary">
                    You currently have {items.length} item{items.length !== 1 ? "s" : ""} selected.
                </Typography>
            </Box>
            {items.length > 0 && <SelectedChips items={items} onRemove={onRemove} />}
            <Button variant="contained" onClick={onEdit} sx={{ alignSelf: 'flex-start' }}>
                Change my choice
            </Button>
        </Stack>
    )
}