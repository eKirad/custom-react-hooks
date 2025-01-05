import { useEffect, useState } from 'react'

type DependenciesType = number | string

export const useAsyncEffect = <T>(asyncFn: () => Promise<T>, dependencies: Array<DependenciesType> = []) => {
    const [asyncFnResult, setAsyncFnResult] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        let ignoreExec = false
        const executeAsyncFn = async () => {
            try {
                setIsLoading(true)
                const result = await asyncFn()
                setAsyncFnResult(result)
            } catch (error) {
                setError(error)
                setAsyncFnResult(null)
            } finally {
                setIsLoading(false)
            }

            executeAsyncFn()

            return () => {
                ignoreExec = true
            }
        }
    }, [...dependencies])

    return { asyncFnResult, isLoading, error }
}
