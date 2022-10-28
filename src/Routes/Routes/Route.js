import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../Pages/Category/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/LiginSignUp/Login";
import SignUp from "../../Pages/LiginSignUp/SignUp";
import Products from "../../Pages/Products/Products";

const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: [
            { path: '/', element: <Home /> },
            { path: '/', element: <Products /> },
            { path: '/signin', element: <SignUp /> },
            { path: '/signup', element: <SignUp /> },
        ]
    }
])

export default router;