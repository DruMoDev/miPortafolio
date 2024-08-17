import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProyectoPage from "./pages/ProyectoPage";
import Layout from "./components/layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <LandingPage /> },
        {
          path: "/proyecto/:id",
          element: <ProyectoPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
