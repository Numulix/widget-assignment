import { Checkbox, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import type { CSSProperties } from "react";
import type { ListItem } from "../lib/types";

interface Props {
    item: ListItem;
    checked: boolean;
    disabled: boolean;
    onToggle: (item: ListItem) => void;
    style?: CSSProperties;
}

export function ItemRow({ item, checked, disabled, onToggle, style }: Props) {
    return (
        <ListItemButton style={style} dense selected={checked} disabled={disabled} onClick={() => onToggle(item)}>
            <ListItemIcon sx={{ minWidth: 40 }}>
                <Checkbox edge="start" checked={checked} disabled={disabled} tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText primary={item.label} />
        </ListItemButton>
    )
}