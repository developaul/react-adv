import { CSSProperties, useContext, useMemo } from "react"

import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export interface Props {
  className?: string
  img?: string
  style?: CSSProperties
}

export const ProductImage = ({
  className,
  style,
  img
}: Props) => {
  const { product } = useContext(ProductContext)

  const imageToShow = useMemo(() => img || product.img || noImage, [img, product.img])

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={imageToShow}
      alt="Product img" />
  )
}
