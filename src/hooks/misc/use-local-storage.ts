import { useEffect, useState } from 'react'
import { LOCAL_STORAGE_FALLBACK_VALUE } from '../../consts'

export const useLocalStorage = (key: string) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key) ?? LOCAL_STORAGE_FALLBACK_VALUE))

    useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value])

    return [value, setValue]
}
