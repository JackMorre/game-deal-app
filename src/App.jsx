import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

import Main, {
  loader as quickSearchLoader,
} from "./features/quick-search/Main";
import Deal from "./features/deal/Deal";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/quick-search/:title",
        element: <Main />,
        errorElement: <Error />,
        loader: quickSearchLoader,
      },
      {
        path: "/search/:searchParams",
        element: <Main />,
        errorElement: <Error />,
      },
      {
        path: "/deals/:id",
        element: <Deal />,
        errorElement: <Error />,
      },
      {
        path: "/history",
        element: <Main />,
      },
      {
        path: "/watchlist",
        element: <Main />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
