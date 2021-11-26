import { useEffect, useState } from "react"
import { onChangeArgs, Product } from "../interfaces/interfaces"

interface useProductArgs {
  onChange?: (args: onChangeArgs) => void
  product: Product,
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
  console.log("🚀 ~ useProduct ~ value", { value })

  const [counter, setCounter] = useState<number>(value)

  const increaseBy = (value: number): void => {
    const count = Math.max(counter + value, 0)

    setCounter(count)

    onChange && onChange({ count, product })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy
  }
}