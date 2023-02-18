import { createBrowserRouter } from "react-router-dom";
import CompaniesPage from "./pages/CompaniesPage";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/jobs",
        element: <JobsPage />
    },
    {
        path: "/companies",
        element: <CompaniesPage />
    }
]);

export default router;