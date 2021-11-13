import { createContext, ReactElement, useContext, useMemo } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Props {
  product: Product,
  children?: ReactElement | ReactElement[]
}

interface Product {
  id: string
  title: string
  img?: string
}

interface ProductContextProps {
  increaseBy: (value: number) => void,
  counter: number,
  product: Product
}

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext)

  const imageToShow = useMemo(() => img || product.img || noImage, [img, product.img])

  return (
    <img className={styles.productImg} src={imageToShow} alt="Product img" />
  )
}

export const ProductTitle = ({ title = '' }) => {
  const { product } = useContext(ProductContext)

  const titleToShow = useMemo(() => title || product.title, [product.title, title])

  return (
    <span className={styles.productDescription} > {titleToShow}</span>
  )
}


export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext)

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}> +</button>
    </div>
  )
}

export const ProductCard = ({ product, children }: Props) => {
  const { increaseBy, counter } = useProduct()

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product
      }}
    >
      <div className={styles.productCard}>
        {children}
      </div >
    </Provider>
  )
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons