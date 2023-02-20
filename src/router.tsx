import { createBrowserRouter } from "react-router-dom";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyProfilePage from "./pages/CompanyProfilePage";
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
    },
    {
        path:"/companies/:id",
        element: <CompanyProfilePage />
    }
]);

export default router;