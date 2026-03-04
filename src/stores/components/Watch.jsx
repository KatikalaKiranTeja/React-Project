import React from 'react'
import {watchData} from '../data/watch'
function Watch() {
    const firstFiveImages = watchData.slice(0,5)
  return (
    <>
     <div className="proTitle">
         <h2>Watch</h2>
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

export default Watch
