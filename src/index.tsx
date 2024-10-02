import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";
import { Global } from "@/assets/styles/Global";
import { theme } from "@/assets/styles/Theme";
import Main from "@/pages/Main";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Team } from "@/pages/team";
import { Stats } from "@/pages/stats";
import { CasesPage } from "@/pages/CasesPage";
import { App } from "./App";
import { AppRoutes } from "@/pages/AppRoutes";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Main />,
//       },
//       {
//         path: "/team.tsx",
//         element: <Team />,
//       },
//       {
//         path: "/stats",
//         element: <Stats />,
//       },
//       {
//         path: "/cases",
//         element: <Cases />,
//       },
//     ],
//   },
// ]);

container.render(
  <HelmetProvider>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global />
        <AppRoutes />
        {/*<RouterProvider router={router} />*/}
      </ThemeProvider>
    </Provider>
  </HelmetProvider>,
);
