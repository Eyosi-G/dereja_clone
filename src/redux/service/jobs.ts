import { FilterName, IFilterStateType } from "../../pages/JobsPage";
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

export interface IFilter {
    filters: {
        [id: string]: {
            name: string;
            count: number;
            id: number;
        }
    }
}
export interface ISearchJobResponse {
    data: {
        filters: {
            types: IFilter
            career_level: IFilter
            categories: IFilter
            company: IFilter
            industry_sector: IFilter,
            state: IFilter
        },
        items: {
            id: number;
            name: string;
            city: string;
            company: {
                name: string;
            },
            description: string;
            salary: string;
            slug: string;
            cover: string;
            requirements?: string
            deadline: string;
            categories: ICategory[];
            published_at: string;

        }[]
    }
}

export interface ISearchJobRequest {
    search: string;
    page: number;
    limit: number;
    filter: IFilterStateType;
}

const jobService = api.injectEndpoints({
    endpoints(build) {
        return {
            getLatestJobs: build.query<IJobsResponse, void>({
                query: () => ({
                    url: "latestJobs",
                })
            }),
            searchJobs: build.query<ISearchJobResponse, ISearchJobRequest>({
                query: (data) => {
                    let filterQuery = "";
                    let filter: { [name: string]: number[] } = {}
                    Object.keys(data.filter).forEach((key) => {
                        const value = data.filter[(key as FilterName)];
                        if (value.length > 0) {
                            filter[key] = value
                        }
                    })
                    if (Object.keys(filter).length > 0) {
                        filterQuery = `&filters=${JSON.stringify(filter)}`
                    }
                    return {
                        url: `job?search=${data.search}&page=${data.page}&per_page=${data.limit}${filterQuery}`
                    }
                }
            })
        }
    },
})

export const { useGetLatestJobsQuery, useSearchJobsQuery } = jobService;