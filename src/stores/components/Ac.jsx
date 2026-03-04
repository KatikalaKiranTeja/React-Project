import React from 'react'
import { acData } from '../data/ac'

function Ac() {
   const firstFiveImages = acData.slice(0,5)
  return (
    <>
        <div className='proTitle'>
        <h2>Ac</h2>
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

export default Ac
