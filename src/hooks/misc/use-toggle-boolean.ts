import { useState } from 'react'

export const useToggleBoolean = (initialValue: boolean = false) => {
    const [booleanValue, setBooleanValue] = useState(initialValue)

    const toggleBoolValue = () => setBooleanValue((prevBooleanValue) => !prevBooleanValue)

    return [booleanValue, toggleBoolValue] as const
}
