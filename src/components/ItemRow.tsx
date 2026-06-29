import { Checkbox, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import type { ListItem } from "../lib/types";

interface Props {
    item: ListItem;
    checked: boolean;
    disabled: boolean;
    onToggle: (item: ListItem) => void;
}

export function ItemRow({ item, checked, disabled, onToggle }: Props) {
    return (
        <ListItemButton dense selected={checked} disabled={disabled} onClick={() => onToggle(item)}>
            <ListItemIcon sx={{ minWidth: 40 }}>
                <Checkbox edge="start" checked={checked} disabled={disabled} tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText primary={item.label} />
        </ListItemButton>
    )
}