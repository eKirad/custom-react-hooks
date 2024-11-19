import { useState, useEffect } from 'react'

export const useWindowWidth = (initialWindowWidth: number = window.innerWidth) => {
    const [windowWidth, setWindowWidth] = useState(initialWindowWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowWidth
}
