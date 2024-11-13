import { useState, useEffect } from 'react'
import { UseQueryArgs } from '../../types/useQueryArgs.types'

export const useQuery = <T>({ initialData, queryKey, queryFn }: UseQueryArgs<T>) => {
    const [data, setData] = useState<T>(initialData)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
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
    }, [...queryKey])

    return [{ data, isLoading, isError }]
}
