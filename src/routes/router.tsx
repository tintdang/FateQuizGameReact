import { createHashRouter } from "react-router-dom"
import { Home } from "../components/Home"

export const router = createHashRouter([
    {
        path: "/",
        element: <Home />
    }
])