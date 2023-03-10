import { createBrowserRouter } from "react-router-dom";
import { ROUTES_NAMES } from "./constants/routesNames";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AncientWondersPage from "./pages/AncienWonders";
import ModernWondersPage from "./pages/ModernWonders";
import ErrorPage from "./pages/ErrorPage";
import NaturalWonders from "./pages/NaturalWonders";

export const router = createBrowserRouter([
  {
    path: ROUTES_NAMES.home.path,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: ROUTES_NAMES.ancientWonders.path,
        element: <AncientWondersPage />,
      },
      {
        path: ROUTES_NAMES.modernWonders.path,
        element: <ModernWondersPage />,
      },
      {
        path: ROUTES_NAMES.naturalWonders.path,
        element: <NaturalWonders />,
      },
    ],
  },
]);
