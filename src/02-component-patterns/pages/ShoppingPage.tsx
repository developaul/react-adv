import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from "../components"

import { useShoppingCart } from "../hooks/useShoppingCart"
import { products } from "../data/products"
import '../styles/custom-styles.css'

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            className='bg-dark text-white'
            product={product}
            value={shoppingCart[product.id]?.count || 0}
            onChange={onProductCountChange}
          >
            <ProductImage
              className='custom-image'
            />
            <ProductTitle
              className='text-white'
            />
            <ProductButtons
              className='custom-buttons'
            />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.values(shoppingCart).map((product) => (
          <ProductCard
            key={product.id}
            className='bg-dark text-white'
            onChange={onProductCountChange}
            value={product.count}
            style={{
              width: '100px'
            }}
            product={product}
          >
            <ProductImage
              className='custom-image'
            />
            <ProductButtons
              className='custom-buttons'
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            />
          </ProductCard>
        ))}
      </div>

      <div>
        <code>
          <pre>
            {JSON.stringify(shoppingCart, null, 5)}
          </pre>
        </code>
      </div>
    </div>
  )
}
