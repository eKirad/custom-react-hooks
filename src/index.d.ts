declare module 'use-fetch-all' {
    const useFetchAll: <T>(
        endpointUrl: string,
        initialData?: T[]
    ) => [
        {
            data?: T[]
            isLoading: boolean
            isError: boolean
        },
        {
            setQueryParams: () => Promise<void>
            setShouldFetchData: () => Promise<void>
        }
    ]

    export default useFetchAll
}
