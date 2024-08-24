import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/ui/layout/mainLayout/MainLayout";
import Home from "../pages/home/Home";

const Route = createBrowserRouter([
    {
        path: "/",
        errorElement: "page is not found",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default Route