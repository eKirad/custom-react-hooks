import { useEffect, useState } from 'react'

export const useLocalStorage = (key: string) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key) ?? ''))

    useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value])

    return [value, setValue]
}
