import React from 'react'
import {mobileData} from  '../data/mobiles'
function Mobiles() {

    const firstFiveImages = mobileData.slice(0,5)
  return (
    <>
        <div className="proTitle">
              <h2>Mobiles</h2>
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

export default Mobiles;
