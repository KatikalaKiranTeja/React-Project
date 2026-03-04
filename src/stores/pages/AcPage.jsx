import React from 'react'
import { acData } from '../data/ac'
import CategoryPage from '../components/CategoryPage'

function AcPage() {
  return <CategoryPage data={acData} basePath="/ac" />
}

export default AcPage
