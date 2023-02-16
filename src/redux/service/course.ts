import { api } from "./api";

export interface ICourse {
    title: string;
    description: string;
    cover: string;
    published_at: string;
}

export interface ICoursesResponse {
    data: ICourse[]
}
const courseService = api.injectEndpoints({
    endpoints(build) {
        return {
            getCourses: build.query<ICoursesResponse, void>({
                query: () => ({
                    url: "course/main"
                })
            })
        }
    },
})

export const { useGetCoursesQuery } = courseService;