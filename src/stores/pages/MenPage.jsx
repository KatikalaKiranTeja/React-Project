import React from 'react'
import { menData } from '../data/men'
import CategoryPage from '../components/CategoryPage'

function MenPage() {
  return <CategoryPage data={menData} basePath="/men" />
}

export default MenPage
