import { useState } from "react"

export type UseSelectReturn<T> = {
    currentIndex: number
    currentItem: T
    set: (index: number) => void
    increment: () => void
    decrement: () => void
}

export function useSelect<T>(array: Array<T>): UseSelectReturn<T>; 
export function useSelect<T>(array: Array<T>, currentIndex: number): UseSelectReturn<T>

export function useSelect<T>(array: Array<T>, index?: number): UseSelectReturn<T> {
    if (index === undefined) {
        index = 0;
    }

    const [currentIndex, setCurrentIndex] = useState(index)

    const set = (index: number) => {
        if (array[index] !== undefined) {
            setCurrentIndex(index)
        }
    }

    const increment = () => {
        if (array[currentIndex + 1] !== undefined) {
            setCurrentIndex(currentIndex + 1)
        }
    } 

    const decrement = () => {
        if (array[currentIndex - 1] !== undefined) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const currentItem = array[currentIndex]
    return { currentIndex, set, increment, decrement, currentItem }
}

