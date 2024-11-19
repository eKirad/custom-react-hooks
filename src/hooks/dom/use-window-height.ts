import { useState, useEffect } from 'react'

export const useWindowHeight = (initialWindowHeight: number = window.innerHeight) => {
    const [windowHeight, setWindowHeight] = useState(initialWindowHeight)

    useEffect(() => {
        const handleResize = () => setWindowHeight(window.innerHeight)
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [windowHeight])

    return windowHeight
}
