import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/styles";
import React from "react";

const theme = createTheme();

export default function MuiWrapper({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
