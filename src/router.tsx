import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainPage from "./modules/MainPage.tsx"
import ErrorPage from "./modules/ErrorPage.tsx"
import Main from "./routes/main.tsx";
import Projects from './routes/projects.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
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
