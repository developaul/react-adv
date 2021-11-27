import { useState } from "react"

import { onChangeArgs, ProductInCart } from "../interfaces/interfaces"

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

  const onProductCountChange = ({ count, product }: onChangeArgs): void => {

    setShoppingCart(oldShoppingCart => {

      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count

        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      }

      const { [product.id]: currentProduct, ...restProducts } = oldShoppingCart
      return restProducts
    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}