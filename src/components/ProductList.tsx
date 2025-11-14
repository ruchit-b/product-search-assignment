import type { Product } from "../hooks/useProducts";
import ProductItem from "./ProductItem";

function ProductList({ products, loading }: { products: Product[]; loading: boolean }) {
  return (
    <div className='product-list'>
      {loading ? (
        <div>Loading...</div>
      ) : products.length > 0 ? (
        products.map((product) => <ProductItem key={product.id} product={product} />)
      ) : (
        <div className='no-products-found'>No products found</div>
      )}
    </div>
  )
}

export default ProductList