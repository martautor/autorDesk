import { AppBar, Box, Button, Toolbar, Typography, createTheme, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";
const darkTheme = createTheme({
    palette: {
      primary: {
        main: red[900],
      },
    },
  });
export default function Header() {
    return (<Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        AutorDesk
                    </Typography>
                    <Button color="inherit">
                        Вход
                    </Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    </Box>)
}