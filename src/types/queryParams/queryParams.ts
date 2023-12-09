import { Sort } from './sort'

export type QueryParams = {
    limit: number
    page?: number
    sort?: Sort
}

export const defaultQueryParams: QueryParams = {
    limit: 100,
}
