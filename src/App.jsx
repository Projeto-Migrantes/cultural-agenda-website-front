import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "@routes/routes";
import theme from "@theme/theme";
import GlobalStyle from "@theme/global";

import { Titulo } from './components/Title';  // IMPORT

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Titulo />  {/* USO */}
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
