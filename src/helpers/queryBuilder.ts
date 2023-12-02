import { QueryParams } from '../types'

// TODO: Improve
export const buildQuery = (baseUri: string, queryParams: QueryParams): string => {
    if (queryParams.limit && queryParams.page) baseUri += `?limit=${queryParams.limit}&page=${queryParams.page}`
    if (queryParams.search) {
        const sign = determineSign(baseUri, `limit`)
        baseUri += `${sign}search=${queryParams.search}`
    }
    if (queryParams.sortField && queryParams.sortOrder) baseUri += `&sort=${queryParams.sortField}&order=${queryParams.sortOrder}`

    return baseUri
}

const determineSign = (baseUri: string, field: string): string => (baseUri.includes(field) ? `&` : `?`)
