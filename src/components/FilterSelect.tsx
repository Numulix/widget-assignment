import { MenuItem, TextField } from "@mui/material";
import type { FilterThreshold } from "../lib/types";

interface Props {
    value: FilterThreshold;
    onChange: (value: FilterThreshold) => void;
}

const OPTIONS: { label: string; value: FilterThreshold }[] = [
    { label: "All", value: 0 },
    { label: "> 100", value: 100 },
    { label: "> 2500", value: 2500 },
    { label: "> 10000", value: 10000 },
]

export function FilterSelect({ value, onChange }: Props) {
    return (
        <TextField
            select
            label="Filter"
            size="small"
            value={value}
            onChange={(e) => onChange(Number(e.target.value) as FilterThreshold)}
            sx={{ minWidth: 160 }}
        >
            {OPTIONS.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                </MenuItem>
            ))}
        </TextField>
    )
}