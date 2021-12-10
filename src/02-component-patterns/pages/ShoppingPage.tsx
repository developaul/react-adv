import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from "../components"

import { products } from "../data/products"
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {

  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        initialValues={{
          count: 6
        }}
        product={product}
      >
        {({ reset, count, increaseBy, isMaxCountReached }) => {
          return (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }}
      </ProductCard>
    </div>
  )
}
