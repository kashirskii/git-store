import { Dispatch, SetStateAction, useState } from "react"

export type UseSelectReturn<T> = {
    index: number
    setIndex: Dispatch<SetStateAction<number>>
    currentItem: T
}

export function useSelect<T>(array: Array<T>): UseSelectReturn<T>; 
export function useSelect<T>(array: Array<T>, currentIndex: number): UseSelectReturn<T>

export function useSelect<T>(array: Array<T>, currentIndex?: number): UseSelectReturn<T> {
    if (currentIndex === undefined) {
        currentIndex = 0;
    }

    const [index, setIndex] = useState(currentIndex)
    const currentItem = array[currentIndex]
    return { index, setIndex, currentItem }
}

