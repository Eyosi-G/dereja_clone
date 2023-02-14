export const baseUrl = "https://www.dereja.com/api/"
export const imageUrl = "https://dereja-filestorage-prod.s3.eu-central-1.amazonaws.com/public"
export interface IPagination {
    page?: number;
    limit?: number
}

export interface IError {
    data: {
        message: string;
    }
}