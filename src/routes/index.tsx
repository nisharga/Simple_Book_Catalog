import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Allbooks from "../Pages/Allbooks/Allbooks";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Signup/Singup";
 
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/allbooks",
          element: <Allbooks/>,
        },{
          path: "/login",
          element: <Login/>,
        },{
          path: "/signup",
          element: <Singup/>,
        },
      ],
    },
  ]);


export default router;