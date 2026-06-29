import { Box, Chip } from "@mui/material";
import type { ListItem } from "../lib/types";

interface Props {
    items: ListItem[];
    onRemove: (id: string) => void;
}

export function SelectedChips({ items, onRemove }: Props) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {items.map((item) => (
                <Chip
                    key={item.id}
                    label={item.label}
                    onDelete={() => onRemove(item.id)}
                />
            ))}
        </Box>
    )
}