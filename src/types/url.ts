import { QueryParams } from '.'

export type EndpointUrl = {
    queryParams: QueryParams
    baseUrl: string
    resourcePath: string
}
