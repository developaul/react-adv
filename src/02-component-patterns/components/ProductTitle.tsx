import { CSSProperties, useContext, useMemo } from "react"

import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'

export interface Props {
  title?: string
  className?: string,
  style?: CSSProperties
}

export const ProductTitle = ({
  className,
  title,
  style
}: Props) => {
  const { product } = useContext(ProductContext)

  const titleToShow = useMemo(() => title || product.title, [product.title, title])

  return (
    <span
      style={style}
      className={`${styles.productDescription} ${className}`}
    > {titleToShow}</span>
  )
}