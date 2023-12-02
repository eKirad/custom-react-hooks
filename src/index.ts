import { useEffect, useState } from 'react'
import { EndpointUrl, QueryParams } from './types'

export const useFetchAll = <T>({ baseUrl, resourcePath, queryParams }: EndpointUrl, initialData: Array<T> = []) => {
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
                const { limit, page, search, criteria, sortField, sortOrder } = queryParams
                const response = await fetch(`${baseUrl}/${resourcePath}?limit=${limit}&page=${page}&search=${search}&criteria=${criteria}&sort=${sortField}&order=${sortOrder}`)
                const { data } = await response.json()

                setData(data)
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
    ]
}
