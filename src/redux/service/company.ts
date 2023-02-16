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
    brand: IBrand | null
}

export interface IGetCompanyResponse {
    data: ICompany[],
    success: boolean;
}
const companiesService = api.injectEndpoints({
    endpoints(build) {
        return {
            getFeaturedCompanies: build.query<IGetCompanyResponse, void>({
                query: () => ({
                    url: "featuredCompanies"
                })
            })
        }
    },
})


export const { useGetFeaturedCompaniesQuery } = companiesService;