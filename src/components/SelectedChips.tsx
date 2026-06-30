import { Box, Chip } from "@mui/material";

interface Props {
    items: string[];
    onRemove: (id: string) => void;
}

export function SelectedChips({ items, onRemove }: Props) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {items.map((item) => (
                <Chip
                    key={item}
                    label={item}
                    onDelete={() => onRemove(item)}
                />
            ))}
        </Box>
    )
}