import React from "react";
import First from "./componets/First";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Admin from "./componets/Admin";
import User from "./componets/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <First />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
