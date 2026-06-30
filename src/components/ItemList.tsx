import { Box, Typography } from "@mui/material";
import { List, type RowComponentProps } from "react-window";
import { ItemRow } from "./ItemRow";

interface Props {
    items: string[];
    isSelected: (item: string) => boolean;
    isDisabled: (item: string) => boolean;
    onToggle: (item: string) => void;
}

const ROW_HEIGHT = 48;
const LIST_HEIGHT = 340;

type RowProps = {
    items: string[];
    isSelected: (id: string) => boolean;
    isDisabled: (id: string) => boolean;
    onToggle: (item: string) => void;
};

function Row({
    index,
    style,
    items,
    isSelected,
    isDisabled,
    onToggle,
}: RowComponentProps<RowProps>) {
    const item = items[index];
    return (
        <ItemRow
            style={style}
            item={item}
            checked={isSelected(item)}
            disabled={isDisabled(item)}
            onToggle={onToggle}
        />
    );
}

export function ItemList({ items, isSelected, isDisabled, onToggle }: Props) {
    if (items.length === 0) {
        return (
            <Box sx={{ height: LIST_HEIGHT, borderTop: 1, borderColor: "divider" }}>
                <Typography color="text.secondary" sx={{ p: 3, textAlign: "center" }}>
                    No items match your search.
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ borderTop: 1, borderColor: "divider" }}>
            <List
                rowComponent={Row}
                rowCount={items.length}
                rowHeight={ROW_HEIGHT}
                rowProps={{ items, isSelected, isDisabled, onToggle }}
                overscanCount={5}
                style={{ height: LIST_HEIGHT }}
            />
        </Box>
    );
}
