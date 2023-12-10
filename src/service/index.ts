import { buildQueryParamsString } from '../helpers/queryBuilder'
import { QueryParams } from '../types'

interface FetchDataServiceInterface {
    fetchAll<T>(uri: string, queryParams: QueryParams): Promise<Array<T>>
}

const FetchDataService: FetchDataServiceInterface = {
    fetchAll: async <T>(uri: string, queryParams: QueryParams): Promise<Array<T>> => {
        const queryParamsString = buildQueryParamsString(queryParams)
        const response = await fetch(`${uri}${queryParamsString}`)

        const { data } = await response.json()

        return data as Array<T>
    },
}

export default FetchDataService
