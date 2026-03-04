import React from 'react'
import { booksData } from '../data/books'
import ProductSingleLayout from './ProductSingleLayout'

function BooksSingle() {
  return <ProductSingleLayout data={booksData} />
}

export default BooksSingle
