import { useState } from "react"
import { onChangeArgs, Product } from "../interfaces/interfaces"

interface useProductArgs {
  onChange?: (args: onChangeArgs) => void
  product: Product
}

export const useProduct = ({ onChange, product }: useProductArgs) => {

  const [counter, setCounter] = useState<number>(0)

  const increaseBy = (value: number): void => {
    const count = Math.max(counter + value, 0)

    setCounter(count)

    onChange && onChange({ count, product })
  }

  return {
    counter,
    increaseBy
  }
}