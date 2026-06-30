import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { SelectionWidget } from "./components/SelectionWidget";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ py: 4 }}>
                <SelectionWidget />
            </Container>
        </ThemeProvider>
    );
}

export default App;
