import React from 'react'
import {tvData} from '../data/tv'
function Tv() {
    const firstFiveImages = tvData.slice(0,5)
  return (
    <>
      <div className="proTitle">
        <h2>Tv's</h2>
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

export default Tv
