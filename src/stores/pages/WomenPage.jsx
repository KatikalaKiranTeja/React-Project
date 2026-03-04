import React from 'react'
import { womanData } from '../data/woman'
import CategoryPage from '../components/CategoryPage'

function WomenPage() {
  return <CategoryPage data={womanData} basePath="/women" />
}

export default WomenPage
