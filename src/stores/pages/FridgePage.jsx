import React from 'react'
import { fridgeData } from '../data/fridge'
import CategoryPage from '../components/CategoryPage'

function FridgePage() {
  return <CategoryPage data={fridgeData} basePath="/fridge" />
}

export default FridgePage
