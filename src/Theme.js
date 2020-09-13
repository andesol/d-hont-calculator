import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        main: "#1985a1"
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
