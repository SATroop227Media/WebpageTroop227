import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainIndex from "./modules/main/pages/MainIndex.tsx"
import ErrorPage from "./modules/ErrorPage.tsx"
import Main from "./modules/main/routes/main.tsx";
import Projects from './modules/main/routes/projects.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainIndex />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Main />
      },
      {
        path: "/projects",
        element: <Projects />
      }
    ]
  },
  
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router
