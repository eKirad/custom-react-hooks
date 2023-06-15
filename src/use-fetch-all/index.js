import { useEffect, useState } from 'react'
import DataService from '../service'

export const useFetchAll = (endpointUrl, initialData = []) => {
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [queryParams, setQueryParams] = useState(endpointUrl.queryParams)
    const [shouldFetchData, setShouldFetchData] = useState(false)

    useEffect(() => {
        const fetchDataAll = async () => {
            setIsLoading(true)
            setIsError(false)
            try {
                const data = await DataService.getAll(endpointUrl)
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
