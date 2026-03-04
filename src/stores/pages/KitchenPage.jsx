import React from 'react'
import { kitchenData } from '../data/kitchen'
import CategoryPage from '../components/CategoryPage'

function KitchenPage() {
  return <CategoryPage data={kitchenData} basePath="/kitchen" />
}

export default KitchenPage
