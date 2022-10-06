import { useRoutes } from "react-router-dom";
// pages
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function Router(){
    const element = useRoutes([
        {
            path: "/",   
            element: <HomePage/>
        },
        {
            path: "contacto",
            element: <ContactPage/>
        },
        {
            path: "*",
            element: <NotFoundPage/>
        }
    ]);
    return element;
}

