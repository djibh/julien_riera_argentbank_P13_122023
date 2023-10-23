import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import Homepage from "../pages/homepage/Homepage";

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: "<div>Something wrong happened</div>",
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);
