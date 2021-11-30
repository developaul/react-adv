import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  product: Product
  className?: string
  children?: ReactElement | ReactElement[]
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const ProductCard = ({ product, className, style, children, onChange, value, initialValues }: Props) => {
  const { increaseBy, counter } = useProduct({ onChange, product, value, initialValues })

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
        {children}
      </div >
    </Provider>
  )
}
