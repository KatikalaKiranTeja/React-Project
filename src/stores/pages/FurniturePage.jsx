import React from 'react'
import { furnitureData } from '../data/furniture'
import CategoryPage from '../components/CategoryPage'

function FurniturePage() {
  return <CategoryPage data={furnitureData} basePath="/furniture" />
}

export default FurniturePage
