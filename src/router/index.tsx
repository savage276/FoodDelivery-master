import Home from '../pages/Home/Home.tsx'
import Login from "../pages/Login/Login.tsx";
import { createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/home",
        element: <Home />
    }
])

export default router;