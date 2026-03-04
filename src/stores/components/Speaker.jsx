import React from 'react'
import {speakerData} from '../data/speaker'
function Speaker() {
    const firstFiveImages = speakerData.slice(0,5)
  return (
    <>
        <div className="proTitle">
            <h2>Speakers</h2>
        <div className='prosection'>
            {
                firstFiveImages.map((item)=>{
                    return(
                        <div className='imgBox' key={`${item.brand}-${item.model}`}>
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

export default Speaker
