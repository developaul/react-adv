import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  increaseBy: (value: number) => void,
  counter: number,
  product: Product
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element,
  Title: (props: ProductTitleProps) => JSX.Element,
  Image: (props: ProductImageProps) => JSX.Element,
  Buttons: (props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
  product: Product
  count: number
}