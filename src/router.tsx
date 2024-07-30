import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/Main.tsx";
import Projects from './pages/Projects.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
