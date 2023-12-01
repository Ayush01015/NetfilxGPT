import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { 
    createBrowserRouter, 
    RouterProvider 
} from "react-router-dom";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

/*
    BG FOR NETFLIX

https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg
*/