import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProyectoPage from "./pages/ProyectoPage";
import Layout from "./components/layout/Layout";

function App() {
  console.log("hola");
  
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
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
