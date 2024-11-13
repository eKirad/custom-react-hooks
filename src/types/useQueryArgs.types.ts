export type UseQueryArgs<T> = {
    initialData: T
    queryKey: Array<string>
    queryFn: () => Promise<T>
}
