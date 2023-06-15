declare module 'use-fetch-all' {
    const useDataApi: <T>(
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

    export default useDataApi
}
