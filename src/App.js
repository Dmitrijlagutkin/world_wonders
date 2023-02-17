import { ThemeProvider } from "react-jss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import getAppTheme from "./theme/theme";
// import theme from "./theme/theme";

const App = () => {
  const theme = getAppTheme();
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
