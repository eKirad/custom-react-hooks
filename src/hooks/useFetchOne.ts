import { useEffect, useState } from 'react'
import FetchDataService from '../service'

export const useFetchOne = <T>(uri: string, id: string, initialData: T = {} as T) => {
    const [data, setData] = useState<T>(initialData)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [shouldFetchData, setShouldFetchData] = useState(false)

    useEffect(() => {
        const fetchDataOne = async () => {
            setIsLoading(true)
            setIsError(false)
            try {
                const responseData = await FetchDataService.fetchOne<T>(uri, id)
                setData(responseData)
            } catch (error) {
                setIsError(true)
                console.error(error)
            }

            setIsLoading(false)
            setShouldFetchData(false)
        }

        fetchDataOne()
    }, [shouldFetchData])

    return [{ data, isLoading, isError }, { setShouldFetchData }] as const
}
