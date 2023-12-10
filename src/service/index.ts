import { buildQueryParamsString } from '../helpers/queryBuilder'
import { FetchDataServiceInterface, QueryParams } from '../types'

const FetchDataService: FetchDataServiceInterface = {
    fetchAll: async <T>(uri: string, queryParams: QueryParams): Promise<Array<T>> => {
        const queryParamsString = buildQueryParamsString(queryParams)
        const response = await fetch(`${uri}${queryParamsString}`)

        const { data } = await response.json()

        return data as Array<T>
    },
    fetchOne: async <T>(uri: string, id: string): Promise<T> => {
        const response = await fetch(`${uri}/${id}`)

        const { data } = await response.json()

        return data as T
    },
}

export default FetchDataService
