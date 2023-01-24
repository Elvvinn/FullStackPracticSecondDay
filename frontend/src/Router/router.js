import { createBrowserRouter } from "react-router-dom";
import AddPage from "../Pages/AddPage/add";
import HomePage from "../Pages/HomePage/home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/add",
        element: <AddPage />,
    },
]);

export default router;