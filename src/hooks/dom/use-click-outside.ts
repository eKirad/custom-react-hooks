import { useEffect, useRef } from 'react'
import { HTMLRefType } from '../../types'

type Args = {
    callback: () => void
}

export const useClickOutside = ({ callback }: Args) => {
    const ref = useRef<HTMLRefType | null>(null)

    useEffect(() => {
        const handleClick = (event: Event) => {
            const isOutsideClick = !ref?.current?.contains(event.target as Node)
            if (isOutsideClick) callback()
        }

        document.addEventListener('click', handleClick, true)

        return () => document.removeEventListener('click', handleClick, true)
    }, [callback])

    return ref
}
