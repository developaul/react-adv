import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from "../components"

import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard
          product={product}
        >
          <ProductCard.Image />
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          className='bg-dark text-white'
          product={product}
        >
          <ProductImage
            className='custom-image'
          />
          <ProductTitle
            className='text-white'
            title='hello' />
          <ProductButtons
            className='custom-buttons'
          />
        </ProductCard>

        <ProductCard
          style={{ backgroundColor: '#70d1f8' }}
          product={product}
        >
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  )
}
