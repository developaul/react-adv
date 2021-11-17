import { useContext, useMemo } from "react"

import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext)

  const imageToShow = useMemo(() => img || product.img || noImage, [img, product.img])

  return (
    <img className={styles.productImg} src={imageToShow} alt="Product img" />
  )
}
