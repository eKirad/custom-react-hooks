import { buildQuery } from '../helpers/queryBuilder'
import { QueryParams } from '../types'

const FetchDataService = {
    fetchAll: async (uri: string, queryParams: QueryParams) => {
        const queryParamsString = buildQuery(queryParams)
        const response = await fetch(`${uri}${queryParamsString}`)

        const { data } = await response.json()

        return data
    },
}

export default FetchDataService
