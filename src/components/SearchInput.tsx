import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: Props) {
    return (
        <TextField
            label="Search"
            size="small"
            fullWidth
            value={value}
            onChange={(e) => onChange(e.target.value)}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon fontSize="small" />
                        </InputAdornment>
                    )
                }
            }}
        />
    )
}