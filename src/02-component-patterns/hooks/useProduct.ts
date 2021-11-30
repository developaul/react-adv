import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces"

interface useProductArgs {
  onChange?: (args: onChangeArgs) => void
  product: Product,
  value?: number,
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)

  const isControlled = useRef<boolean>(Boolean(onChange))
  const isMounted = useRef<boolean>(false)

  const increaseBy = (value: number): void => {
    if (isControlled.current)
      return onChange!({ count: value, product })

    setCounter(prev =>
      Math.min(Math.max(prev + value, 0), initialValues?.maxCount || Infinity)
    )
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if (!isMounted.current) return

    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    increaseBy,
    reset,
    isMaxCountReached: !!initialValues?.maxCount && counter >= initialValues.maxCount,
    maxCount: initialValues?.maxCount
  }
}