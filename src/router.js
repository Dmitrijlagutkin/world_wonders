import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import {
  ROUTE_HOME,
  ROUTE_ANCIENT_WONDERS,
  ROUTE_MODERN_WONDERS,
} from "./constants/routesNames";
import Home from "./pages/Home";
import AncientWondersPage from "./pages/AncienWonders";
import ModernWondersPage from "./pages/ModernWonders";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: ROUTE_HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: ROUTE_ANCIENT_WONDERS,
        element: <AncientWondersPage />,
      },
      {
        path: ROUTE_MODERN_WONDERS,
        element: <ModernWondersPage />,
      },
    ],
  },
]);
