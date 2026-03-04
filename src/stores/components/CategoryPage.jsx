import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { getProductBrand, getProductId, getProductImage, getProductModel } from '../utils/productHelpers'

function CategoryPage({ data, basePath }) {
  const [selectedBrands, setSelectedBrands] = useState([])

  const uniqueBrands = [...new Set(data.map((item) => getProductBrand(item)))]

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand))
      return
    }
    setSelectedBrands([...selectedBrands, brand])
  }

  const filteredData =
    selectedBrands.length === 0
      ? data
      : data.filter((item) => selectedBrands.includes(getProductBrand(item)))

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {uniqueBrands.map((brand) => (
            <div className="pro-input" key={brand}>
              <label>
                <input
                  className="company-checkbox"
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                {brand}
              </label>
            </div>
          ))}
        </div>
        <div className="pageSection">
          {filteredData.map((item, index) => {
            const productId = getProductId(item, index)

            return (
              <div key={`${basePath}-${productId}`}>
                <Link to={`${basePath}/${productId}`}>
                  <div className="pageImg">
                    <img src={getProductImage(item)} alt={item.product || item.model || item.title || 'Product'} />
                  </div>
                </Link>
                <div className="proModel">
                  {getProductBrand(item)}, {getProductModel(item)}
                </div>
                <div className="proPrice">${item.price}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CategoryPage
