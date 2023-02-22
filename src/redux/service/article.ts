import { api } from "./api";
import { ICategory } from "./category";

export interface IArticleCategory {
    id: number;
    name: string;
    articles_count: number;
}

export interface ITag {
    id: number;
    name: string;
}

export interface IArticle {
    id: number;
    cover: string;
    published_at: string;
    short_description: string;
    name: string;
    tags: ITag[]
    categories: IArticleCategory[]
}

export interface IGetArticlesCategoriesResponse {
    data: {
        categories: IArticleCategory[]
    }
}

export interface IGetArticlesResponse {
    data: IArticle[]
}

const articleService = api.injectEndpoints({
    endpoints(build) {
        return {
            getArticleCategory: build.query<IGetArticlesCategoriesResponse, void>({
                query: () => ({
                    url: "article_category"
                })
            }),
            getArticles: build.query<IGetArticlesResponse, number[]>({
                query: (filters) => {
                    return {
                        "url": `article?${filters.map(filter => `categories[]=${filter}`).join("&")}`
                    }
                }
            })
        }
    },
})


export const { useGetArticleCategoryQuery, useGetArticlesQuery } = articleService;