import { QueryParams } from '../types'

export const buildQueryParamsString = (queryParams: QueryParams): string => {
    let queryParamsString = ``

    if (queryParams.limit) {
        const querySign = determineExtraQueryParam(queryParamsString)
        queryParamsString += `${querySign}limit=${queryParams.limit}`
    }

    if (queryParams.sort) {
        const querySign = determineExtraQueryParam(queryParamsString)
        queryParamsString += `${querySign}sort=${queryParams.sort.sortField}&order=${queryParams.sort.sortOrder}`
    }

    return queryParamsString
}

const determineExtraQueryParam = (baseUri: string): string => (baseUri.includes(`?`) ? `&` : `?`)
