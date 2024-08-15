import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainIndex from "./modules/main/pages/MainIndex.tsx"
import ErrorPage from "./modules/ErrorPage.tsx"
import MainContent from "./modules/main/routes/MainContent.tsx";
import ProjectContent from './modules/main/routes/ProjectContent.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainIndex />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <MainContent />
      },
      {
        path: "/projects",
        element: <ProjectContent />
      }
    ]
  },
  
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router
