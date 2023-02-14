import { api } from "./api";
import { ICategory } from "./category";

export interface IJob {
    id: number;
    name: string;
    description: string;
    company_name: string;
    salary: string;
    slug: string;
    cover: string;
    requirements?: string
    deadline: string;
    categories: ICategory[];
    published_at: string;
}

export interface IJobsResponse {
    success: boolean;
    data: IJob[];
}

const jobService = api.injectEndpoints({
    endpoints(build) {
        return {
            getLatestJobs: build.query<IJobsResponse, void>({
                query: () => ({
                    url: "latestJobs",
                })
            })
        }
    },
})

export const { useGetLatestJobsQuery } = jobService;