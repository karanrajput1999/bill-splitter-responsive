import { createTheme } from "@mui/material";

const customTheme = () =>
  createTheme({
    palette: {
      primary: {
        main: "#716cdb",
      },
      secondary: {
        main: "#f7f6fd",
      },
    },
  });

export default customTheme;
