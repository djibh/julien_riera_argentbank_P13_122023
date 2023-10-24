import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import Homepage from "../pages/homepage/Homepage";
import Signin from "../pages/signin/Signin";
import Accounts from "../pages/accounts/Accounts";

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: "<div>Something wrong happened</div>",
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/accounts",
        element: <Accounts />,
      },
    ],
  },
]);
