import { useEffect, useRef } from 'react'

type Args = {
    callback: () => void
}

export const useClickOutside = ({ callback }: Args) => {
    const ref = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const handleClick = (event: Event) => {
            const isOutsideClick = !ref?.current?.contains(event.target as Node)
            if (isOutsideClick) callback()
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [callback])

    return ref
}
