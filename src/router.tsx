import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "./pages/Main.tsx";
import Projects from './pages/Projects.tsx'
import ErrorPage from "./pages/Error.tsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router
