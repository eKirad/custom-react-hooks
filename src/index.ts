import { useEffect, useState } from 'react'
import { EndpointUrl, QueryParams } from './types'

export const useFetchAll = (endpointUrl: EndpointUrl, initialData: Array<any> = []) => {
    const [data, setData] = useState<any[]>(initialData)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [queryParams, setQueryParams] = useState<QueryParams>(endpointUrl.queryParams)
    const [shouldFetchData, setShouldFetchData] = useState(false)

    useEffect(() => {
        const fetchDataAll = async () => {
            setIsLoading(true)
            setIsError(false)
            try {
                const { limit, page, search, criteria, sortField, sortOrder } = endpointUrl.queryParams
                const response = await fetch(
                    `${endpointUrl.baseUrl}/${endpointUrl.resourcePath}?limit=${limit}&page=${page}&search=${search}&criteria=${criteria}&sort=${sortField}&order=${sortOrder}`
                )
                const data = await response.json()

                setData(data)
            } catch (error) {
                setIsError(true)
                console.error(error)
            }

            setIsLoading(false)
            setShouldFetchData(false)
        }

        fetchDataAll()
    }, [queryParams, shouldFetchData])

    return [
        { data, isLoading, isError },
        { setQueryParams, setShouldFetchData },
    ]
}
