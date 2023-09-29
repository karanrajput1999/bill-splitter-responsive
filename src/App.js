import "./App.css";
import Container from "./components/Container";
import { ThemeProvider } from "@mui/material";
import customTheme from "./style/muiStyles";

function App() {
  return (
    <ThemeProvider theme={customTheme()}>
      <Container />
    </ThemeProvider>
  );
}

export default App;
