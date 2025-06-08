import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "@routes/routes";
import theme from "@theme/theme";
import GlobalStyle from "@theme/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;