import { useEffect, useState } from 'react'

export const useScrollPosition = (initialScrollPosition: number = window.scrollY) => {
    const [scrollPosition, setScrollPosition] = useState(initialScrollPosition)

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY)
        document.addEventListener('scroll', handleScroll)

        return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    return scrollPosition
}
