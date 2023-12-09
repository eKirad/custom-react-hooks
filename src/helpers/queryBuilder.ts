import { QueryParams } from '../types'

export const buildQuery = (queryParams: QueryParams): string => {
    let queryParamsString = ``

    if (queryParams.limit) {
        const querySign = determineSign(queryParamsString)
        queryParamsString += `${querySign}limit=${queryParams.limit}`
    }

    // TODO: Check page

    if (queryParams.sort) {
        const querySign = determineSign(queryParamsString)
        queryParamsString += `${querySign}sort=${queryParams.sort.sortField}&order=${queryParams.sort.sortOrder}`
    }

    return queryParamsString
}

const determineSign = (baseUri: string): string => (baseUri.includes(`?`) ? `&` : `?`)
