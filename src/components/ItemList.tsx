import { Box, List, Typography } from "@mui/material";
import type { ListItem } from "../lib/types";
import { ItemRow } from "./ItemRow";

interface Props {
    items: ListItem[];
    isSelected: (id: string) => boolean;
    isDisabled: (id: string) => boolean;
    onToggle: (item: ListItem) => void;
}

export function ItemList({ items, isSelected, isDisabled, onToggle }: Props) {
    return (
        <Box sx={{ height: 340, overflowY: 'auto', borderTop: 1, borderColor: 'divider' }}>
            {items.length === 0 ? (
                <Typography color="text.secondary" sx={{ p: 3, textAlign: 'center' }}>
                    No items match your search.
                </Typography>
            ) : (
                <List disablePadding>
                    {items.map((item) => (
                        <ItemRow
                            key={item.id}
                            item={item}
                            checked={isSelected(item.id)}
                            disabled={isDisabled(item.id)}
                            onToggle={onToggle}
                        />
                    ))}
                </List>
            )}
        </Box>
    )
}