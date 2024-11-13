import { QueryParams } from '.'

export interface FetchDataServiceInterface {
    fetchAll<T>(uri: string, queryParams: QueryParams): Promise<Array<T>>
    fetchOne<T>(uri: string, id: string): Promise<T>
}
