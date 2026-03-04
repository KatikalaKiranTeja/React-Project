import React from 'react'
import {computerData} from  '../data/computers'
function Computers() {

    const firstFiveImages = computerData.slice(0,5)
  return (
    <>
        <div className='proTitle'>
            <h2>Computers</h2>
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

export default Computers;
