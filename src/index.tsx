import { createRoot } from "react-dom/client";
import { App } from "./App";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { HelmetProvider } from "react-helmet-async";
import { Global } from "@/assets/styles/Global";
import { theme } from "@/assets/styles/Theme";
import Main from "@/pages/Main";
import { AboutLazy } from "@/pages/about/About.async";
import { Suspense } from "react";
import NotFound from "@/pages/notFound";
import {AppRoutes} from "@/pages/AppRoutes";
import { Provider } from "react-redux";
import { store } from "@/store/store";

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
        path: "/about",
        element: (
          <Suspense fallback={""}>
            <AboutLazy />
          </Suspense>
        ),
      },
      {
        path: "/404",
        element: <NotFound />,
      },
      {
        path: "*",
        element: <Navigate to='/404' />,
      },
    ],
  },
]);

container.render(
  <HelmetProvider>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  </HelmetProvider>,
);
