import React from "react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

interface useSliderItemSettings {
    interval?: number
    timeout?: number
}

type NextFN = () => void
type PrevFN = () => void
type ToFN = (index: number) => void
type Index = number
type ReturnValue<T> = [T, NextFN, PrevFN, ToFN, Index]

const useSliderItem = <T>(
    items: Array<T>,
    settings?: useSliderItemSettings
): ReturnValue<T> => {
    const [index, setIndex] = useState(0)
    const item = useMemo(() => items[index], [items, index])
    const intervalId = useRef<NodeJS.Timeout>()
    const timeoutId = useRef<NodeJS.Timeout>()
    const timeoutEnd = useRef(true)

    const next = useCallback(() => {
        if (timeoutEnd.current) {
            setIndex((index) => (index + 1) % items.length)
        }
    }, [items])

    const prev = useCallback(() => {
        if (timeoutEnd.current) {
            setIndex((index) => (index > 0 ? index - 1 : items.length - 1))
        }
    }, [items])

    const to = useCallback((index) => {
        if (timeoutEnd.current) {
            setIndex(index)
        }
    }, [])

    useEffect(() => {
        if (settings?.timeout) {
            if (timeoutEnd.current) {
                timeoutEnd.current = false
                setTimeout(() => (timeoutEnd.current = true), settings.timeout)
            }
        }
        return timeoutId.current && clearTimeout(timeoutId.current)
    }, [index])

    useEffect(() => {
        if (settings?.interval) {
            intervalId.current = setInterval(next, settings?.interval)
        }
        return () => intervalId.current && clearInterval(intervalId.current)
    }, [index])

    return [item, next, prev, to, index]
}

export default useSliderItem
