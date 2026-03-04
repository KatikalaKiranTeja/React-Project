import React from 'react'
import {menData} from '../data/men'
function Men() {
    const firstFiveImages = menData.slice(0,5)
  return (
    <>
       <div className="proTitle">
         <h2>Men</h2>
        <div className='prosection'>
            {
                firstFiveImages.map((item)=>{
                    return(
                        <div className='imgBox' key={item.id}>
                            <img className='proImage' src={item.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
       </div>
    </>
  )
}

export default Men
