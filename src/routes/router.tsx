import { createHashRouter } from "react-router-dom"
import { Home } from "../components/Home"
import { Survey } from "../components/Survey"

export const router = createHashRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/survey",
        element: <Survey />
    }
])