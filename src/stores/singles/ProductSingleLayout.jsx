import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useCart } from '../context/CardContext'
import { getProductBrand, getProductId, getProductImage, getProductModel } from '../utils/productHelpers'

function ProductSingleLayout({ data }) {
  const { addToCart } = useCart()
  const { id } = useParams()

  const product = data.find((item, index) => getProductId(item, index) === String(id))

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="ind-section">
          <div className="ind-details">
            <div className="ind-model space">
              <h3>Product not found</h3>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-img">
          <img src={getProductImage(product)} alt={product.product || getProductModel(product)} />
        </div>
        <div className="ind-details">
          <div className="ind-company space">
            <h2>{getProductBrand(product)}</h2>
          </div>
          <div className="ind-model space">
            <h3>{getProductModel(product)}</h3>
          </div>
          <div className="ind-price space">
            <h2>${product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductSingleLayout
