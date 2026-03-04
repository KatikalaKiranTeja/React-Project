import React from 'react'
import { mobileData } from '../data/proData'
import CategoryPage from '../components/CategoryPage'

function ProDataPage() {
  return <CategoryPage data={mobileData} basePath="/promobiles" />
}

export default ProDataPage
