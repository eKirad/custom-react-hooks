import { useEffect, useRef } from 'react'

type Args<T> = {
    dependencies: Array<T>
    callback: () => void
}

export const useEffectUpdate = <T>({ dependencies, callback }: Args<T>) => {
    const isInitialRender = useRef(true)

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false

            return
        }

        callback()
    }, [...dependencies])
}
