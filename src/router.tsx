import { createBrowserRouter } from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import HomePage from "./pages/HomePage";
import JobDetailPage from "./pages/JobDetailPage";
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
        path: "/jobs/:slug",
        element: <JobDetailPage />
    },
    {
        path: "/companies",
        element: <CompaniesPage />
    },
    {
        path:"/companies/:id",
        element: <CompanyProfilePage />
    },
    {
        path:"/news",
        element: <ArticlesPage />
    }
]);

export default router;