import { useRef } from 'react'
import { JSValueType } from '../../types'

export const usePreviousValue = (value: JSValueType) => {
    const currentRef = useRef(value)
    const previousRef = useRef<JSValueType>()

    const swapRefs = () => {
        previousRef.current = currentRef.current
        currentRef.current = value
    }

    if (previousRef.current !== value) swapRefs()

    return previousRef.current
}
