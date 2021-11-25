import { useState } from "react"
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from "../components"

import { onChangeArgs, Product } from "../interfaces/interfaces"
import '../styles/custom-styles.css'

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2]

interface ProductInCart extends Product {
  count: number
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

  const onProductCountChange = ({ count, product }: onChangeArgs): void => {
    setShoppingCart(prev => ({
      ...prev,
      [product.id]: { ...product, count }
    }))
    console.log("🚀 ~ onProductCountChange ~ count, product", { count, product })
  }

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
        <ProductCard
          className='bg-dark text-white'
          style={{
            width: '100px'
          }}
          product={product2}
        >
          <ProductImage
            className='custom-image'
          />
          <ProductButtons
            className='custom-buttons'
          />
        </ProductCard>
        <ProductCard
          className='bg-dark text-white'
          style={{
            width: '100px'
          }}
          product={product1}
        >
          <ProductImage
            className='custom-image'
          />
          <ProductButtons
            className='custom-buttons'
          />
        </ProductCard>
      </div>
    </div>
  )
}
