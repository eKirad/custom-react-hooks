import { useEffect, useState } from 'react'

export const useFetchOne = (baseUrl, model, id) => {
    const [dataItem, setDataItem] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [idParam, setIdParam] = useState(id)
    const [shouldDataItem, setShouldFetchDataItem] = useState(false)

    useEffect(() => {
        const fetchDataItem = async () => {
            setIsLoading(true)
            setIsError(false)
            try {
                const response = await fetch(`${baseUrl}/${model}/${idParam}`)
                const result = await response.json()
                setDataItem(result)
            } catch (error) {
                setIsError(true)
                console.error(error)
            }

            setIsLoading(false)
            setShouldFetchGame(false)
        }

        fetchDataItem()
    }, [idParam, shouldDataItem])

    return [
        { dataItem, isLoading, isError },
        { setIdParam, setShouldFetchDataItem },
    ]
}
