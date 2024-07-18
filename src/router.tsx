import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/Root.tsx";
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

function RouterFunction() {
    return <RouterProvider router={router} />
}

export default RouterFunction
