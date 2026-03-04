import React from 'react'
import {fridgeData} from '../data/fridge'
function Fridge() {
   const firstFiveImages  = fridgeData.slice(0,5)
  return (
    <>
      <div className="proTitle">
        <h2>Fridges</h2>
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

export default Fridge
