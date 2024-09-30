import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";
import { Global } from "@/assets/styles/Global";
import { theme } from "@/assets/styles/Theme";
import Main from "@/pages/Main";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Team } from "@/pages/team";
import { Stats } from "@/pages/stats";
import { Cases } from "@/pages/cases";
import { App } from "./App";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/cases",
        element: <Cases />,
      },
    ],
  },
]);

container.render(
  <HelmetProvider>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </HelmetProvider>,
);
