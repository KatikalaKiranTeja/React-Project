import React from 'react'
import { booksData } from '../data/books'
function Books() {
   const firstFiveImages = booksData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
      <h2>Books</h2>
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

export default Books
