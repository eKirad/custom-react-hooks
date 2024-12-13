import { useEffect, useState } from 'react'

export const usePointer = () => {
    const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMovePointer = (event: PointerEvent) => setPointerPosition({ x: event.clientX, y: event.clientY })

        window.addEventListener('pointermove', handleMovePointer)

        return () => window.removeEventListener('pointermove', handleMovePointer)
    }, [])

    return pointerPosition
}
