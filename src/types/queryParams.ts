enum SearchCriteriaEnum {
    NOT_SELECTED = ``,
}

enum SortOrderEnum {
    ASC = `asc`,
    DESC = `desc`,
}

export type QueryParams = {
    limit: number
    page: number
    search: string
    // TODO: Fix
    searchCriteria?: SearchCriteriaEnum
    sortField?: string
    sortOrder?: SortOrderEnum
    criteria?: string
}
