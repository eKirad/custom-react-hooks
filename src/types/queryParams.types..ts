enum SortOrderEnum {
    ASC = `asc`,
    DESC = `desc`,
}

type Sort = {
    sortOrder: SortOrderEnum
    sortField: string
}

export type QueryParams = {
    limit: number
    page?: number
    sort?: Sort
}

export const defaultQueryParams: QueryParams = {
    limit: 100,
}
