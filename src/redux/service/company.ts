import { api } from "./api";

export interface ISector {
    id: number;
    name: string;
}

export interface IBrand {
    about: string;
    cover: string;
}

export interface ICompany {
    id: number;
    name: string;
    phone: string;
    location: string;
    logo: string;
    sector: ISector;
    brand: IBrand | null;
    created_at: string;
}

export interface IGetCompanyResponse {
    data: ICompany[],
    success: boolean;
    total: number;
}

const companiesService = api.injectEndpoints({
    endpoints(build) {
        return {
            getFeaturedCompanies: build.query<IGetCompanyResponse, void>({
                query: () => ({
                    url: "featuredCompanies"
                })
            }),
            getCompanies: build.query<IGetCompanyResponse, number>({
                query: (page)=>({
                    url: `companies?search=&page=${page}&per_page=9`
                })
            })
        }
    },
})


export const { useGetFeaturedCompaniesQuery, useGetCompaniesQuery } = companiesService;