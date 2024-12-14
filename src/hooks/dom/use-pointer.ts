import { useEffect, useState } from 'react'

export const usePointer = (initialPointerPosition: { positionX: number; positionY: number }) => {
    const [pointerPosition, setPointerPosition] = useState({ x: initialPointerPosition.positionX, y: initialPointerPosition.positionY })

    useEffect(() => {
        const handleMovePointer = (event: PointerEvent) => setPointerPosition({ x: event.clientX, y: event.clientY })

        window.addEventListener('pointermove', handleMovePointer)

        return () => window.removeEventListener('pointermove', handleMovePointer)
    }, [])

    return pointerPosition
}
