import React from 'react'
import {womanData} from '../data/woman'
function Women() {
    const firstFiveImages = womanData.slice(0,5)
  return (
    <>
     <div className="proTitle">
         <h2>Women</h2>
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

export default Women
