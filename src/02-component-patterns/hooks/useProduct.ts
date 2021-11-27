import { useEffect, useRef, useState } from "react"
import { onChangeArgs, Product } from "../interfaces/interfaces"

interface useProductArgs {
  onChange?: (args: onChangeArgs) => void
  product: Product,
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(value)

  const isControlled = useRef<boolean>(Boolean(onChange))

  const increaseBy = (value: number): void => {
    if (isControlled.current)
      return onChange!({ count: value, product })

    setCounter(prev => Math.max(prev + value, 0))
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy
  }
}