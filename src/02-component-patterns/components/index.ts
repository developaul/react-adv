import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

import { ProductCardHOCProps } from "../interfaces/interfaces";

const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})

export {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle
}

export default ProductCard