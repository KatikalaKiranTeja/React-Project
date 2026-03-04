import React from 'react'
import { booksData } from '../data/books'
import CategoryPage from '../components/CategoryPage'

function BooksPage() {
  return <CategoryPage data={booksData} basePath="/books" />
}

export default BooksPage
