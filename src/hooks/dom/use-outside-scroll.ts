import { useEffect, useRef } from 'react'

type Args = {
    callback: () => void
}

export const useClickOutside = ({ callback }: Args) => {
    const ref = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const handleClick = (event: Event) => {
            const isNotWithinRef = !ref.current?.contains(event.target as Node)
            if (isNotWithinRef) callback()
        }

        window.addEventListener('click', handleClick)

        return () => window.removeEventListener('click', handleClick)
    }, [callback])

    return ref
}
