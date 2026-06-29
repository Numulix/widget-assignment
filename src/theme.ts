import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#4f46e5",
        },
        background: {
            default: "#f6f7fb",
        }
    },
    shape: {
        borderRadius: 10,
    },
    typography: {
        fontFamily: 'Inter, Roboto, system-ui, sans-serif',
        h6: {
            fontWeight: 700,
        }
    }
})