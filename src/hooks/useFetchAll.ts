import { useEffect, useState } from 'react'
import { QueryParams } from '../types'
import FetchDataService from '../service'
import { defaultQueryParams } from '../types/queryParams/queryParams'

export const useFetchAll = <T>(uri: string, queryParams: QueryParams = defaultQueryParams, initialData: Array<T> = []) => {
    const [data, setData] = useState<Array<T>>(initialData)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [queryParameters, setQueryParameters] = useState<QueryParams>(queryParams)
    const [shouldFetchData, setShouldFetchData] = useState(false)

    useEffect(() => {
        const fetchDataAll = async () => {
            setIsLoading(true)
            setIsError(false)
            try {
                const responseData = await FetchDataService.fetchAll<T>(uri, queryParams)
                setData(responseData)
            } catch (error) {
                setIsError(true)
                console.error(error)
            }

            setIsLoading(false)
            setShouldFetchData(false)
        }

        fetchDataAll()
    }, [queryParameters, shouldFetchData])

    return [
        { data, isLoading, isError },
        { setQueryParameters, setShouldFetchData },
    ] as const
}
