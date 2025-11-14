import type { Product } from '../hooks/useProducts'
import ProductItem from './ProductItem'

function ProductList({ products, loading }: { products: Product[]; loading: boolean }) {
  if (products.length === 0) {
    return <div className='no-products-found'>No products found</div>
  }
  return (
    <div className='product-list'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        products.map((product) => <ProductItem key={product.id} product={product} />)
      )}
    </div>
  )
}

export default ProductList
