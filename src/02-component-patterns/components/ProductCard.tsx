import { createContext, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  product: Product
  className?: string
  children: (args: ProductCardHandlers) => JSX.Element
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const ProductCard = ({ product, className, style, children, onChange, value, initialValues }: Props) => {
  const {
    increaseBy,
    counter,
    maxCount,
    reset,
    isMaxCountReached
  } = useProduct({ onChange, product, value, initialValues })

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product
      }}
    >
      <div
        style={style}
        className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          increaseBy,
          isMaxCountReached,
          product,
          maxCount,
          reset
        })}
      </div >
    </Provider>
  )
}
