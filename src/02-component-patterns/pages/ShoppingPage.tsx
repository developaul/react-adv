import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard"

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
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
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard
          product={product}
        >
          <ProductImage />
          <ProductTitle title={'hello'} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
