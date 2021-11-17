import { useContext, useMemo } from "react"

import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'

export const ProductTitle = ({ title = '' }) => {
  const { product } = useContext(ProductContext)

  const titleToShow = useMemo(() => title || product.title, [product.title, title])

  return (
    <span className={styles.productDescription} > {titleToShow}</span>
  )
}