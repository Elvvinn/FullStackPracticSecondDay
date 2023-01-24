import { createBrowserRouter } from "react-router-dom";
import AddPage from "../Pages/AddPage/add";
import DetailPage from "../Pages/DetailPage/detail";
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
    {
        path: "/users/:_id",
        element: <DetailPage />,
    },
]);

export default router;