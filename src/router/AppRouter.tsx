import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomePage } from "../screens/home/HomePage"
import { CallBackPage } from "../screens/home/CallBackPage"
import { EventPage } from "../screens/home/EventPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [],   
  },
  {
    path: "callback",
    element: <CallBackPage />,
  },
  {
    path: "event",
    element: <EventPage />,
  },
  {
    path: "/*",
    element: <HomePage />,
  },
]);

const AppRouter = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default AppRouter;
