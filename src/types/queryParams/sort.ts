enum SortOrderEnum {
    ASC = `asc`,
    DESC = `desc`,
}

export type Sort = {
    sortOrder: SortOrderEnum
    sortField: string
}
