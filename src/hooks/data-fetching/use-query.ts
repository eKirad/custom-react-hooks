import { useState, useEffect } from 'react'

export type UseQueryType<T> = {
    initialData: T
    queryKey: Array<string>
    queryFn: () => Promise<T>
}

export const useQuery = <T>({ initialData, queryKey, queryFn }: UseQueryType<T>) => {
    const [data, setData] = useState<T>(initialData)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        let ignoreFetch = false

        const fetchData = async () => {
            setIsLoading(true)
            try {
                const responseData = await queryFn()
                setData(responseData)
                setIsError(false)
            } catch (error) {
                console.error(error)
                setIsError(true)
            }

            setIsLoading(false)
        }

        fetchData()

        return () => {
            ignoreFetch = true
        }
    }, [...queryKey])

    return [{ data, isLoading, isError }]
}
