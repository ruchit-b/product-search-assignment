import type { Product } from "../hooks/useProducts"

function ProductItem({ product }: { product: Product }) {
  return (
    <div className='product-item'>
      <img
        className='product-item-image'
        src={product.image}
        width={100}
        height={100}
        alt={product.title}
      />
      <div className='product-item-title'>{product.title.slice(0, 25)}...</div>
      <div className='product-item-description'>{product.description.slice(0, 25)}...</div>
      <div className='product-item-description'>{product.category}...</div>
      <div className='product-item-price'>Rs {product.price}</div>
    </div>
  )
}

export default ProductItem