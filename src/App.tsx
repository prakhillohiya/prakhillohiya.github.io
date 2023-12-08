import { useState } from "react";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import Portfolio from "./Portfolio";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Rubik',
      'sans-serif',
    ].join(','),
  },
});
function App() {
  return (
      <ThemeProvider theme={theme}>
      <Box minHeight={"100vh"} width={"100%"} paddingLeft={"2rem"} paddingRight={"2rem"} sx={{"backgroundColor":"#f2f2f2"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Portfolio />
      </Box>
      </ThemeProvider>
  );
}

export default App;
