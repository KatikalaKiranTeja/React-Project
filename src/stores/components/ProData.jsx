import React from 'react'
import { mobileData } from '../data/proData'
import { getProductImage } from '../utils/productHelpers'

function ProData() {
    const firstFiveImages = mobileData.slice(0,5)
  return (
    <>
      <div className="proTitle">
        <h2>ProData</h2>
        <div className='prosection'>
            {
                firstFiveImages.map((item)=>{
                    return(
                        <div className='imgBox' key={`${item.company}-${item.model}`}>
                            <img className='proImage' src={getProductImage(item)} alt={item.model} />
                        </div>
                    )
                })
            }
        </div>
      </div>
    </>
  )
}

export default ProData
