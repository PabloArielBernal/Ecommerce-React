import { BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./themeConfig";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
